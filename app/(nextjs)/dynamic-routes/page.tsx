import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dynamic Routes'
}

export default function DynamicRoutes() {
  return (
    <div>
      <h1>Dynamic Routes</h1>
      <ul>
        <li>
          pathparameter로 전달된 값에 따라 다른 페이지를 보여줍니다.
        </li>
        <li>
          url 형태는 'http://localhost:3000/movies/2'
        </li>
        <li>
          폴더 형태는 'movies/[id]'
        </li>
      </ul>
    </div>
  );
}