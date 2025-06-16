import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import axios from 'axios';
import Loading from './Loading';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/categories')
            .then(res => {
                if (Array.isArray(res.data)) {
                    setCategories(res.data);
                } else {
                    console.error("Unexpected API format");
                }
            })
            .catch(err => {
                console.error("Failed to fetch categories:", err);
                setCategories([]);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="my-10 md:my-20 max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">Explore Book Categories</h2>
                <p className="text-gray-600 mt-2">
                    Browse through different genres and find your next favorite read.
                </p>
            </div>

            {loading ? (
                <Loading></Loading>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.length > 0 ? (
                        categories.map((cat, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg shadow-md p-4 text-center cursor-pointer hover:shadow-xl transition"
                                whileHover={{ scale: 1.05 }}
                                onClick={() => navigate(`/category/${cat.name}`)}
                            >
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-40 object-cover mb-4 rounded"
                                />
                                <h3 className="text-xl font-semibold">{cat.name}</h3>
                            </motion.div>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500">No categories found.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Categories;
