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
                src="/Completa.svg"
                width={180}
                height={180}
                alt="Logo do projeto Menina de UX"
                className=""
              />
            </Link>
            <p className="text-sm text-gray-300">Ajudando meninas como eu</p>
          </div>
          <div className="flex flex-col gap-y-6 mb-10">
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
          <div className="mt-8">
            <Title style="TitleStyle-Secondary">Parcerias</Title>

            <div className="w-full flex flex-col items-center gap-y-4">
              <Card
                text="Use nosso cupom de 20% de desconto no curso da Coderhouse"
                emoji="🎟️"
                link="https://meninadeux.com/"
              />
              <Card
                text="Use nosso cupom de 10% de desconto no curso da Cubos Academy"
                emoji="🎟️"
                link="t.me/meninadeux"
              />
            </div>
          </div>
          <div className="mt-8">
            <Title style="TitleStyle-Secondary">Redes Sociais</Title>

            <div className="w-full flex flex-col items-center gap-y-4">
              <Card
                text="Acesse o nosso site"
                emoji="🌏"
                principal={true}
                link="https://meninadeux.com/"
              />
              <Card
                text="Entre no nosso canal do Telegram"
                emoji="📨"
                link="t.me/meninadeux"
              />
              <Card
                text="LinkedIn"
                emoji="&#128153;"
                link="https://linkedin.com/company/meninadeux"
              />
              <Card
                text="Instagram"
                emoji="📷"
                link="instagram.com/meninadeux"
              />
              <Card text="Threads" emoji="✍🏻" link="threads.net/@meninadeux" />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
