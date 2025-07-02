import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';

const PromoSection = () => {
    return (
        <section className="py-24 px-6 bg-gradient-to-r from-white to-gray-50">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Dive Into Stories That Inspire 📚
                    </h2>
                    <p className="text-gray-600 mt-6 text-lg">
                        Discover thousands of books, borrow your favorites, and track your reading — all in one seamless platform.
                    </p>
                    <div className="mt-8">
                        <a
                            href="/books"
                            className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-indigo-700 transition"
                        >
                            Explore Library <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Image or Icon */}
                <div className="flex-1 flex justify-center">
                    <div className="bg-indigo-100 rounded-full p-10 shadow-xl">
                        <BookOpen className="w-28 h-28 text-indigo-600" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromoSection;
