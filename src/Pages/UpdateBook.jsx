import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const UpdateBook = () => {
    const { bookId } = useParams();
    const navigate = useNavigate();
    const [bookData, setBookData] = useState(null);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [bookRes, categoryRes] = await Promise.all([
                    axios.get(`http://localhost:3000/books/${bookId}`),
                    axios.get(`http://localhost:3000/categories`)
                ]);

                setBookData(bookRes.data);
                setCategories(categoryRes.data.map(cat => cat.name));
                setLoading(false);
            } catch (error) {
                console.error('Error loading data:', error);
                alert('Failed to load book or categories.');
            }
        };

        fetchData();
    }, [bookId]);

    const handleChange = e => {
        const { name, value } = e.target;
        setBookData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const payload = {
            name: bookData.name,
            image: bookData.image,
            author: bookData.author,
            category: bookData.category,
            description: bookData.description,
            rating: Number(bookData.rating),
            quantity: Number(bookData.quantity)
        };

        try {
            await axios.put(`http://localhost:3000/books/${bookId}`, payload);
            toast.success('Book updated successfully!');
            navigate('/allBooks');
        } catch (err) {
            console.error('Update failed:', err);
            alert('Failed to update book.');
        }
    };


    if (loading || !bookData) return <p className="text-center">Loading...</p>;

    return (
        <div className="max-w-3xl mx-auto p-6">
            <Helmet>
                <title>Read Books | Update Book</title>
            </Helmet>
            <h2 className="text-2xl font-bold mb-4">Update Book</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="image"
                    value={bookData.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                    className="input input-bordered w-full"
                    required
                />
                <input
                    type="text"
                    name="name"
                    value={bookData.name}
                    onChange={handleChange}
                    placeholder="Book Title"
                    className="input input-bordered w-full"
                    required
                />
                <input
                    type="text"
                    name="author"
                    value={bookData.author}
                    onChange={handleChange}
                    placeholder="Author Name"
                    className="input input-bordered w-full"
                    required
                />
                <select
                    name="category"
                    value={bookData.category}
                    onChange={handleChange}
                    className="select select-bordered w-full"
                    required
                >
                    <option value="" disabled>Select a Category</option>
                    {categories.map(cat => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
                <input
                    type="number"
                    name="rating"
                    value={bookData.rating}
                    onChange={handleChange}
                    placeholder="Rating (1-5)"
                    className="input input-bordered w-full"
                    min="1"
                    max="5"
                    required
                />
                <input
                    type="number"
                    name="quantity"
                    value={bookData.quantity}
                    onChange={handleChange}
                    placeholder="Quantity"
                    className="input input-bordered w-full"
                    min="0"
                    required
                />
                <textarea
                    name="description"
                    value={bookData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="textarea textarea-bordered w-full"
                    required
                ></textarea>
                <button type="submit" className="btn btn-primary">
                    Update Book
                </button>
            </form>
        </div>
    );
};

export default UpdateBook;
