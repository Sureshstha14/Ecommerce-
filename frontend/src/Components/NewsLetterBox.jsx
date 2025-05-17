import React from 'react'

const NewsLetterBox = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

    }
    return (
        <div>
            <div className='flex justify-center flex-col gap-4 items-center p-4 text-2xl md:text-3xl  '>
                Suscribe Now to get 20% discount
                <p className='text-sm md:text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cum harum ipsam dolorem sed. </p>
            </div>
            <form className='flex flex-col sm:flex-row gap-4 p-4 items-center justify-center' onSubmit={handleSubmit}>
                <input type='email' placeholder='Enter Your Email' className='w-full md:w-1/2 border border-gray-200 rounded-lg  '></input>
                <button className="p-4 rounded-lg bg-slate-700 text-white  hover:shadow-2xl hover:shadow-slate-900 transition-all duration-300 ease-in-out" type="submit">
                    Subscribe
                </button>
            </form>
        </div>
    )

}

export default NewsLetterBox