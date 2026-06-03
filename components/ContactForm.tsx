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

const handleChange = (
e: React.ChangeEvent<
HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>
) => {
const { name, value } = e.target;

```
setFormData((prev) => ({
  ...prev,
  [name]: value,
}));
```

};

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();
setLoading(true);

```
try {
  await fetch(
    'https://nvgrowthhub.app.n8n.cloud/webhook/lead-capture',
    {
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
    }
  );

  const whatsappMessage = `Hi SmartCare! I would like to book a service.
```

Name: ${formData.fullName}
Phone: ${formData.phone}
Service Required: ${formData.service}
Address: ${formData.address}
Message: ${formData.message}`;

```
  const whatsappUrl = `https://wa.me/971525400103?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappUrl, '_blank');

  setFormData({
    fullName: '',
    phone: '',
    service: '',
    address: '',
    message: '',
  });
} catch (error) {
  console.error('Error:', error);
  alert('Something went wrong. Please try again.');
} finally {
  setLoading(false);
}
```

};

return ( <form onSubmit={handleSubmit} className="space-y-5"> <div> <label className="block text-sm font-semibold text-slate-700 mb-2">
Full Name </label> <input
       type="text"
       name="fullName"
       value={formData.fullName}
       onChange={handleChange}
       required
       className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:border-blue-500 focus:outline-none"
       placeholder="Your name"
     /> </div>

```
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
      className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:border-blue-500 focus:outline-none"
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
      className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:border-blue-500 focus:outline-none"
    >
      <option value="">Select a service...</option>

      {services.map((service) => (
        <option key={service} value={service}>
          {service}
        </option>
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
      className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:border-blue-500 focus:outline-none"
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
      className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:border-blue-500 focus:outline-none resize-none"
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
```

);
}
