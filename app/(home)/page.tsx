import { Metadata } from 'next';
import Movie from '../../components/movie';
import styles from '../../styles/home.module.css';
import { API_URL } from '../constants';

export const metadata: Metadata = {
  title: 'Home',
}



async function getMovies() {
  const response = await fetch(API_URL);
  return response.json();
}

export default async function Home() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie: any) => 
        <Movie
          key={movie.id}
          title={movie.title}
          id={movie.id}
          poster_path={movie.poster_path}
        />
      )}
    </div>
  )
}