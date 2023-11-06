import '@/assets/scss/style.scss'
import Sidebar from "@/component/Sidebar"
import Header from "@/component/Header"



export const metadata = {
  title: 'Football Topia',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {


  return (
    <html lang='ko'>
      <body>
        <Header />
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
