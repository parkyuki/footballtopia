import '@/assets/scss/style.scss'
import Sidebar from "@/component/Sidebar"
import Header from "@/component/Header"



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  const res = await fetch("http://localhost:9999/posts");
  const team = await res.json();
  const teamInfo = team.map((team) => team.team);

  return (
    <html>
      <body>
        <Header />
        <Sidebar teamInfo={teamInfo} />
        {children}
      </body>
    </html>
  )
}
