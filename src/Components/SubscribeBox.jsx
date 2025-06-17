import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SubscribeBox = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email.includes('@')) {
            toast.error('Enter a valid email address.');
            return;
        }

        toast.success(`Subscribed successfully!`);
        setEmail('');
    };

    return (
        <div
            className="relative mx-auto  p-6 md:p-10 max-w-11/12 lg:max-w-7xl"
            style={{
                backgroundImage: "url(https://i.postimg.cc/sDb9VWrQ/download.jpg)",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '0.5rem',
                height: 'auto',
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-60 rounded-md"></div>

            {/* Content Box */}
            <div className="relative z-10  flex flex-col md:flex-row items-center justify-between bg-white bg-opacity-95 rounded-md shadow-lg px-6 py-8 gap-6">
                {/* Left Text */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Get a FREE ebook by joining our mailing list today!
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base">
                        📚 Get book updates, recommendations, and exclusive content delivered to your inbox. No spam — just stories worth reading.
                    </p>
                </div>

                {/* Right Form */}
                <form
                    onSubmit={handleSubscribe}
                    className="w-full md:w-1/2 flex flex-col gap-2"
                >
                    <label className="text-sm font-semibold text-gray-700">Enter your email</label>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-4 py-2 rounded-md w-full text-gray-800 outline-none border border-gray-300"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-md font-medium transition"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SubscribeBox;
