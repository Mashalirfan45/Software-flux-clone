"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-full border border-gray-200 bg-white px-8 py-4 text-gray-700 outline-none transition focus:border-[#8b238e]";

export default function CommentForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "", save: false });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send to your API route / email service here
    console.log("Comment:", form);
    setSent(true);
    setForm({ name: "", email: "", message: "", save: false });
  };

  const handleCancel = () => {
    setForm({ name: "", email: "", message: "", save: false });
    setSent(false);
  };

  return (
    <div className="mt-14">
      <div className="mb-6 flex items-center gap-4">
        <div>
          <h3 className="text-3xl font-extrabold text-[#1c1f7a]">Leave A Comment</h3>
          <span className="mt-1 block h-[3px] w-10 rounded bg-[#8b238e]" />
        </div>
        <button
          type="button"
          onClick={handleCancel}
          className="rounded bg-[#8b238e] px-3 py-1 text-xs font-bold uppercase text-white"
        >
          Cancel Comment
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <label className="flex items-center gap-3 text-gray-600">
          <input
            type="checkbox"
            name="save"
            checked={form.save}
            onChange={handleChange}
            className="h-5 w-5 accent-[#8b238e]"
          />
          Save my name, email, and website in this browser for the next time I comment.
        </label>

        <div className="grid gap-5 md:grid-cols-2">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name*"
            required
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email*"
            required
            className={inputClass}
          />
        </div>

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          required
          className="w-full rounded-[30px] border border-gray-200 bg-white px-8 py-5 text-gray-700 outline-none transition focus:border-[#8b238e]"
        />

        <button
          type="submit"
          className="rounded-full bg-gradient-to-r from-[#c040c4] to-[#8b238e] px-10 py-4 font-bold text-white transition hover:opacity-90"
        >
          Post Comment
        </button>

        {sent && (
          <p className="font-semibold text-green-600">
            Thanks! Your comment has been submitted.
          </p>
        )}
      </form>
    </div>
  );
}