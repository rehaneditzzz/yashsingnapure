"use client";

import * as Toast from "@radix-ui/react-toast";
import { ReactNode, createContext, useCallback, useContext, useState } from "react";
import { X } from "lucide-react";
import clsx from "clsx";

type Notification = {
  id: string;
  message: string;
};

type NotificationContextType = {
  notify: (message: string) => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const notify = useCallback((message: string) => {
    const id = Date.now().toString();
    setNotifications((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 4000);
  }, []);

  return (
    <NotificationContext.Provider value={{ notify }}>
      <Toast.Provider swipeDirection="right">
        {children}

        <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 w-[300px]">
          {notifications.map((n) => (
            <Toast.Root
              key={n.id}
              duration={4000}
              className={clsx(
                "bg-white absolute top-0 dark:bg-neutral-900 shadow-lg rounded-xl px-4 py-3 flex items-start justify-between space-x-4 animate-slideIn",
                "border border-neutral-200 dark:border-neutral-800"
              )}
            >
              <Toast.Description className="text-sm text-neutral-900 dark:text-neutral-100">
                {n.message}
              </Toast.Description>
              <Toast.Action asChild altText="Dismiss">
                <button
                  onClick={() =>
                    setNotifications((prev) => prev.filter((x) => x.id !== n.id))
                  }
                  className="text-neutral-500 hover:text-red-500 transition"
                >
                  <X size={16} />
                </button>
              </Toast.Action>
            </Toast.Root>
          ))}
        </div>
        <Toast.Viewport />
      </Toast.Provider>
    </NotificationContext.Provider>
  );
}

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within NotificationProvider");
  }
  return context;
};
