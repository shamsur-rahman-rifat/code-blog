import React from 'react';

const Loader = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='flex items-center justify-center h-screen'>
                    <div className='text-center'>
                        <span className="loading loading-dots loading-xl"></span>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Loader;