import React, { useState } from 'react';

const chapters = [
    {
        title: "Chapter 1: The Storm",
        content: "The waves crashed harder than ever. Captain Elara tightened her grip on the wheel, guiding the ship through the chaos. It was the night that changed everything...",
    },
    {
        title: "Chapter 2: The Island",
        content: "As dawn broke, the silhouette of an island appeared on the horizon. It wasn't on any map. The crew stared in silence, fear and curiosity mixing in their eyes.",
    },
    {
        title: "Chapter 3: The Ruins",
        content: "Deep in the jungle, they found ancient stone ruins. Symbols glowed faintly. Elara touched one and the ground beneath them shifted.",
    },
    {
        title: "Chapter 4: The Secret",
        content: "A hidden chamber revealed a treasure—but it wasn't gold. It was a map, leading to something far greater... and far more dangerous.",
    }
];

const BookPreview = () => {
    const [selectedChapter, setSelectedChapter] = useState(null);

    return (
        <div className="max-w-6xl mx-auto px-4 md:pb-14 pb-6">
            {/* Section Header */}
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold mb-3"> Book Preview</h1>
                <p className="opacity-70 max-w-2xl mx-auto">
                    Dive into a glimpse of <strong>"The Lost Island"</strong>, an exciting short novel filled with adventure, mystery, and secrets waiting to be discovered.
                </p>
            </div>

            {/* Book Layout */}
            <div className="flex flex-col md:flex-row gap-6 lg:gap-10 p-6 ">
                {/* Book Cover */}
                <div className="md:w-1/2 w-full  bg-gray-100 p-4 inline-flex items-center rounded-lg">
                    <img
                        src="https://i.postimg.cc/L61s1GYJ/island.jpg"
                        alt="The Lost Island"
                        className="rounded-lg w-full h-[350px] object-contain"
                    />
                </div>

                {/* Chapter List & Content */}
                <div className="md:w-2/3 w-full space-y-4 my-auto">
                    <h2 className="text-2xl font-bold">📖 The Lost Island</h2>
                    <p className="opacity-70 mb-4">A short adventure novel</p>

                    <div className="grid grid-cols-2 gap-3">
                        {chapters.map((chapter, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedChapter(chapter)}
                                className="p-3 bg-primary hover:opacity-80 rounded shadow text-left cursor-pointer"
                            >
                                {chapter.title}
                            </button>
                        ))}
                    </div>

                    {selectedChapter && (
                        <div className="mt-6 border-t pt-4">
                            <h3 className="text-xl font-semibold mb-2">{selectedChapter.title}</h3>
                            <p className="opacity-80">{selectedChapter.content}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookPreview;
