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

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      // SEND TO N8N WEBHOOK
      await fetch('https://nvgrowthhub.app.n8n.cloud/webhook/lead-capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          phone: formData.phone,
          service: formData.service,
          address: formData.address,
          message: formData.message,
        }),
      });

      // WHATSAPP MESSAGE
      const whatsappMessage =
        'Hi SmartCare! I would like to book a service.\n\n' +
        'Name: ' + formData.fullName + '\n' +
        'Phone: ' + formData.phone + '\n' +
        'Service Required: ' + formData.service + '\n' +
        'Address: ' + formData.address + '\n' +
        'Message: ' + formData.message;

      const whatsappUrl =
        'https://wa.me/971525400103?text=' +
        encodeURIComponent(whatsappMessage);

      window.open(whatsappUrl, '_blank');

      // RESET FORM
      setFormData({
        fullName: '',
        phone: '',
        service: '',
        address: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      alert('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full p-2 border rounded"
        required
      />

      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="w-full p-2 border rounded"
        required
      />

      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      >
        <option value="">Select Service</option>
        {services.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <input
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
        className="w-full p-2 border rounded"
        required
      />

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        className="w-full p-2 border rounded"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white p-2 rounded flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <MessageCircle size={18} />
            Send
          </>
        )}
      </button>
    </form>
  );
}
