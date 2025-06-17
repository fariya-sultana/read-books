import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet-async';

const AddBook = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        image: '',
        name: '',
        quantity: 1,
        author: '',
        category: '',
        description: '',
        rating: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'quantity' || name === 'rating' ? Number(value) : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://read-books-server-two.vercel.app/books', formData);
            if (res.data.insertedId) {
                toast.success('Book added successfully!');
                navigate('/');
            } else {
                toast.error('Something went wrong.');
            }
        } catch (err) {
            console.error(err);
            toast.error('Failed to add book.');
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
            <Helmet>
                <title>ReadBooks | Add Book</title>
            </Helmet>
            <h2 className="text-3xl font-bold mb-6 text-center">Add New Book</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium mb-1">Image URL</label>
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="Enter book cover image URL"
                        className="w-full input input-bordered"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Book Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter book title"
                        className="w-full input input-bordered"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Author Name</label>
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        placeholder="Enter author name"
                        className="w-full input input-bordered"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Category</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full select select-bordered"
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Novel">Novel</option>
                        <option value="Thriller">Thriller</option>
                        <option value="History">History</option>
                        <option value="Drama">Drama</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                    </select>
                </div>

                <div>
                    <label className="block font-medium mb-1">Quantity</label>
                    <input
                        type="number"
                        name="quantity"
                        min="1"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="Enter quantity available"
                        className="w-full input input-bordered"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Rating (1 to 5)</label>
                    <input
                        type="number"
                        name="rating"
                        min="1"
                        max="5"
                        value={formData.rating}
                        onChange={handleChange}
                        placeholder="Enter rating (1-5)"
                        className="w-full input input-bordered"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Short Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Enter a short description of the book"
                        className="w-full textarea textarea-bordered"
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary w-full mt-4">
                    Add Book
                </button>
            </form>

            {/* Static book content */}
            <div className="mt-10 border-t pt-6">
                <h3 className="text-xl font-bold mb-2">Why Add a Book?</h3>
                <p className="text-gray-600">
                    Help others discover great reads by adding books to our library. Accurate and complete information ensures a better experience for everyone!
                </p>
            </div>
        </div>
    );
};

export default AddBook;
