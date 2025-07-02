import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 min-h-screen">
            <Helmet>
                <title>  ReadBooks | About Us</title>
            </Helmet>

            <h1 className="text-4xl font-bold text-center mb-6  ">About ReadBooks</h1>
            <p className="text-lg text-gray-700 mb-6 text-center max-w-3xl mx-auto">
                ReadBooks is your go-to online platform for discovering, borrowing, and enjoying books anytime, anywhere. Our mission is to make reading accessible, engaging, and seamless for everyone.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="bg-white p-6 rounded shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">📚 Our Mission</h2>
                    <p className="text-gray-700">
                        At ReadBooks, we believe in the power of books to inspire and educate. We aim to connect readers with a diverse range of genres and authors — whether you're into fiction, science, history, or self-help.
                    </p>
                </div>

                <div className="bg-white p-6 rounded shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">🔐 Easy & Secure Borrowing</h2>
                    <p className="text-gray-700">
                        Users can borrow books securely with their accounts using email/password or Google login. Our system tracks borrowed books and ensures smooth returns — all protected using Firebase Auth and secure token-based access.
                    </p>
                </div>

                <div className="bg-white p-6 rounded shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">🚀 Features You’ll Love</h2>
                    <ul className="list-disc ml-6 text-gray-700 space-y-2">
                        <li>Browse a curated library of books by category</li>
                        <li>Borrow and manage books from your dashboard</li>
                        <li>Return books with one click</li>
                        <li>Personalized experience with secure authentication</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">💬 Connect With Us</h2>
                    <p className="text-gray-700">
                        Whether you're a casual reader or a bookworm, ReadBooks is here for you. Reach out to us with feedback, book suggestions, or just to say hello!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
