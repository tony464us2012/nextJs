import "../styles/globals.css"
import Header from "./Header"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Anthony Website</title>
      </head>
      <body>
        <Header />
        {children}</body>
    </html>
  )
}
