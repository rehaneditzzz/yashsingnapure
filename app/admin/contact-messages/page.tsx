"use client";

import { useEffect, useState } from "react";

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function ContactMessagesPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const res = await fetch("/api/contact");
      const data = await res.json();
      setContacts(data);
    };
    fetchContacts();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-6">Contact Messages</h1>

      <div className="space-y-4">
        {contacts.length === 0 && (
          <p className="text-white/70">No contact messages yet.</p>
        )}

        {contacts.map((msg) => (
          <div
            key={msg.id}
            className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-white"
          >
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{msg.name}</span>
              <span className="text-sm text-white/60">
                {new Date(msg.createdAt).toLocaleString()}
              </span>
            </div>
            <p className="text-sm text-white/80 mb-1">{msg.email}</p>
            <p className="text-white/90">{msg.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
