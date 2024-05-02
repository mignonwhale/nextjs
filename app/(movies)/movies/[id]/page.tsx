import { Suspense } from 'react';
import MovieInfo from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'MovieDetail',
}

export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      <h3>Movie Detail</h3>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <h3>Movie video</h3>
      <Suspense fallback={<h1>Loading video </h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  )
}