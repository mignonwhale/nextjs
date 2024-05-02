export default function Page() {
  return (
    <div>
      <h1>Suspense</h1>
      <li>fetch만을 이용하면 자바스크립트의 특성 덕분에 순차적으로 실행</li>
      <li>다수의 fetch를 병렬적으로 실행하고 싶다면 Promise.all()을 이용하면 된다. </li>
      <li>하지만 Promise.all()을 이용하면 모든 fetch가 완료될 때까지 기다려야 하므로 사용자는 빈 화면을 볼수 밖에 없다.</li>
      <li>Suspense를 이용하면 각각의 fetch가 독립적으로 실행되어 순차적으로 실행되지 않고 로딩메시지도 독립적으로 사용할 수 있다.</li>
    </div>
  )
}