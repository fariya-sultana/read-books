import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';
import ReactStars from 'react-rating-stars-component';
import { motion } from 'framer-motion';

const CategoryBooks = () => {
    const { name } = useParams();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/books?category=${name}`)
            .then(res => setBooks(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, [name]);

    return (
        <div className="max-w-7xl mx-auto px-4 mt-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Category: {name}</h2>
            {loading ? (
                <p className="text-center">Loading books...</p>
            ) : books.length === 0 ? (
                <p className="text-center text-gray-500">No books found in this category.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {books.map(book => (
                        <motion.div
                            key={book._id}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white rounded-lg shadow-md p-4 flex flex-col"
                            layout
                        >
                            <img
                                src={book.image}
                                alt={book.name}
                                className="h-48 w-full object-cover rounded"
                            />
                            <div className="flex-1 mt-4">
                                <h3 className="text-xl font-semibold">{book.name}</h3>
                                <p className="text-gray-600">Author: {book.author}</p>
                                <p className="text-gray-600">Qty: {book.quantity}</p>
                                <ReactStars
                                    count={5}
                                    value={book.rating}
                                    size={24}
                                    isHalf={true}
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                            </div>
                            <button
                                onClick={() => navigate(`/book/${book._id}`)}
                                className="btn btn-primary mt-4"
                            >
                                Details
                            </button>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryBooks;
