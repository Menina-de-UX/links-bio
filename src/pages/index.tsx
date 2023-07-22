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
                priority
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
                emoji="🎟️"
                link="https://coderhouse.com.br/?utm_source=alianzas&utm_medium=alianzas&utm_campaign=alianza"
              >
                20% de desconto em qualquer curso da Coderhouse
              </Card>
              <Card emoji="🎟️" link="https://tinyurl.com/uxcubos">
                10% de desconto no curso de UX Design da Cubos Academy
              </Card>
              <Card
                emoji="📚"
                link="https://aulas.cubos.academy/criar-conta?utm_source=meninadeux&utm_medium=influencerPaid&utm_campaign=20230720_instagram_userExperience&utm_content=sales&utm_keyword=minicursogratuito"
              >
                Minicurso de UX da Cubos Academy
              </Card>
            </div>
          </div>
          <div className="mt-8">
            <Title style="TitleStyle-Secondary">Nossos Links</Title>

            <div className="w-full flex flex-col items-center gap-y-4">
              <Card
                emoji="💪🏻"
                principal={true}
                link="https://www.atados.com.br/ong/menina-de-ux"
              >
                Seja uma voluntária!
              </Card>
              <Card emoji="🌏" link="https://meninadeux.com/">
                Acesse o nosso site
              </Card>
              <Card emoji="📨" link="https://t.me/meninadeux">
                Entre no nosso canal do Telegram
              </Card>
              <Card
                emoji="&#128153;"
                link="https://linkedin.com/company/meninadeux"
              >
                LinkedIn
              </Card>
              <Card emoji="📷" link="https://instagram.com/meninadeux">
                Instagram
              </Card>
              <Card emoji="✍🏻" link="https://threads.net/@meninadeux">
                Threads
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
