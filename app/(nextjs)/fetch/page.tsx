import { Metadata } from 'next'

export const metadata: Metadata = { title: 'Fetch' }

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 5000)); // 테스트용 딜레이
  const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
  const response = await fetch(URL)
  return response.json();
}


export default async function Fetch() {
  const movies = await getMovies();
  return (
    <div>
      <h1>Fetch</h1>
      <ul>
        <li>기존 useState, useEffect와 같은 React Hook을 이용하기 위해서 클라이언트 컴포넌트가 되어야 한다.</li>
        <li>하지만 서버 컴포넌트에서도 같은 기능을 구현할 수 있다.</li>
        <li>api로부터 데이터를 받는데 시간이 많이 걸릴 수도 있으므로 로딩페이지를 구현해 놓는 것은 필수</li>
        <li>nextjs는 api로부터 응답을 받아 이 페이지를 렌더링 하기 전까지는 loading.tsx 파일을 노출, 응답을 받은 이후 데이터를 그린 해당 페이지로 자동으로 변경해준다. </li>
      </ul>
      <div>{JSON.stringify(movies)}</div>
    </div>
  )
}