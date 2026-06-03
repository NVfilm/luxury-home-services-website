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

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    // Send lead to n8n
    await fetch("https://nvgrowthhub.app.n8n.cloud/webhook/lead-capture", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.fullName,
        phone: formData.phone,
        service: formData.service,
        address: formData.address,
        message: formData.message,
      }),
    });

    // Create WhatsApp message
    const message = `Hi SmartCare! I would like to book a service.

Name: ${formData.fullName}
Phone: ${formData.phone}
Service Required: ${formData.service}
Address: ${formData.address}
Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/971525400103?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    // Reset form
    setFormData({
      fullName: "",
      phone: "",
      service: "",
      address: "",
      message: "",
    });

  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};
      </button>
    </form>
  );
}
