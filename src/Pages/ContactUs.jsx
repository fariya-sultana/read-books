import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <Helmet>
                <title> ReadBooks | Contact </title>
            </Helmet>

            <div className="w-full max-w-2xl">
                <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
                    Contact Us
                </h1>
                <p className="text-center text-gray-500 mb-8">
                    We're here to answer your questions and help you discover your next favorite read.
                </p>

                {submitted ? (
                    <div className="text-center text-green-600 text-lg font-medium">
                        ✅ Thanks! We'll be in touch soon.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-700 font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-700 font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                required
                                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-700 font-medium">Message</label>
                            <textarea
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="What's on your mind?"
                                required
                                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-gray-400 text-white py-3 rounded-lg font-semibold transition duration-200"
                        >
                            Send Message
                        </button>
                    </form>
                )}

                <div className="mt-10 text-center text-sm text-gray-600 space-y-1">
                    <p>Email: <span className="font-medium">contact@readbooks.com</span></p>
                    <p>Phone: +1 (555) 123-BOOK</p>
                    <p>Address: 456 Reading Ave, Booktown, BK 78901</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
