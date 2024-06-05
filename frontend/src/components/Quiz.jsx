import React from 'react'; 

const Quiz = () => {
    return (
        <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-4 pb-8 font-bold text-center">PHOTO QUIZ</h1>
            <p className='mb-4'>
                Guess which photo was used by AI to generate the following description. The AI is also given a writing, which should get... tricker... as the quiz goes on.
            </p>
        </div>
    );
};

export default Quiz;