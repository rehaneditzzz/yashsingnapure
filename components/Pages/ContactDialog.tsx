"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/lib/store/contactModalStore";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

export default function ContactDialog() {
  const { isOpen, closeModal } = useContactModal();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data: any) => {
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });
    reset();
    closeModal();
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="max-w-md w-[90vw] rounded-xl border border-white/10 bg-white/10 backdrop-blur-lg text-white shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Get in Touch</DialogTitle>
          <DialogDescription className="text-white/70">
            Fill out the form below, I’ll reach out soon!
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <Input
            {...register("name")}
            placeholder="Your Name"
            className="bg-white/5 text-white placeholder-white/60"
          />
          {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}

          <Input
            {...register("email")}
            type="email"
            placeholder="Your Email"
            className="bg-white/5 text-white placeholder-white/60"
          />
          {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}

          <Textarea
            {...register("message")}
            placeholder="Your Message"
            rows={4}
            className="bg-white/5 text-white placeholder-white/60"
          />
          {errors.message && <p className="text-red-400 text-sm">{errors.message.message}</p>}

          <div className="flex justify-end gap-2">
            <DialogClose asChild>
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send"}
            </Button>
          </div>
        </form>

        <DialogClose asChild>
          <button className="absolute top-3 right-3 text-white/80 hover:text-white transition">
            <X className="w-5 h-5" />
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
