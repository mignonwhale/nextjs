import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client-Component',
}

export default function ClientComponent() {
  return (
    <div>
      <h1>Client-Component</h1>
      <ul>
        <h2>use client</h2>
        <li>
          react hook과 같은 동적인 기능을 사용하려고 할 때, "use client"를 사용하지 않으면 다음과 같은 에러가 발생한다.
        </li>
        <li>Unhandled Runtime Error
          Error: usePathname only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/react-client-hook-in-server-component</li>
        <li>
          모든 페이지의 렌더링은 서버사이드에서 이루어지지만 이런 컴포넌트의 동적인 기능을 사용하려면 클라이언트에 hydrate될 수 있도록 알려주어야 한다.
          그게 바로 "use client"이다.
        </li>
        <li>결론은 기본컴포넌는 서버 컴포넌트로 서버에서 렌더링되고 그 위에 동적인 기능을 얹고 싶으면 추가 작업을 해야 한다는 것</li>
      </ul>
    </div>
  )
}