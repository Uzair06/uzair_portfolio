import { EmailJSResponseStatus } from "@emailjs/browser";
import { data } from "autoprefixer";
import React, { useState } from "react"
import emailjs from "@emailjs/browser"
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";


const ContactForm = () => {

    const[formData, setFormData] = useState({
        name:"",
        email:"",
        message:"",
    })

    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);
    const handlechange = (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const validate = () => {
        let errors = {};
        if(!formData.name) errors.name = "Name is Required";
        if(!formData.email) {
            errors.email = "Email is required";
        }
        else if(!/\S+@\S+\.\S+/.test(formData.email)){
            errors.email = "Email is inavalid";
        }
        if(!formData.message) errors.message = "Message is Required";
        return errors; 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if(Object.keys(validationErrors).length > 0){
            setErrors(validationErrors);
        }
        else{
            setErrors({});
            setIsSending(true);

            emailjs
            .send(
                "portfolio",
                "template_uj5meek",
                formData,
                "AbED5FuuTeGw3iw6F"
            )
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                toast.success("Message sent successfully!");
                setFormData({name: "", email: "", message:"" });
            })
            .catch((error) => {
                console.log("FAILED...", error);
                toast.error("Failed to send message. Please try again later.")
            })
            .finally(() => {
                setIsSending(false); 
            })
        }
    }
  return (
    <div className="mx-auto max-w-3xl p-4" id="contact">
        <Toaster />
        <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
            Let's Connect
        </h2>
        <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration:0.8, delay: 1 }}
        onSubmit={handleSubmit}>
            <div className="mb-4">
                <input type="text" 
                id="name"
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handlechange}
                className="mb-8 w-full appearence-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
                />
                {errors.name && (
                    <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    aria-live="polite"
                    className="text-sm text-pink-700">{errors.name}</motion.p>
                )}
            </div>
            <div className="mb-4">
                <input type="email" 
                id="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handlechange}
                className="mb-8 w-full appearence-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
                />
                {errors.email && (
                    <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    aria-live="polite"
                    className="text-sm text-pink-700">{errors.email}</motion.p>
                )}
            </div>

            <div className="mb-4">
                <textarea 
                id="message"
                name="message"
                value={formData.message}
                placeholder="Message"
                onChange={handlechange}
                className="mb-8 w-full appearence-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
                rows="4"/>
                {errors.message && (
                    <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    aria-live="polite"
                    className="text-sm text-pink-700">{errors.message}</motion.p>
                )}
            </div>
            <button type="submit" className={`mb-8 w-full rounded bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-yellow-500 ${isSending ? "cursor-not-allowed opacity-50" : "" }`}
             disabled={isSending}>
                {isSending ? "Sending..." : "Send"}
             </button>
        </motion.form>
    </div>
  )
}

export default ContactForm