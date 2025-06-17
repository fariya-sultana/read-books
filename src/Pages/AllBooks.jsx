import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router';

const AllBooks = () => {
    const [books, setBooks] = useState([]);
    const [showAvailable, setShowAvailable] = useState(false);
    const [viewMode, setViewMode] = useState('card'); // 'card' or 'table'
    const navigate = useNavigate();

    // Fetch all books
    useEffect(() => {
        fetch('http://localhost:3000/books')
            .then(res => res.json())
            .then(data => setBooks(data))
            .catch(console.error);
    }, []);

    // Filter books based on availability
    const filteredBooks = showAvailable
        ? books.filter(book => book.quantity > 0)
        : books;

    // Handler for update button click
    const handleUpdateClick = (bookId) => {
        navigate(`/updateBook/${bookId}`); // navigate to update form page with book id
    };

    return (
        <div className="p-4 md:max-w-11/12 mx-auto min-h-screen">
            <Helmet>
                <title>ReadBooks | All Books</title>
            </Helmet>

            {/* Filter and view toggles */}
            <div className="flex items-center mb-6 space-x-4">
                <button
                    className="btn btn-outline"
                    onClick={() => setShowAvailable(prev => !prev)}
                >
                    {showAvailable ? 'Show All Books' : 'Show Available Books'}
                </button>

                <select
                    className="select select-bordered"
                    value={viewMode}
                    onChange={e => setViewMode(e.target.value)}
                >
                    <option value="card">Card View</option>
                    <option value="table">Table View</option>
                </select>
            </div>

            {/* Card View */}
            {viewMode === 'card' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    {filteredBooks.map(book => (
                        <div key={book._id} className="card rounded shadow-xl">
                            <figure className='pt-4'>
                                <img
                                    src={book.image}
                                    alt={book.name}
                                    className="w-full max-h-50 mx-auto object-contain mb-4 rounded "
                                />
                            </figure>

                            <div className='card-body'>
                                <h2 className="text-xl font-semibold">{book.name}</h2>
                                <p className="text-sm text-gray-600">Author: {book.author}</p>
                                <p className="text-sm text-gray-600">Category: {book.category}</p>
                                <p className="text-sm text-gray-600">Rating: {book.rating}</p>


                                <div className='card-actions justify-end '>
                                    <button
                                        onClick={() => handleUpdateClick(book._id)}
                                        className="btn btn-primary mt-3 "
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            )}

            {viewMode === 'table' && (
                <div className="w-full overflow-x-auto lg:overflow-visible">
                    <table className="table-auto w-full min-w-[700px] border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">Cover</th>
                                <th className="border border-gray-300 px-4 py-2">Title</th>
                                <th className="border border-gray-300 px-4 py-2">Author</th>
                                <th className="border border-gray-300 px-4 py-2">Category</th>
                                <th className="border border-gray-300 px-4 py-2">Rating</th>
                                <th className="border border-gray-300 px-4 py-2">Quantity</th>
                                <th className="border border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredBooks.map(book => (
                                <tr key={book._id}>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <img
                                            src={book.image}
                                            alt={book.name}
                                            className="h-16 w-12 object-cover"
                                        />
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">{book.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{book.author}</td>
                                    <td className="border border-gray-300 px-4 py-2">{book.category}</td>
                                    <td className="border border-gray-300 px-4 py-2">{book.rating}</td>
                                    <td className="border border-gray-300 px-4 py-2">{book.quantity}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <button
                                            onClick={() => handleUpdateClick(book._id)}
                                            className="btn btn-xs lg:btn-sm btn-primary"
                                        >
                                            Update
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

        </div>
    );
};

export default AllBooks;
