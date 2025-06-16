import React, { useEffect, useState, useContext } from 'react';
import { useParams, Navigate } from 'react-router';
import axios from 'axios';
import ReactStars from 'react-rating-stars-component';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import { AuthContext } from '../Contexts/AuthContext';

Modal.setAppElement('#root');

const BookDetails = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [book, setBook] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [returnDate, setReturnDate] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:3000/books/${id}`)
            .then(res => setBook(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, [id]);

    const handleBorrow = () => {
        if (!returnDate) {
            return Swal.fire('Error', 'Choose a return date', 'error');
        }
        axios.post('http://localhost:3000/borrow', {
            bookId: id,
            userEmail: user.email,
            userName: user.displayName,
            returnDate
        })
            .then(() => {
                Swal.fire('Success', 'Book borrowed!', 'success');
                setBook(prev => ({ ...prev, quantity: prev.quantity - 1 }));
                setModalOpen(false);
            })
            .catch(err => Swal.fire('Error', err.message, 'error'));
    };

    if (!user) return <Navigate to="/login" replace />;
    if (loading) return <p>Loading...</p>;
    if (!book) return <p>Book not found.</p>;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex flex-col md:flex-row gap-8">
                <img
                    src={book.image}
                    alt={book.name}
                    className="w-full md:w-1/3 object-cover rounded"
                />
                <div className="flex-1">
                    <h2 className="text-4xl font-bold mb-2">{book.name}</h2>
                    <p className="text-lg text-gray-700">Author: {book.author}</p>
                    <p className="text-gray-700">Category: {book.category}</p>
                    <p className="text-gray-700 mb-2">Available: {book.quantity}</p>
                    <ReactStars
                        count={5}
                        value={book.rating}
                        size={24}
                        isHalf={true}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className="mt-4 text-gray-800">{book.description}</p>
                    <button
                        onClick={() => setModalOpen(true)}
                        disabled={book.quantity < 1}
                        className="btn btn-primary mt-6"
                    >
                        {book.quantity > 0 ? 'Borrow Book' : 'Out of Stock'}
                    </button>
                </div>
            </div>

            <Modal
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}
                className="modal-box w-full max-w-md mx-auto"
                overlayClassName="modal-overlay bg-black bg-opacity-50 flex justify-center items-center"
            >
                <h2 className="text-2xl font-bold mb-4">Borrow "{book.name}"</h2>
                <form className="space-y-4">
                    <input type="text" value={user.displayName} disabled className="input w-full" />
                    <input type="email" value={user.email} disabled className="input w-full" />
                    <input
                        type="date"
                        value={returnDate}
                        onChange={e => setReturnDate(e.target.value)}
                        className="input w-full"
                    />
                    <button type="button" onClick={handleBorrow} className="btn btn-primary w-full">
                        Confirm Borrow
                    </button>
                </form>
                <button className="btn btn-ghost mt-4" onClick={() => setModalOpen(false)}>
                    Cancel
                </button>
            </Modal>
        </div>
    );
};

export default BookDetails;
