import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, MapPin, Link } from 'lucide-react';

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const formEndpoint = 'https://formspree.io/f/placeholder';
    
    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="bg-cream text-black py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Stacked Square Motif Top Right */}
      <div className="absolute top-12 right-12 hidden md:block">
        <div className="relative w-8 h-8">
          <div className="absolute inset-0 bg-red translate-x-2 -translate-y-2 flex items-center justify-center text-white text-xs font-mono">+</div>
          <div className="absolute inset-0 border-2 border-black"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
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
              <div className="flex items-start gap-6">
                <div className="p-4 border border-black/10 bg-white"><Mail className="text-red" size={24} /></div>
                <div>
                  <h3 className="font-mono text-sm tracking-widest text-black/50 mb-2 uppercase">Email</h3>
                  <a href="mailto:iam.abinashshaji@gmail.com" className="text-xl font-medium hover:text-red transition-colors inline-block">
                    iam.abinashshaji@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="p-4 border border-black/10 bg-white"><MapPin className="text-red" size={24} /></div>
                <div>
                  <h3 className="font-mono text-sm tracking-widest text-black/50 mb-2 uppercase">Location</h3>
                  <p className="text-xl font-medium">Kerala, India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="p-4 border border-black/10 bg-white"><Link className="text-red" size={24} /></div>
                <div>
                  <h3 className="font-mono text-sm tracking-widest text-black/50 mb-4 uppercase">Socials</h3>
                  <div className="flex flex-wrap items-center gap-6 text-sm font-mono tracking-wider">
                    <a href="https://instagram.com/__abinash.__" target="_blank" rel="noreferrer" className="hover:text-red transition-colors font-medium">Instagram</a>
                    <a href="https://www.linkedin.com/in/abinashshaji" target="_blank" rel="noreferrer" className="hover:text-red transition-colors font-medium">LinkedIn</a>
                    <a href="https://github.com/AbinashShaji" target="_blank" rel="noreferrer" className="hover:text-red transition-colors font-medium">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#111] p-8 md:p-12 text-white relative"
          >
            {/* Top Red Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-red"></div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono text-sm tracking-widest text-white/50 uppercase">Your Name</label>
                <input 
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-red transition-colors w-full"
                />
                {errors.name && <span className="text-red text-sm">{errors.name.message}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono text-sm tracking-widest text-white/50 uppercase">Your Email</label>
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
                {errors.email && <span className="text-red text-sm">{errors.email.message}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="font-mono text-sm tracking-widest text-white/50 uppercase">Your Subject</label>
                <input 
                  id="subject"
                  {...register("subject", { required: "Subject is required" })}
                  className="bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-red transition-colors w-full"
                />
                {errors.subject && <span className="text-red text-sm">{errors.subject.message}</span>}
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="message" className="font-mono text-sm tracking-widest text-white/50 uppercase">Your Message</label>
                <textarea 
                  id="message"
                  rows="4"
                  {...register("message", { required: "Message is required" })}
                  className="bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-red transition-colors w-full resize-none"
                ></textarea>
                {errors.message && <span className="text-red text-sm">{errors.message.message}</span>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-white text-black font-mono tracking-widest py-4 px-8 uppercase text-sm font-bold hover:bg-red hover:text-white transition-colors self-start disabled:opacity-50 flex items-center gap-2 group"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'} <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              
              {submitStatus === 'success' && (
                <p className="text-green-500 font-mono text-sm mt-2">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red font-mono text-sm mt-2">Error sending message. Formspree endpoint not configured.</p>
              )}
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
