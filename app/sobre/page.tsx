import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre Nós | Diretório de Plantas Ornamentais",
  description: "Conheça nossa missão de ajudar as pessoas a descobrir e cuidar de belas plantas ornamentais",
  openGraph: {
    title: "Sobre Nós | Diretório de Plantas Ornamentais",
    description: "Conheça nossa missão de ajudar as pessoas a descobrir e cuidar de belas plantas ornamentais",
    images: ["/images/og-image.jpg"],
  },
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Sobre Nós</h1>
        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 max-w-[700px]">
          Nossa missão é ajudar as pessoas a descobrir e cuidar de belas plantas ornamentais
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Nossa História</h2>
          <div className="space-y-4 text-gray-500 dark:text-gray-400">
            <p>
              Fundado em 2023, o Diretório de Plantas Ornamentais foi criado por um grupo de entusiastas apaixonados por
              plantas que queriam compartilhar seu conhecimento e amor por plantas com o mundo.
            </p>
            <p>
              Acreditamos que as plantas não apenas embelezam nossos espaços, mas também contribuem para nosso
              bem-estar, purificando o ar, reduzindo o estresse e criando uma conexão com a natureza em nossas vidas
              cada vez mais digitais.
            </p>
            <p>
              Nossa equipe de especialistas seleciona cuidadosamente informações sobre cada planta para garantir que
              você tenha todo o conhecimento necessário para ajudar suas plantas a prosperarem.
            </p>
          </div>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <img src="/placeholder.svg?height=500&width=500" alt="Nossa equipe" className="object-cover w-full h-full" />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Nossa Equipe</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Ana Silva",
              role: "Fundadora & Especialista em Plantas",
              image: "/placeholder.svg?height=300&width=300",
              bio: "Ana tem mais de 15 anos de experiência em horticultura e é apaixonada por plantas tropicais.",
            },
            {
              name: "João Santos",
              role: "Diretor de Conteúdo",
              image: "/placeholder.svg?height=300&width=300",
              bio: "João supervisiona o conteúdo do nosso blog e garante que todas as informações sobre plantas sejam precisas e úteis.",
            },
            {
              name: "Mariana Costa",
              role: "Fotógrafa de Plantas",
              image: "/placeholder.svg?height=300&width=300",
              bio: "Mariana captura a beleza de cada planta em nossa coleção com suas habilidades fotográficas especializadas.",
            },
          ].map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              <div className="relative w-40 h-40 mb-4 overflow-hidden rounded-full">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{member.role}</p>
              <p className="text-gray-500 dark:text-gray-400">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-muted p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Entre em Contato</h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
          Tem perguntas ou sugestões? Adoraríamos ouvir de você!
        </p>
        <div className="flex justify-center">
          <a
            href="mailto:info@diretorioplantas.com"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Envie-nos um E-mail
          </a>
        </div>
      </div>
    </div>
  )
}
