"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare, Check, AlertCircle, Send } from "lucide-react";
import confetti from "canvas-confetti";
import BusinessCard from "@/components/BusinessCard";

interface FormState {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  serviceType?: string;
  message?: string;
}

const SERVICE_OPTIONS = [
  "Income Tax Returns",
  "Sales Tax / GST Returns",
  "SECP Company Registration",
  "Business Structures & Advisory",
  "Corporate Legal Contracts",
  "Real Estate Taxation",
  "Audit Representation",
  "General Inquiries"
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required.";
    } else if (formData.name.trim().length < 3) {
      tempErrors.name = "Name must be at least 3 characters.";
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required.";
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      tempErrors.phone = "Provide a valid phone number (e.g. 03341537350).";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      tempErrors.email = "Provide a valid email address.";
    }

    if (!formData.serviceType) {
      tempErrors.serviceType = "Select a service type.";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message cannot be empty.";
    } else if (formData.message.trim().length < 15) {
      tempErrors.message = "Message must be at least 15 characters.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Trigger premium gold confetti rain
    const count = 150;
    const defaults = {
      origin: { y: 0.6 },
      colors: ["#D4AF37", "#C9A227", "#FFF", "#9A7B1C"]
    };

    confetti({
      ...defaults,
      particleCount: Math.floor(count * 0.25),
      spread: 26,
      startVelocity: 55,
    });
    confetti({
      ...defaults,
      particleCount: Math.floor(count * 0.2),
      spread: 60,
    });
    confetti({
      ...defaults,
      particleCount: Math.floor(count * 0.35),
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    confetti({
      ...defaults,
      particleCount: Math.floor(count * 0.1),
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      serviceType: "",
      message: ""
    });
    setIsSuccess(false);
  };

  return (
    <div className="bg-luxury-bg min-h-screen py-16 relative">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Page Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-semibold font-body">
            Contact Us
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-3 text-luxury-white">
            Connect With Our Advisors
          </h1>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mt-4" />
          <p className="font-body text-base text-luxury-muted mt-6 leading-relaxed">
            Get professional tax preparation, STRN registrations, SECP consulting, or property tax replies from our PECHS office.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="flex flex-col space-y-6">
              <h2 className="font-serif text-2xl font-bold text-luxury-white tracking-wide">
                Office Information
              </h2>
              <p className="font-body text-sm text-luxury-muted leading-relaxed">
                Contact our Chartered Accountant or legal consulting specialists directly, or book a consultation via our form.
              </p>

              {/* Info Cards */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start space-x-4 p-5 rounded-xl bg-luxury-card/50 border border-luxury-gold/15 hover:border-luxury-gold/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-luxury-gold/5 border border-luxury-gold/25 shrink-0 text-luxury-gold">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-luxury-white tracking-wider uppercase">
                      Phone Number
                    </h4>
                    <a href="tel:03183608176" className="font-body text-base text-luxury-muted hover:text-luxury-gold transition-colors mt-1 block">
                      0318-3608176
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4 p-5 rounded-xl bg-luxury-card/50 border border-luxury-gold/15 hover:border-luxury-gold/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-luxury-gold/5 border border-luxury-gold/25 shrink-0 text-luxury-gold">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-luxury-white tracking-wider uppercase">
                      WhatsApp Chat
                    </h4>
                    <a
                      href="https://wa.me/923341537350?text=Assalamualaikum"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-base text-luxury-muted hover:text-luxury-gold transition-colors mt-1 block"
                    >
                      0334-1537350
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 p-5 rounded-xl bg-luxury-card/50 border border-luxury-gold/15 hover:border-luxury-gold/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-luxury-gold/5 border border-luxury-gold/25 shrink-0 text-luxury-gold">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-luxury-white tracking-wider uppercase">
                      Email Address
                    </h4>
                    <a href="mailto:chartard12@gmail.com" className="font-body text-base text-luxury-muted hover:text-luxury-gold transition-colors mt-1 block break-all">
                      chartard12@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4 p-5 rounded-xl bg-luxury-card/50 border border-luxury-gold/15 hover:border-luxury-gold/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-luxury-gold/5 border border-luxury-gold/25 shrink-0 text-luxury-gold">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-luxury-white tracking-wider uppercase">
                      Office Address
                    </h4>
                    <p className="font-body text-sm text-luxury-muted mt-1 leading-relaxed">
                      PECHS, Karachi, Sindh, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Business Card Preview */}
            <BusinessCard />

            {/* Time Slot */}
            <div className="p-5 rounded-xl bg-luxury-gold/5 border border-luxury-gold/20 flex items-center space-x-4">
              <Clock className="text-luxury-gold shrink-0" size={24} />
              <div className="font-body text-xs md:text-sm text-luxury-goldSoft font-medium leading-normal">
                Availability: Our support lines and physical workspace are open 24/7 for premium clients.
              </div>
            </div>
          </div>

          {/* Right Column - Validation Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-8 md:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-luxury-gold/30 h-full relative overflow-hidden flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <h3 className="font-serif text-2xl font-bold text-luxury-white mb-6">
                      Schedule a Free consultation
                    </h3>

                    {/* Name */}
                    <div className="flex flex-col space-y-1.5 text-left">
                      <label htmlFor="name" className="text-xs uppercase tracking-wider text-luxury-white/80 font-body font-semibold">
                        Your Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded bg-luxury-bg border ${
                            errors.name ? "border-red-500/50 focus:border-red-500" : "border-luxury-gold/20 focus:border-luxury-gold"
                          } text-luxury-white text-sm font-body outline-none transition-colors duration-300`}
                          placeholder="e.g. Muhammad Ali"
                        />
                        {errors.name && (
                          <span className="absolute right-3 top-3.5 text-red-500 flex items-center space-x-1 text-xs">
                            <AlertCircle size={14} className="shrink-0" />
                          </span>
                        )}
                      </div>
                      {errors.name && <p className="text-[11px] text-red-500 font-body">{errors.name}</p>}
                    </div>

                    {/* Contact Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Email */}
                      <div className="flex flex-col space-y-1.5 text-left">
                        <label htmlFor="email" className="text-xs uppercase tracking-wider text-luxury-white/80 font-body font-semibold">
                          Email Address
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded bg-luxury-bg border ${
                              errors.email ? "border-red-500/50 focus:border-red-500" : "border-luxury-gold/20 focus:border-luxury-gold"
                            } text-luxury-white text-sm font-body outline-none transition-colors duration-300`}
                            placeholder="e.g. name@domain.com"
                          />
                          {errors.email && (
                            <span className="absolute right-3 top-3.5 text-red-500 flex items-center space-x-1 text-xs">
                              <AlertCircle size={14} className="shrink-0" />
                            </span>
                          )}
                        </div>
                        {errors.email && <p className="text-[11px] text-red-500 font-body">{errors.email}</p>}
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col space-y-1.5 text-left">
                        <label htmlFor="phone" className="text-xs uppercase tracking-wider text-luxury-white/80 font-body font-semibold">
                          Phone Number
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded bg-luxury-bg border ${
                              errors.phone ? "border-red-500/50 focus:border-red-500" : "border-luxury-gold/20 focus:border-luxury-gold"
                            } text-luxury-white text-sm font-body outline-none transition-colors duration-300`}
                            placeholder="e.g. 03341537350"
                          />
                          {errors.phone && (
                            <span className="absolute right-3 top-3.5 text-red-500 flex items-center space-x-1 text-xs">
                              <AlertCircle size={14} className="shrink-0" />
                            </span>
                          )}
                        </div>
                        {errors.phone && <p className="text-[11px] text-red-500 font-body">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Service Type Selection */}
                    <div className="flex flex-col space-y-1.5 text-left">
                      <label htmlFor="serviceType" className="text-xs uppercase tracking-wider text-luxury-white/80 font-body font-semibold">
                        Select Service Category
                      </label>
                      <div className="relative">
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded bg-luxury-bg border appearance-none ${
                            errors.serviceType ? "border-red-500/50 focus:border-red-500" : "border-luxury-gold/20 focus:border-luxury-gold"
                          } text-luxury-white text-sm font-body outline-none transition-colors duration-300 cursor-pointer`}
                        >
                          <option value="">-- Choose Category --</option>
                          {SERVICE_OPTIONS.map((opt, i) => (
                            <option key={i} value={opt} className="bg-[#151515] text-luxury-white">
                              {opt}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-4 top-4 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-luxury-gold/70" />
                      </div>
                      {errors.serviceType && <p className="text-[11px] text-red-500 font-body">{errors.serviceType}</p>}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col space-y-1.5 text-left">
                      <label htmlFor="message" className="text-xs uppercase tracking-wider text-luxury-white/80 font-body font-semibold">
                        Detail Your Inquiry
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded bg-luxury-bg border ${
                            errors.message ? "border-red-500/50 focus:border-red-500" : "border-luxury-gold/20 focus:border-luxury-gold"
                          } text-luxury-white text-sm font-body outline-none transition-colors duration-300 resize-none`}
                          placeholder="Please supply specific details regarding NTN filing, SECP targets, audits, or property matters..."
                        />
                      </div>
                      {errors.message && <p className="text-[11px] text-red-500 font-body">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2 py-4 rounded bg-gradient-to-r from-luxury-gold to-luxury-goldSoft hover:from-luxury-goldSoft hover:to-luxury-gold text-luxury-bg font-body font-bold uppercase tracking-wider text-xs transition-all duration-300 shadow-[0_4px_15px_rgba(212,175,55,0.2)] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="w-5 h-5 rounded-full border-2 border-luxury-bg border-t-transparent animate-spin" />
                      ) : (
                        <>
                          <Send size={14} />
                          <span>Submit Inquiry</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center p-6 space-y-6"
                  >
                    {/* Glowing check circle */}
                    <div className="w-20 h-20 rounded-full flex items-center justify-center bg-luxury-gold/10 border border-luxury-gold animate-bounce">
                      <Check size={36} className="text-luxury-gold" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif text-3xl font-bold text-luxury-white">
                        Inquiry Received!
                      </h3>
                      <p className="font-body text-sm text-luxury-muted leading-relaxed max-w-sm">
                        Thank you for reaching out. A Chartered Accountant or compliance partner from Hayat Tax Consultants & Co. will contact you within the hour.
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-2">
                      <button
                        onClick={resetForm}
                        className="px-6 py-3 rounded border border-luxury-gold/30 hover:border-luxury-gold text-luxury-white font-body text-xs font-bold uppercase tracking-wider transition-colors duration-300"
                      >
                        Send Another Message
                      </button>
                      <a
                        href="https://wa.me/923341537350?text=Assalamualaikum"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded bg-luxury-gold hover:bg-luxury-goldSoft text-luxury-bg font-body text-xs font-bold uppercase tracking-wider transition-colors duration-300"
                      >
                        WhatsApp Chat
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
