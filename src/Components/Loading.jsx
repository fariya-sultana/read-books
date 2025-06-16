import React from "react";

const Loading = () => {
    return (
        <div>
            <div className='min-h-screen flex flex-grow  items-center justify-center py-10'>
                <span className="loading loading-bars loading-xl text-primary"></span>

            </div>
        </div>
    );
};

export default Loading;