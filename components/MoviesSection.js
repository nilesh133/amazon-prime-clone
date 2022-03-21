import React from 'react'
import Movie from "./Movie";
const MoviesSection = ({ results, title }) => {

    return (
        <section className=''>
            <h4 className='mt-3 mb-4 md:mt-12 md:mb-8 mx-8 text-white font-spartan text-xl md:text-2xl font-medium'>{title}</h4>
            <div className='flex justify-between overflow-x-scroll scrollbar-hide mx-6 pb-8 space-x-6'>
                {
                    results.map((result) => (
                        <Movie key={result.id} result={result} />
                    ))
                }
            </div>
        </section>
    )
}

export default MoviesSection