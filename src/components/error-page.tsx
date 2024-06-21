import { XCircle } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

export const ErrorPage = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-1 text-center">
        <XCircle className="mb-4 size-10" />
        <div className="text-xl font-bold">Falha ao carregar o conteúdo.</div>
        <div className="text-muted-foreground text-sm">
          Esta página não pôde ser carregada corretamente. Tente novamente mais
          tarde.
        </div>
        <div className="absolute bottom-8 flex flex-col items-center">
          <p className="text-muted-foreground/40 text-sm">
            Se o problema persistir, entre em contato com o suporte.
          </p>
          <Link className="text-primary mt-4 text-sm" href="/dashboard">
            Ir para o início
          </Link>
        </div>
      </div>
    </div>
  )
}
