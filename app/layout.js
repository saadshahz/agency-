import { Poppins } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import "/public/css/style.css";

const poppins = Poppins({
 weight: '400',
subsets: ['latin'] 
  })

export const metadata = {
  title: 'Agency',
  description: 'Description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
