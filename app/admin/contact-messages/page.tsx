"use client";

import { useEffect, useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline"; // Add icons
import toast from "react-hot-toast"; // Notification system (optional)

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function ContactMessagesPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const res = await fetch("/api/contact");
    const data = await res.json();
    setContacts(data);
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this message?");
    if (!confirmDelete) return;

    setDeletingId(id);

    try {
      const res = await fetch("/api/contact", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        setContacts((prev) => prev.filter((msg) => msg.id !== id));
        toast.success("Message deleted");
      } else {
        toast.error("Failed to delete");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error occurred");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-6">Contact Messages</h1>

      <div className="space-y-4">
        {contacts.length === 0 ? (
          <p className="text-white/70">No contact messages yet.</p>
        ) : (
          contacts.map((msg) => (
            <div
              key={msg.id}
              className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-white relative"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="font-semibold">{msg.name}</span>
                  <p className="text-sm text-white/60">{msg.email}</p>
                  <p className="text-sm text-white/70 mt-1">
                    {new Date(msg.createdAt).toLocaleString("en-IN", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </p>
                </div>

                <button
                  onClick={() => handleDelete(msg.id)}
                  disabled={deletingId === msg.id}
                  className="text-red-400 hover:text-red-600"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
              <p className="text-white/90">{msg.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
