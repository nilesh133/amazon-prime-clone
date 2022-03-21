import React from 'react'
import Image from "next/image"
import { AiTwotoneLike } from "react-icons/ai"
import { useRouter } from 'next/router'
import { BsFillPlayCircleFill } from "react-icons/bs"
const Movie = ({ result }) => {
    const router = useRouter();
    const IMAGE_URL = "https://image.tmdb.org/t/p/original/"
    const title = `${result.original_title} (${result.release_date.split("-")[0]})`;
    return (
        <div onClick={() => router.push(`/movies/${result.id}`)} className='relative w-64 h-40 md:w-96 md:h-56 group flex flex-col cursor-pointer rounded-lg transition-all transform hover:border-4 hover:border-[#0f79af]' key={result.id}>
            <div className='w-96 h-52 rounded-lg'>
                <Image
                    src = {
                        result.backdrop_path ? `${IMAGE_URL}${result.backdrop_path}` : `${IMAGE_URL}${result.poster_path}`
                    }
                    layout="fill"
                    objectFit="cover"
                    className='w-full rounded-lg'
                />
            </div>

            <div className='border-t-4 border-[#0f79af] hidden group-hover:block group-hover:z-40 bg-[#0f171e] rounded-lg p-4'>
                <div className='flex justify-between'>
                    <div className='flex items-center mb-1'>
                        <h4 className='text-sm md:text-[17px] font-spartan text-white font-semibold tracking-wider'>{
                            title.length > 24 ? `${title.slice(0, 24)}...` : title
                        }</h4>
                        
                    </div>
                    <div className='relative'>
                        <div className='hidden md:flex items-center justify-center'>
                            <h4 className='text-sm md:text-[17px] font-spartan text-white'>{result.vote_average}</h4>
                            <span className='ml-1 text-white mb-1.5'><AiTwotoneLike /></span>
                        </div>
                        <span className='absolute right-0 bottom-1.5 md:hidden text-[20px] text-white'><BsFillPlayCircleFill /></span>
                    </div>
                </div>
                <p className='text-[12px] md:text-sm font-spartan text-white line-clamp-2'>{result.overview}</p>
                <div className='hidden md:block text-[12px] md:text-sm bg-white font-spartan font-semibold w-24 text-center pt-2 pb-1 rounded-lg mt-1'>WATCH NOW</div>
            </div>
        </div>
    )
}

export default Movie