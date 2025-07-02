import React from 'react';
import { Calendar } from 'lucide-react';

const BlogSection = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'The Psychology Behind Reading Habits',
            excerpt: 'Understanding why our brains love storytelling and how books influence mental health.',
            date: 'June 12, 2025',
            image: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 2,
            title: 'Must-Read Classics Before You Turn 30',
            excerpt: 'A curated list of timeless literary works that everyone should experience at least once.',
            date: 'June 5, 2025',
            image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 3,
            title: 'How Digital Libraries Are Changing the World',
            excerpt: 'Explore how platforms like ReadBooks are reshaping access to knowledge.',
            date: 'May 29, 2025',
            image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=60',
        },
    ];

    return (
        <section className="mb-12 md:mb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">From Our Blog</h2>
                    <p className="text-gray-600 mt-3 text-sm md:text-base">Thoughts, insights & bookish musings from our team</p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className="group overflow-hidden  rounded-xl transition-all duration-300 hover:shadow-2xl"
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="p-5">
                                <div className="flex items-center text-sm text-gray-500 mb-2">
                                    <Calendar className="w-4 h-4 mr-1" /> {post.date}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 leading-snug mb-1 group-hover:text-red-700">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{post.excerpt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
