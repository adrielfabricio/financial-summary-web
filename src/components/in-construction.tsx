import { Barricade } from "@phosphor-icons/react/dist/ssr"

import { Badge } from "./ui/badge"

export const InConstruction = () => {
  return (
    <div className="mt-16 flex size-full grow flex-col items-center justify-center gap-2">
      <div className="flex w-full flex-col items-center justify-center">
        <Badge
          className="bg-primary flex flex-row items-center gap-2 transition-none"
          variant="outline"
        >
          <Barricade className="text-white" size={20} />
        </Badge>

        <h1 className="text-2xl font-semibold">Em construção</h1>
        <p className="text-small-plus text-secondary mt-2 text-center">
          Estamos trabalhando para trazer a melhor experiência para você. <br />
          Te avisaremos quando estiver pronto!
        </p>
      </div>
    </div>
  )
}
