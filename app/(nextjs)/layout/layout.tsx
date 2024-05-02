export default function InnerLayout({ children }: {  children: React.ReactNode}) {
  return (
    <div>
      <h1 style={{color:"red"}}>Inner Layout</h1>
      <p>잉? rootlayout과 중첩만 되네</p>
      {children}
      &copy; mignonwhale
    </div>
  )
}
