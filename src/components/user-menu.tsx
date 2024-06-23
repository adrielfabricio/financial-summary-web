"use client"

import type { User } from "@/types/user"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Gear, SignOut, User as UserIcon } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { twMerge } from "tailwind-merge"

interface Props {
  user: User
}

export const UserMenu = ({ user }: Props) => {
  const router = useRouter()

  const createMenuItem = (
    href: string,
    label: string,
    Icon?: React.ElementType
  ) => (
    <DropdownMenuItem className="rounded-none p-0">
      <Link
        className="group flex w-full items-center justify-between rounded-none px-5 py-2"
        href={href}
      >
        <span className="text-primary">{label}</span>
        {Icon && <Icon className="text-primary size-4" weight="light" />}
      </Link>
    </DropdownMenuItem>
  )

  return (
    <div className="hover:bg-muted/70 z-20 mb-2 flex w-full select-none flex-row items-center justify-between rounded transition-all duration-200 hover:cursor-pointer">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="relative flex w-full flex-row items-center gap-2 py-2 pl-2">
            <div className="border-border text-background grid size-6 place-items-center rounded-full bg-black">
              {user.name ? user.name[0] : "U"}
            </div>
            <div
              className={twMerge(
                "group-aria-current/item:text-primary min-w-[128px] text-sm text-primary"
              )}
            >
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-primary text-xs font-normal">{user.email}</p>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="m-0 mt-2 w-64 p-0 shadow-md"
        >
          <DropdownMenuLabel className="text-primary px-5 py-4 text-sm font-normal">
            <p className="text-sm font-semibold text-black">
              {user.name.split(" ")[0]}
            </p>
            <p className="text-primary text-[14px]">{user.email}</p>
          </DropdownMenuLabel>

          <DropdownMenuGroup>
            {createMenuItem("/dashboard/", "Dashboard")}
            {createMenuItem("/dashboard/account", "Perfil", UserIcon)}
            {createMenuItem("/dashboard/account", "Configurações", Gear)}
          </DropdownMenuGroup>

          <DropdownMenuItem
            className="rounded-none p-0 hover:cursor-pointer"
            onClick={() => router.push("/auth/logout")}
          >
            <div className="group flex w-full items-center justify-between rounded-none px-5 py-2">
              <span>Sair</span>
              <SignOut className="text-primary size-4" weight="light" />
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
