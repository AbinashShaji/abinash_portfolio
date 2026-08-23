/**
 * CONTACT COMPONENT (contact.jsx)
 * 
 * What this file is:
 * This component handles the final section of the page where users can send an email to the developer.
 * 
 * What it's responsible for:
 * It displays contact information (email, location, socials) and contains a fully functional 
 * contact form. It uses EmailJS to securely send the form data directly to a Gmail inbox 
 * without needing a custom backend server.
 * 
 * Where it's used:
 * Rendered in `App.jsx`, at the very bottom of the page content (right before the Footer).
 * 
 * Dependencies:
 * - 'react-hook-form': A powerful library that handles form state, validation, and error messages easily.
 * - '@emailjs/browser': The official EmailJS SDK used to send the emails.
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
// Import the form management hooks
import { useForm } from 'react-hook-form';
import { Mail, MapPin, Link } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
// Import the email sending library
import emailjs from '@emailjs/browser';

export default function Contact() {
  /*
    useForm() setup:
    - register: We attach this to our HTML inputs so React Hook Form can track what the user types.
    - handleSubmit: A wrapper function that runs our custom logic ONLY if the form passes validation.
    - formState: { errors }: Gives us access to any validation errors (e.g. if an email is invalid).
    - reset: A function we can call to clear all form fields after a successful submission.
  */
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  // 'isSubmitting' tracks if an email is currently sending. We use this to disable the button so users can't spam click it.
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // 'submitStatus' tracks the result of the submission (null, 'success', or 'error') to show feedback messages.
  const [submitStatus, setSubmitStatus] = useState(null);

  // This function runs when the user clicks "SEND MESSAGE" (assuming the form has no errors)
  const onSubmit = async (data) => {
    setIsSubmitting(true); // Lock the form and change button text to "SENDING..."
    setSubmitStatus(null); // Clear any previous success/error messages

    try {
      // Try to send the email using EmailJS. 
      // It pulls the secret keys directly from our local .env file.
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data, // This 'data' object contains the name, email, subject, and message the user typed!
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // If the code makes it here without failing, the email was sent successfully!
      setSubmitStatus('success');
      reset(); // Clear the text boxes
    } catch (error) {
      // If something broke (e.g. bad internet or wrong API keys), log the error and show a failure message
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      // The 'finally' block runs no matter what (success or failure).
      // We unlock the form button here.
      setIsSubmitting(false);
      // Wait 5 seconds, then hide the success/error message automatically.
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="bg-cream paper-texture text-black py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      
      {/* Decorative Stacked Square Motif (Top Right) */}
      <div className="absolute top-12 right-12 hidden md:block">
        <div className="relative w-8 h-8">
          <div className="absolute inset-0 bg-red translate-x-2 -translate-y-2 flex items-center justify-center text-white text-xs font-mono">+</div>
          <div className="absolute inset-0 border-2 border-black"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl uppercase text-black tracking-tighter">
            LET'S <span className="text-red">CONNECT</span>
          </h2>
        </motion.div>

        {/* 2-Column Grid for large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-12"
          >
            <p className="text-2xl md:text-3xl leading-relaxed tracking-tight">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="flex flex-col gap-10 mt-4">
              
              {/* Info Block: Email */}
              <div className="flex items-start gap-6">
                <div className="p-4 border border-black/10 bg-white rounded-2xl shadow-sm"><Mail className="text-red" size={24} /></div>
                <div>
                  <h3 className="font-mono text-sm tracking-widest text-black/50 mb-2 uppercase">Email</h3>
                  <a href="mailto:iam.abinashshaji@gmail.com" className="text-xl font-medium hover:text-red transition-colors inline-block">
                    iam.abinashshaji@gmail.com
                  </a>
                </div>
              </div>

              {/* Info Block: Location */}
              <div className="flex items-start gap-6">
                <div className="p-4 border border-black/10 bg-white rounded-2xl shadow-sm"><MapPin className="text-red" size={24} /></div>
                <div>
                  <h3 className="font-mono text-sm tracking-widest text-black/50 mb-2 uppercase">Location</h3>
                  <p className="text-xl font-medium">Kerala, India</p>
                </div>
              </div>

              {/* Info Block: Socials */}
              <div className="flex items-start gap-6">
                <div className="p-4 border border-black/10 bg-white rounded-2xl shadow-sm"><Link className="text-red" size={24} /></div>
                <div>
                  <h3 className="font-mono text-sm tracking-widest text-black/50 mb-4 uppercase">Socials</h3>
                  <div className="flex flex-wrap items-center gap-6 text-sm font-mono tracking-wider">
                    <a href="https://instagram.com/___abinash.__" target="_blank" rel="noreferrer" className="hover:text-red transition-colors font-medium" aria-label="Instagram">
                      <FaInstagram size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/abinashshaji" target="_blank" rel="noreferrer" className="hover:text-red transition-colors font-medium" aria-label="LinkedIn">
                      <FaLinkedin size={24} />
                    </a>
                    <a href="https://github.com/AbinashShaji" target="_blank" rel="noreferrer" className="hover:text-red transition-colors font-medium" aria-label="GitHub">
                      <FaGithub size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: The Email Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#111] p-8 md:p-12 text-white relative"
          >
            {/* Top Red Accent Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-red"></div>

            {/* 
              The form uses React Hook Form's 'handleSubmit'. 
              When the user clicks submit, it checks all rules. If they pass, it runs our 'onSubmit' function.
            */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
              
              {/* Input: Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono text-sm tracking-widest text-white/50 uppercase">Your Name</label>
                {/* register("name") links this input to the form data. 'required: ...' is the rule. */}
                <input
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-red transition-colors w-full"
                />
                {/* If there's an error for 'name', print it out in red */}
                {errors.name && <span className="text-red text-xs uppercase tracking-widest font-mono mt-1">{errors.name.message}</span>}
              </div>

              {/* Input: Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono text-sm tracking-widest text-white/50 uppercase">Your Email</label>
                {/* This 'pattern' uses a Regular Expression (Regex) to ensure the text actually looks like an email address */}
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-red transition-colors w-full"
                />
                {errors.email && <span className="text-red text-xs uppercase tracking-widest font-mono mt-1">{errors.email.message}</span>}
              </div>

              {/* Input: Subject */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="font-mono text-sm tracking-widest text-white/50 uppercase">Your Subject</label>
                <input
                  id="subject"
                  {...register("subject", { required: "Subject is required" })}
                  className="bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-red transition-colors w-full"
                />
                {errors.subject && <span className="text-red text-xs uppercase tracking-widest font-mono mt-1">{errors.subject.message}</span>}
              </div>

              {/* Input: Message (Textarea) */}
              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="message" className="font-mono text-sm tracking-widest text-white/50 uppercase">Your Message</label>
                {/* Ensures the user doesn't just send a 2-letter message like "hi" */}
                <textarea
                  id="message"
                  rows="4"
                  {...register("message", { 
                    required: "Message is required",
                    minLength: { value: 10, message: "Message must be at least 10 characters" }
                  })}
                  className="bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-red transition-colors w-full resize-none"
                ></textarea>
                {errors.message && <span className="text-red text-xs uppercase tracking-widest font-mono mt-1">{errors.message.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                // If 'isSubmitting' is true, this button becomes disabled so it can't be clicked again
                disabled={isSubmitting}
                className="bg-white text-black font-mono tracking-widest py-4 px-8 uppercase text-sm font-bold hover:bg-red hover:text-white transition-colors self-start disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-black flex items-center gap-2 group"
              >
                {/* Dynamically change the text based on the submission state */}
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'} 
                
                {/* Only show the arrow if it's NOT submitting */}
                {!isSubmitting && <span className="group-hover:translate-x-1 transition-transform">→</span>}
              </button>

              {/* Success & Error UI Feedback */}
              {submitStatus === 'success' && (
                <p className="text-cream font-mono text-xs md:text-sm uppercase tracking-widest mt-2 border-l-2 border-red pl-4 py-1">Message sent — I'll get back to you soon.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red font-mono text-xs md:text-sm uppercase tracking-widest mt-2 border-l-2 border-red pl-4 py-1">Something went wrong — please email me directly instead.</p>
              )}
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
