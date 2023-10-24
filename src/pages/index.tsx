// Components
import { Card, CardImage, CardText, SpanText } from '@/components/Card'
import { Text } from '@/components/Text'
import { Title } from '@/components/Title'
import Instagram from '@/components/icons/instagram'
import LinkedIn from '@/components/icons/linkedin'
import { Medium } from '@/components/icons/medium'
import Threads from '@/components/icons/threads'

// Utilities
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import MulherAcenando from '@/../public/mulher_acenando.png'
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
          <div className="flex flex-col  mb-16 items-center">
            <Link href="https://meninadeux.com/">
              <Image
                src="/Completa.svg"
                width={180}
                height={180}
                alt="Logo do projeto Menina de UX"
                priority
              />
            </Link>
            <div className="flex flex-row my-5">
              <Link href="https://medium.com/@meninadeux">
                <Medium />
              </Link>
              <Link href="https://threads.net/@meninadeux">
                <Threads />
              </Link>
              <Link href="https://instagram.com/meninadeux">
                <Instagram />
              </Link>
              <Link href="https://linkedin.com/company/meninadeux">
                <LinkedIn />
              </Link>
            </div>
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

            <div className="flex flex-col items-center gap-y-4">
              <Card link="https://coderhouse.com.br/">
                <SpanText>
                  Use MENINADEUX para ganhar 20% de desconto nos cursos da
                  Coderhouse
                </SpanText>
              </Card>
              <Card link="https://tinyurl.com/uxcubos">
                <SpanText>
                  Use MENINA10 para ganhar 10% de desconto no curso de UX Design
                  da Cubos Academy
                </SpanText>
              </Card>
              <Card link="https://www.thestarter.io/">
                <SpanText>
                  Use MENINA25 para ganhar 25% de desconto nos cursos da
                  TheStarter
                </SpanText>
              </Card>
              <Card link="https://www.thestarter.io/">
                <SpanText>
                  Use MENINADEUX15 para ganhar 15% de desconto nos cursos da How
                  Bootcamps
                </SpanText>
              </Card>
              <Card link="https://aulas.cubos.academy/criar-conta?utm_source=meninadeux&utm_medium=influencerPaid&utm_campaign=20230720_instagram_userExperience&utm_content=sales&utm_keyword=minicursogratuito">
                <SpanText>
                  {' '}
                  Minicurso gratuito de UI/UX Design da Cubos Academy
                </SpanText>
              </Card>
              <Card link="https://howedu.com.br/ux-design-para-todos/">
                <SpanText>
                  Curso Gratuito da How - UX Design para Todos
                </SpanText>
              </Card>
            </div>
          </div>
          <div className="mt-8">
            <Title style="TitleStyle-Secondary">Nossos Links</Title>

            <div className="flex gap-6 ">
              <Card
                principal={true}
                link="https://www.atados.com.br/ong/menina-de-ux"
              >
                <CardImage bgImage="bg-linkVolunteer" />
                <CardText>
                  <Title style="TitleSmall">Seja uma Voluntária </Title>
                  <SpanText principal={true}>
                    Veja as vagas disponíveis na página da Atados e se candidate
                    para fazer parte do nosso time!
                  </SpanText>
                </CardText>
              </Card>
              <Card principal={true} link="https://meninadeux.com/">
                <CardImage bgImage="bg-linkSite" />
                <CardText>
                  <Title style="TitleSmall">Acesse o nosso Site </Title>
                  <SpanText principal={true}>
                    Aprenda sobre UX, Design, Tecnologia e ainda encontre
                    milhares de cursos e oportunidades disponíveis para você!
                  </SpanText>
                </CardText>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
