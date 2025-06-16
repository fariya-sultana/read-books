import React, { use, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import StarRatings from 'react-star-ratings';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AuthContext } from '../Contexts/AuthContext';
import { Helmet } from 'react-helmet-async';

const BookDetails = () => {
    const { id } = useParams();
    const { user, loading } = use(AuthContext); // assuming user object { displayName, email }

    const [book, setBook] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [returnDate, setReturnDate] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:3000/books/${id}`)
            .then(res => setBook(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const handleBorrow = async (e) => {
        e.preventDefault();

        if (!returnDate) {
            toast.error("Please select a return date.");
            return;
        }

        try {
            await axios.post(`http://localhost:3000/borrow/${id}`, {
                name: user.displayName,
                email: user.email,
                returnDate,
            });

            toast.success("Book borrowed successfully!");
            setIsModalOpen(false);
            setBook(prev => ({
                ...prev,
                quantity: prev.quantity - 1
            }));
        } catch (err) {
            console.error('Borrow error:', err);

            // Check if server sent a message
            const errorMessage = err.response?.data?.message;

            if (errorMessage) {
                toast.error(errorMessage);
            } else {
                toast.error("Failed to borrow book. Please try again.");
            }
        }
    };


    if (!book) return <div className="text-center mt-10">{loading}</div>;

    return (
        <div className="max-w-4xl mx-auto mt-10 p-4 shadow-md bg-white rounded">
            <Helmet>
                <title>ReadBooks | {book.name}</title>
            </Helmet>
            <div className="flex flex-col md:flex-row gap-6">
                <img src={book.image} alt={book.name} className="w-full md:w-80 h-[350px] rounded" />

                <div className="space-y-3 my-auto">
                    <h2 className="text-3xl font-bold">{book.name}</h2>
                    <p><strong>Author:</strong> {book.author}</p>
                    <p><strong>Category:</strong> {book.category}</p>
                    <p><strong>Quantity:</strong> {book.quantity}</p>
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
                    <p className="text-gray-700 mt-2">{book.description || "No description available."}</p>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        disabled={book.quantity === 0}
                        className={`btn btn-primary mt-4 ${book.quantity === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {book.quantity === 0 ? 'Not Available' : 'Borrow'}
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md">
                        <h3 className="text-xl font-semibold mb-4">Borrow Book</h3>
                        <form onSubmit={handleBorrow} className="space-y-4">
                            <div>
                                <label>Name</label>
                                <input type="text" value={user.displayName} readOnly className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="email" value={user.email} readOnly className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label>Return Date</label>
                                <input
                                    type="date"
                                    value={returnDate}
                                    onChange={e => setReturnDate(e.target.value)}
                                    required
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="flex justify-between mt-6">
                                <button type="submit" className="btn btn-success">Confirm Borrow</button>
                                <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-ghost">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookDetails;
