import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../Contexts/AuthContext';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import Loading from '../Components/Loading';

const BorrowedBooks = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const [borrowed, setBorrowed] = useState([]);

    console.log('token in the context', user.accessToken)

    useEffect(() => {
        if (user?.email) {
            axios.get(`https://read-books-server-two.vercel.app/borrowed?email=${user.email}`, {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`
                }
            })
                .then(res => setBorrowed(res.data))
                .catch(err => console.log(err))
                .finally(() => setLoading(false));
        }
    }, [user]);

    const handleReturn = async (borrowId) => {
        try {
            await axios.delete(`https://read-books-server-two.vercel.app/return/${borrowId}`);
            toast.success("Book returned!");
            setBorrowed(prev => prev.filter(b => b._id !== borrowId));
        } catch (error) {
            console.log(error)
            toast.error("Failed to return book");
        }
    };

    if (!loading && borrowed.length === 0) {
        return (
        <div className='min-h-[530px] flex justify-center items-center'><p className="text-center  text-primary text-3xl">No borrowed books found.</p></div>
    );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 mt-10 min-h-screen">
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
                            className="btn hover:bg-red-800 text-white bg-red-700 mt-4 w-full"
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
