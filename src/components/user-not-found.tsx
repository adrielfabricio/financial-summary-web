import { CloudWarning } from "@phosphor-icons/react/dist/ssr"

import { LogoutButton } from "./logout-button"

export const UserNotFound = () => {
  return (
    <div className="grid h-screen w-full place-items-center">
      <div className="flex flex-col items-center gap-4">
        <CloudWarning className="size-8" weight="bold" />
        <div className="text-xl font-bold">
          Não foi possível obter informações do usuário.
        </div>
        <LogoutButton />
      </div>
    </div>
  )
}
