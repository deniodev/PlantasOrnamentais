import type { Metadata } from "next"
import ContactForm from "@/components/ContactForm"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contato | Diretório de Plantas Ornamentais",
  description: "Entre em contato com nossos especialistas em plantas para perguntas, sugestões ou colaborações",
  openGraph: {
    title: "Contato | Diretório de Plantas Ornamentais",
    description: "Entre em contato com nossos especialistas em plantas para perguntas, sugestões ou colaborações",
    images: ["/images/og-image.jpg"],
  },
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Contato</h1>
        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 max-w-[700px]">
          Tem perguntas sobre plantas ou quer colaborar? Adoraríamos ouvir de você!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Envie-nos uma Mensagem</h2>
          <ContactForm />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Nossa Localização</h3>
                <address className="not-italic text-gray-500 dark:text-gray-400">
                  Rua das Plantas, 123
                  <br />
                  Jardim Verde, SP 12345
                  <br />
                  Brasil
                </address>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">E-mail</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  <a href="mailto:info@diretorioplantas.com" className="hover:text-primary">
                    info@diretorioplantas.com
                  </a>
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  <a href="mailto:suporte@diretorioplantas.com" className="hover:text-primary">
                    suporte@diretorioplantas.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Telefone</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  <a href="tel:+5511987654321" className="hover:text-primary">
                    +55 (11) 98765-4321
                  </a>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Segunda a Sexta, 9h às 17h</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Horário de Funcionamento</h3>
                <div className="text-gray-500 dark:text-gray-400 space-y-1">
                  <p>Segunda - Sexta: 9:00 - 17:00</p>
                  <p>Sábado: 10:00 - 16:00</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                aria-label="Pinterest"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v12" />
                  <path d="M8 10h8" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Encontre-nos</h2>
        <div className="aspect-[16/9] w-full rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975874651807!2d-46.65429508502164!3d-23.56507478468041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1619756483453!5m2!1spt-BR!2sbr"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="Localização no mapa"
          ></iframe>
        </div>
      </div>

      <div className="mt-16 bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Perguntas Frequentes</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div>
            <h3 className="font-semibold text-lg mb-2">Vocês oferecem consultas sobre plantas?</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Sim, nossos especialistas em plantas oferecem consultas virtuais e presenciais para ajudá-lo a escolher as
              plantas certas para seu espaço e fornecer conselhos de cuidados.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Qual a rapidez de resposta às consultas?</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Procuramos responder a todas as consultas dentro de 24-48 horas úteis. Para assuntos urgentes, por favor
              ligue para nossa linha de atendimento ao cliente.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Posso contribuir para o blog de vocês?</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Aceitamos contribuições de entusiastas e especialistas em plantas. Entre em contato conosco com sua
              proposta e amostras de escrita.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Vocês enviam plantas para todo o Brasil?</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Atualmente, enviamos apenas para as principais capitais do Brasil devido a regulamentações agrícolas e
              para garantir que as plantas cheguem em condições ideais.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
