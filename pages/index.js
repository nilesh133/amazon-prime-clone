import { getSession } from 'next-auth/react';
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import Login from "../components/Login";
import Main from "../components/Main";
import { signIn, signOut, useSession } from "next-auth/react";
const Home = (props) => {
  const { data: session, status } = useSession();

  return (
    <div>
      <Head>
        <title>Prime Video</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;200;300;400;500&display=swap" rel="stylesheet"></link>
      </Head>
      {
        !session ? (
          <Login />
        ) : (
          <>
            <Header />
            <Main results={props} />
          </>
        )
      }

    </div>
  )
}

export default Home

export async function getServerSideProps(ctx) {
  const [nowPlayingMovies, popularMovies, popularTvShows, topRatedMovies, topRatedShows, upComingMovies] =
    await Promise.all([
      fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`).then((res) => res.json()),
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`).then((res) => res.json()),
      fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`).then((res) => res.json()),
      fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`).then((res) => res.json()),
      fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`).then((res) => res.json()),
      fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`).then((res) => res.json())
    ])

  return {
    props: {
      session: await getSession(ctx),
      nowPlayingMovies: nowPlayingMovies.results || null,
      popularMovies: popularMovies.results || null,
      popularTvShows: popularTvShows.results || null,
      topRatedMovies: topRatedMovies.results || null,
      topRatedShows: topRatedShows.results || null,
      upComingMovies: upComingMovies.results || null
    }
  }
}