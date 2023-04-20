import Head from 'next/head'
import MainPage from '@/screens/mainPage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Case Hubla</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <MainPage/>
      </main>
    </>
  )
}
