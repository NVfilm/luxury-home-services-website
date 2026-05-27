'use client';

import { useState } from 'react';
import { MessageCircle, Loader } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    service: '',
    address: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const services = [
    'AC Repair',
    'Refrigerator Repair',
    'Plumbing Service',
    'Electrical Repair',
    'Washing Machine Repair',
    'Kitchen Appliance Repair',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Create WhatsApp message
    const message = `Hi SmartCare! I would like to book a service.

Name: ${formData.fullName}
Phone: ${formData.phone}
Service Required: ${formData.service}
Address: ${formData.address}
Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/971525400103?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    setLoading(false);

    // Reset form
    setFormData({
      fullName: '',
      phone: '',
      service: '',
      address: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:border-blue-500 focus:outline-none bg-white/50 transition-all duration-300"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:border-blue-500 focus:outline-none bg-white/50 transition-all duration-300"
          placeholder="+971..."
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Service Required
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:border-blue-500 focus:outline-none bg-white/50 transition-all duration-300"
        >
          <option value="">Select a service...</option>
          {services.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Address
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:border-blue-500 focus:outline-none bg-white/50 transition-all duration-300"
          placeholder="Your location"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:border-blue-500 focus:outline-none bg-white/50 transition-all duration-300 resize-none"
          placeholder="Describe your issue..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full luxury-button-primary flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader size={20} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <MessageCircle size={20} />
            Send via WhatsApp
          </>
        )}
      </button>
    </form>
  );
}
