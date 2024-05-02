import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Metadata',
}

export default function MetadataPage() {
  return (
    <div>
      <h1>Metadata</h1>
      <ul>
        <li>메타데이터는 '<head />' 안의 '<title />, <meta />' 등에 들어가는 정보다. 모든 페이지에서 정의해서 사용할 수 있고, layout과는 달리 중첩이 아닌 병합으로 처리된다. </li>
        <li>page.tsx 혹은 layout.tsx에서만 메타데이터를 사용할 수 있다. </li>
        <li>layout.tsx에서 메타데이터를 지정하면 모든 화면에서 공통으로 사용할 수 있다. 각 페이지에서 독립적으로 써야 하는 내용만 각 페이지에서 지정해 주면 된다.  </li>
        <li>metadata.template을 이용하면 손쉽게 이용가능하다.   </li>
      </ul>
    </div>
  )
}