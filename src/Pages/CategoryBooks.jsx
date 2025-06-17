import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import { motion } from 'framer-motion';
import Loading from '../Components/Loading';
import { Helmet } from 'react-helmet-async';

const CategoryBooks = () => {
    const { name } = useParams();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://read-books-server-two.vercel.app/books?category=${name}`)
            .then(res => setBooks(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, [name]);

    return (
        <div className="max-w-7xl mx-auto px-4 mt-10 ">
            <Helmet>
                <title>ReadBooks | All {name} Books</title>
            </Helmet>
            <h2 className="text-3xl font-bold mb-6 text-center">Category: {name}</h2>

            {loading ? (
                <Loading></Loading>
            ) : books.length === 0 ? (
                <div className='min-h-[530px] flex justify-center items-center'><p className="text-center  text-primary text-3xl">No books found in this category.</p></div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {books.map(book => (
                        <motion.div
                            key={book._id}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white rounded-lg shadow-md  flex flex-col card"
                            layout
                        >
                            <img
                                src={book.image}
                                alt={book.name}
                                className="h-80
                                 rounded"
                            />
                            <div className="flex-1 mt-4 space-y-1 p-4 card-body">
                                <h3 className="text-xl font-semibold">{book.name}</h3>
                                <p className="text-gray-700"><strong>Author:</strong> {book.author}</p>
                                <p className="text-gray-700"><strong>Category:</strong> {book.category}</p>
                                <p className="text-gray-700"><strong>Quantity:</strong> {book.quantity}</p>

                                <div className="flex items-center p-1  ">
                                    <StarRatings
                                        rating={book.rating}
                                        starRatedColor="gold"
                                        numberOfStars={5}
                                        name="rating"
                                        starDimension="24px"
                                        starSpacing="2px"
                                    />
                                </div>



                                <div className='card-actions justify-end'>
                                    <Link to={`/book/${book._id}`}><button
                                        className="btn btn-primary mt-4 w-full"
                                    >
                                        Details
                                    </button></Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryBooks;
