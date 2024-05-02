import '../styles/global.css'; // global styles 적용
import { Metadata } from 'next';
import Navigation from '../components/navigation';

export const metadata : Metadata = {
  title: {
     template: '%s | Next Movies', // template으로 지정해서 모든 페이지에 적용
     default: 'Loading...', // default로 지정해서 모든 페이지에 적용해 metadata.title이 없는 페이지에 대비
  },
  description: 'this is metadata description in RootLayout',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
