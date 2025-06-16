import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaSeedling } from 'react-icons/fa';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 px-4 text-center">
            <Helmet>
                <title>Read Books | Error</title>
            </Helmet>
            <div className="max-w-md">
                <FaSeedling className="text-6xl text-primary animate-bounce mb-4 mx-auto" />
                <h1 className="text-6xl font-bold text-secondary mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-red-500 mb-2">Oops! Page Not Found</h2>
                <p className=" text-primary mb-6">
                    It seems you've turned the wrong page. <br />
                    The page you're looking for doesn’t exist in ReadBooks.
                </p>
                <Link
                    to="/"
                    className="btn btn-primary text-white px-6 rounded-full hover:bg-gray-500 transition"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default Error;