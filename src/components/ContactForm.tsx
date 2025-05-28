import { useState } from 'react';

type FormData = {
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  message: string;
  requiredService: string;
  eventDate: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    message: '',
    requiredService: '',
    eventDate: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    setSubmitted(true);
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: '',
      message: '',
      requiredService: '',
      eventDate: '',
    });
  };

  return (
    <div className="w-full max-w-xl bg-white/90 p-6 rounded-lg shadow-md border border-[#BA9E52]">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
        Submit your queries!
      </h2>

      {submitted && (
        <p className="text-green-600 text-sm mb-4 text-center">
          Thank you! We'll get back to you soon.
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#BA9E52]"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#BA9E52]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#BA9E52]"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              name="contactNumber"
              value={form.contactNumber}
              onChange={handleChange}
              type="tel"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#BA9E52]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Required Service
            </label>
            <input
              name="requiredService"
              value={form.requiredService}
              onChange={handleChange}
              type="text"
              placeholder="e.g., Wedding, Corporate, Event"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#BA9E52]"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Event Date
            </label>
            <input
              name="eventDate"
              value={form.eventDate}
              onChange={handleChange}
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#BA9E52]"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#BA9E52]"
          />
        </div>

        <button
          type="submit"
          className="bg-[#BA9E52] hover:bg-black text-white font-medium py-2 px-6 rounded transition"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
