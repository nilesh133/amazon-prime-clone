import React, { useEffect, useState } from 'react'
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Header from "../../components/Header"
import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image';
import { BsFillPlayFill, BsPlusLg } from "react-icons/bs";
import { FiDownload } from "react-icons/fi"
import { ImPlay3, ImCancelCircle } from "react-icons/im"
import ReactPlayer from 'react-player'
import Login from "../../components/Login"
import { useRouter } from 'next/router';
const Movie = ({ result }) => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const IMAGE_URL = "https://image.tmdb.org/t/p/original/"
    const [showTrailer, setShowTrailer] = useState(false);

    const trailerIdx = result.videos.results.findIndex((video) => (
        video.type === "Trailer"
    ))

    useEffect(() => {
        if (!session) {
            router.push("/")
        }
    })
    return (
        <div>
            <Head>
                <title>{result.original_title}</title>
                <link rel="icon" href="/favicon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;200;300;400;500&display=swap" rel="stylesheet"></link>
            </Head>

            {
                !session ? (
                    <Login />
                ) : (
                    <div>
                        <Header />
                        <section className='relative bg-gradient'>
                            <div className='z-[-10] relative min-h-[calc(100vh-89px)]'>
                                <Image
                                     src = {
                                        result.backdrop_path ? `${IMAGE_URL}${result.backdrop_path}` : `${IMAGE_URL}${result.poster_path}`
                                    }
                                    layout="fill"
                                    objectFit="cover"
                                    className=''
                                />
                            </div>
                            <div className='absolute left-[5%] md:left-14 top-12 w-[90%]'>
                                <h3 className='text-[30px] md:text-[35px] font-bold text-white'>{result.original_title}</h3>
                                <p className='text-md w-[100%] md:text-lg md:w-[75%] font-semibold text-white mt-3'>{result.overview}</p>
                                <div className='mt-5 flex items-center'>
                                    <div onClick={() => setShowTrailer(true)} className="text-md md:text-lg bg-[#0f79af] text-white font-spartan px-2 md:px-4 pt-2 pb-1 rounded-sm font-medium
                        tracking-wider mr-4 border-2 border-white transition-all hover:bg-[#379cce] hover:text-white cursor-pointer">Watch Trailer</div>
                                    <div className='flex'>
                                        <span className='text-xl p-2.5 md:p-4 rounded-full bg-[#425265] text-white ml-2 cursor-pointer hover:bg-[#384657]'><ImPlay3 /></span>
                                        <span className='text-xl p-2.5 md:p-4 rounded-full bg-[#425265] text-white ml-2 cursor-pointer hover:bg-[#384657]'><BsPlusLg /></span>
                                        <span className='text-xl p-2.5 md:p-4 rounded-full bg-[#425265] text-white ml-2 cursor-pointer hover:bg-[#384657]'><FiDownload /></span>
                                    </div>
                                </div>
                                <div className='mt-8'>
                                    <table>
                                        <tr>
                                            <td className='text-md md:text-lg text-[#8197A4] font-bold'>Genre:</td>
                                            <td className='text-md md:text-lg text-[#79B8F3] font-bold pl-2'>{result.genres.map((genre, i) => (
                                                i !== result.genres.length - 1 ? genre.name + ", " : genre.name
                                            ))}</td>
                                        </tr>
                                        <tr>
                                            <td className='text-md md:text-lg text-[#8197A4] font-bold'>Runtime:</td>
                                            <td className='text-md md:text-lg text-[#79B8F3] font-bold pl-2'>{Math.floor(result.runtime / 60)}h {result.runtime % 60}m</td>
                                        </tr>

                                        <tr>
                                            <td className='text-md md:text-lg text-[#8197A4] font-bold'>Tagline:</td>
                                            <td className='text-md md:text-lg text-[#79B8F3] font-bold pl-2'>{result.tagline ? result.tagline : "None"}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                            <div className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] overflow-hidden transition duration-500 ${showTrailer ? "opacity-100 z-50" : "opacity-0 z-[-10]"}`}>
                                <div className='flex justify-between items-center bg-black text-white p-4' >
                                    <h3 className='text-xl'>{result.title}</h3>
                                    <span className='hover:text-gray-400 transition duration-500 cursor-pointer' onClick={() => setShowTrailer(false)}><ImCancelCircle className='text-[25px]' /></span>
                                </div>
                                <div className='relative pt-[50.25%]'>
                                    <ReactPlayer
                                        url={`https://www.youtube.com/watch?v=${result.videos?.results[trailerIdx]?.key}`}
                                        width="100%"
                                        height="100%"
                                        style={{ position: "absolute", top: "0", left: "0" }}
                                        controls={true}
                                        playing={showTrailer}

                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                )
            }
        </div>
    )
}

export default Movie

export async function getServerSideProps(ctx) {
    const { id } = ctx.query;

    const movieDetails = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&append_to_response=videos`)
        .then((res) => res.json())
    return {
        props: {
            session: await getSession(ctx),
            result: movieDetails,
        }
    }
}