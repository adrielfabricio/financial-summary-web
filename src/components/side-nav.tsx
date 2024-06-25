"use client"

import type { User } from "@/types/user"

import { ClockCounterClockwise, type IconWeight } from "@phosphor-icons/react"
import {
  ChartBar,
  CirclesThree,
  ForkKnife,
  HourglassSimpleHigh,
  ListNumbers,
  MoneyWavy,
  Percent,
  Receipt,
  ShoppingCartSimple,
  Storefront,
  Tilde,
  UserCircle,
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

type LinkGroup = {
  links: Link[]
  title: string
}

const iconProps: {
  className: string
  weight: IconWeight
} = {
  className: "size-4.5",
  weight: "duotone",
}

export const linkGroups: LinkGroup[] = [
  {
    links: [
      {
        href: "/dashboard/orders/waiting",
        icon: <HourglassSimpleHigh {...iconProps} />,
        label: "Em aberto",
      },
      {
        href: "/dashboard/orders/history",
        icon: <ClockCounterClockwise {...iconProps} />,
        label: "Histórico",
      },
      {
        href: "/dashboard/orders/report",
        icon: <Tilde {...iconProps} />,
        label: "Relatório",
      },
    ],
    title: "Pedidos",
  },
  {
    links: [
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
    ],
    title: "Cardápio",
  },
  {
    links: [
      {
        href: "/dashboard/finance/summary",
        icon: <ChartBar {...iconProps} />,
        label: "Resumo",
      },
      {
        href: "/dashboard/finance/revenue",
        icon: <MoneyWavy {...iconProps} />,
        label: "Receitas",
      },
      {
        href: "/dashboard/finance/expenses",
        icon: <ShoppingCartSimple {...iconProps} />,
        label: "Despesas",
      },
      {
        href: "/dashboard/finance/balance",
        icon: <Receipt {...iconProps} />,
        label: "Extratos",
      },
    ],
    title: "Finanças",
  },
  {
    links: [
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
    ],
    title: "Configurações",
  },
]

const isLinkActive = (href: string, pathname: string) => {
  return pathname === href
}

const renderLink = (link: Link, pathname: string) => {
  return (
    <Link
      className={twMerge(
        "-ml-3 flex items-center space-x-3 rounded-lg px-3 py-1.5 text-muted-foreground",
        isLinkActive(link.href, pathname) && "bg-background text-brand"
      )}
      href={link.href}
      key={link.label}
    >
      <div
        className={twMerge(
          "text-sm text-muted-foreground",
          isLinkActive(link.href, pathname) && "text-brand"
        )}
      >
        {link.icon}
      </div>
      <span
        className={twMerge(
          "text-sm text-primary",
          isLinkActive(link.href, pathname) && "text-brand"
        )}
      >
        {link.label}
      </span>
    </Link>
  )
}

export const SideNav = (props: { user: User }) => {
  const pathname = usePathname()

  return (
    <div className="bg-background-accent z-10 hidden h-screen w-72 flex-col justify-between border-r px-4 py-6 md:flex">
      <div className="ml-1.5 flex flex-col">
        <Link href="/dashboard">
          <Icons.logo className="size-7" />
        </Link>

        {linkGroups.map((group) => (
          <div className="mt-8 flex flex-col gap-2" key={group.title}>
            <p className="text-muted-foreground text-xs">{group.title}</p>

            <div className="flex flex-col space-y-2">
              {group.links.map((link) => renderLink(link, pathname))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col space-y-2">
        <UserMenu user={props.user} />
      </div>
    </div>
  )
}
