import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Routes",
}
export default function Routes() {
  return (
    <div>
      <h1>Routes</h1>

      <h3>기본 폴더구조</h3>
      <ul>
        <li>app 폴더: '/', root path</li>
        <li>page.tsx: 사용자에게 보이는 UI</li>
        <li>layout.tsx: nextjs가 렌더링하는 기본페이지로 이 안에서 개발소스가 하위 컴포넌트로 들어가 함께 렌더링된다. 서버를 실행하면 nextjs가 자동으로 만들어준다.</li>
        <li>not-found.tsx: 해당 페이지가 없을 경우 사용하는 페이지로</li>
        <li>loading.tsx: 로딩을 위한 페이지로 해당 파일 있는 경우 nextjs가 자동으로 로딩을 생성한다.</li>
      </ul>

      <h3>폴더</h3>
      <ul>
        <li>폴더명이 하나의 path가 된다. </li>
        <li>폴더 하위에서 'page.tsx'이 해당 path에 보여지는 UI</li>
        <li>예) '/app/routes/page.tsx'는 <a href="/routes">'localhost:3000/routes'</a>로 접근이 가능하다. </li>
      </ul>
    </div>
  )
}
