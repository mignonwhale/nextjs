import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

interface IParams {
  params: { id: string }
}

// 고정방식
// export const metadata: Metadata = {
//   title: 'MovieDetail',
// }

// 유동방식
export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id); // 첫 호출이라면 이 때 캐싱된다. 이 후 같은 메서드를 호출하면 캐싱된 값이 반환된다.
  return {
    title: movie.title,
  }
}

export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading video </h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  )
}