import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../Contexts/AuthContext';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const BorrowedBooks = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const [borrowed, setBorrowed] = useState([]);

    useEffect(() => {
        if (user?.email) {
            axios.get(`http://localhost:3000/borrowed?email=${user.email}`)
                .then(res => setBorrowed(res.data))
                .catch(err => console.log(err))
                .finally(() => setLoading(false));
        }
    }, [user]);

    const handleReturn = async (borrowId) => {
        try {
            await axios.delete(`http://localhost:3000/return/${borrowId}`);
            toast.success("Book returned!");
            setBorrowed(prev => prev.filter(b => b._id !== borrowId));
        } catch (error) {
            console.log(error)
            toast.error("Failed to return book");
        }
    };

    if (loading) return <p className="text-center mt-10">{loading} </p>;

    if (borrowed.length === 0) {
        return <p className="text-center text-gray-500 mt-10">No borrowed books found.</p>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 mt-10">
            <Helmet>
                <title>ReadBooks | Borrowed Books</title>
            </Helmet>
            <h2 className="text-3xl font-bold mb-6 text-center">My Borrowed Books</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {borrowed.map(book => (
                    <div key={book._id} className="bg-white p-4 rounded shadow-md">
                        <img src={book.image} alt={book.title} className="h-60 w-full object-contain rounded" />
                        <h3 className="text-xl font-semibold mt-3">{book.title || 'Untitled'}</h3>
                        <p><strong>Category:</strong> {book.category}</p>
                        <p><strong>Borrowed:</strong> {new Date(book.borrowedAt).toLocaleDateString()}</p>
                        <p><strong>Return By:</strong> {book.returnDate}</p>
                        <button
                            onClick={() => handleReturn(book._id)}
                            className="btn btn-error mt-4 w-full"
                        >
                            Return
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BorrowedBooks;
