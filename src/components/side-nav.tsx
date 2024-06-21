"use client"

import type { User } from "@/types/user"

import { ClockCounterClockwise, type IconWeight } from "@phosphor-icons/react"
import {
  ChartBar, CirclesThree,
  ForkKnife, HourglassSimpleHigh, ListNumbers, MoneyWavy,
  Percent,
  Receipt,
  ShoppingCartSimple,
  Storefront,
  Tilde,
  UserCircle
} from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"

import { Icons } from "./icons"
import { UserMenu } from "./user-menu"

type Link = {
  disabled?: boolean
  href: string
  icon: React.ReactNode
  label: string
}

const iconProps: {
  className: string
  weight: IconWeight
} = {
  className: "size-4.5",
  weight: "duotone",
}

const links: Link[] = [
  {
    href: "/dashboard/orders/waiting",
    icon: <HourglassSimpleHigh {...iconProps} />,
    label: "Em aberto"
  },{
    href: "/dashboard/orders/history",
    icon: <ClockCounterClockwise {...iconProps} />,
    label: "Histórico"
  },{
    href: "/dashboard/orders/report",
    icon: <Tilde {...iconProps} />,
    label: "Relatório"
  },
  {
    href: "/dashboard/menu/items",
    icon: <ListNumbers {...iconProps} />,
    label: "Itens",
  },
  {
    href: "/dashboard/menu/categories",
    icon: <ForkKnife {...iconProps} />,
    label: "Categorias",
  },
  {
    href: "/dashboard/menu/promotions",
    icon: <Percent {...iconProps} />,
    label: "Promoções & Ofertas",
  },
  {
    href: "/dashboard/finnance/summary",
    icon: <ChartBar {...iconProps} />,
    label: "Resumo",
  },
  {
    href: "/dashboard/finnance/revenue",
    icon: <MoneyWavy {...iconProps} />,
    label: "Receitas",
  },
  {
    href: "/dashboard/finnance/expenses",
    icon: <ShoppingCartSimple {...iconProps} />,
    label: "Despesas",
  },
  {
    href: "/dashboard/finnance/balance",
    icon: <Receipt {...iconProps} />,
    label: "Extratos"
  },
  {
    href: "/dashboard/settings/business",
    icon: <Storefront {...iconProps} />,
    label: "Informações do Negócio",
  },
  {
    href: "/dashboard/settings/account",
    icon: <UserCircle {...iconProps} />,
    label: "Configurações de Conta",
  },
  {
    href: "/dashboard/settings/integrations",
    icon: <CirclesThree {...iconProps} />,
    label: "Integrações",
  },
]

const isLinkActive = (href: string, pathname: string) => {
  return pathname === href
}

const renderLink = (link: Link, pathname: string) => {
  return (
    <Link
      className={twMerge(
        "flex items-center space-x-3 rounded-lg px-3 py-1.5",
        isLinkActive(link.href, pathname) && "bg-background"
      )}
      href={link.href}
      key={link.label}
    >
      {link.icon}
      <span className="text-sm">{link.label}</span>
    </Link>
  )
}

export const SideNav = (props: { user: User }) => {
  const pathname = usePathname()

  return (
    <div className="z-10 hidden h-screen w-80 flex-col justify-between border-r px-4 py-6 md:flex">
      <div className="flex flex-col">
        <Link className="ml-3" href="/dashboard">
          <Icons.logo className="size-7" />
        </Link>

        <div className="mt-6 flex flex-col space-y-2">
          {links.slice(0, -1).map((link) => renderLink(link, pathname))}
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <UserMenu user={props.user} />
      </div>
    </div>
  )
}
