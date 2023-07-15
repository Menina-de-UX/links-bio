// Components
import { Card } from '@/components/Card'
import { Text } from '@/components/Text'
import { Title } from '@/components/Title'

// Utilities
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

// Hooks
// Interfaces

export default function Home() {
  return (
    <>
      <Head>
        <title>Links | Menina de UX</title>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center gap-5 py-10 px-8 ${inter.className}`}
      >
        <section className="max-w-[530px] w-auto">
          <div className="flex flex-col  mb-16">
            <Link href="https://meninadeux.com/">
              <Image
                src="/Logo.svg"
                width={50}
                height={50}
                alt="Logo do projeto Menina de UX"
                className="ml-12"
              />
              <span className="LinkStyle">Menina de UX</span>
            </Link>
            <p className="text-sm text-gray-300">Ajudando meninas como eu</p>
          </div>
          <div className="flex flex-col gap-y-6 mb-14">
            <Title style="TitleStyle-Principal">Oiê, tudo bem? 👩🏻‍💻</Title>
            <Text style="TextStyle-Base leading-5 text-justify">
              A <span className="strong">Menina de UX</span> é uma iniciativa
              focada para <span className="strong">ajudar meninas</span> que
              querem começar suas carreiras na área de{' '}
              <span className="strong">UX Design</span> e não sabem por onde
              começar 😉
            </Text>
            <Text style="TextStyle-Base">
              Espero que eu possa te ajudar! 😊
            </Text>
          </div>
          <div>
            <Title style="TitleStyle-Secondary">Links tops</Title>

            <div className="w-full flex flex-col items-center gap-y-4">
              <Card
                text="Seja voluntário na Menina de UX"
                emoji="&#128170;"
                principal={true}
                link="https://www.google.com/"
              />
              <Card
                text="Acesse o site"
                emoji="&#128153;"
                link="https://www.google.com/"
              />
              <Card
                text="Acesse o site"
                emoji="&#128153;"
                link="https://www.google.com/"
              />
              <Card
                text="Acesse o site"
                emoji="&#128153;"
                link="https://www.google.com/"
              />
              <Card
                text="Acesse o site"
                emoji="&#128153;"
                link="https://www.google.com/"
              />
              <Card
                text="Acesse o site"
                emoji="&#128153;"
                link="https://www.google.com/"
              />
              <Card
                text="Acesse o site"
                emoji="&#128153;"
                link="https://www.google.com/"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
