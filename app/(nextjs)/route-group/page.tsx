import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Route Group',
}


export default async function Home() {
  return (
    <div>
      <h1>Route Group</h1>
      <ul>
        <li>폴더명을 '()'로 묶으면 url 경로에 영향을 미치지 않는다.</li>
        <li>파일들을 그룹화시킬때 사용하면 좋은듯</li>
        <li>이걸 route group 이라고 함</li>
        <li>업무적으로 폴더를 나우어야 할때 유용할 듯</li>
      </ul>
    </div>
  )
}