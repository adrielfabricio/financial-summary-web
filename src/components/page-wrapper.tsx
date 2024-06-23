import { CaretRight } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

import { PageTitle } from "./page-title"

type BreadCrumb = {
  href: string
  label: string
}

interface PageWrapperProps {
  actions?: React.ReactNode
  breadCrumbs?: BreadCrumb[]

  children: React.ReactNode
  description?: string

  title: string
}

export const PageWrapper = (props: PageWrapperProps) => {
  return (
    <div className="flex size-full flex-col">
      <main className="flex flex-1 overflow-hidden">
        <div className="relative isolate flex w-full flex-1 overflow-y-auto">
          <div className="mx-auto my-12 w-11/12 max-w-[1344px]">
            <div className="flex w-full grow flex-col items-center gap-12 pb-8">
              <div className="flex w-full flex-col gap-6">
                <div className="flex items-center gap-2">
                  {props?.breadCrumbs?.map((crumb, index) => (
                    <>
                      <Link
                        className="text-secondary text-xs font-medium"
                        href={crumb.href}
                      >
                        {crumb.label}
                      </Link>
                      {props.breadCrumbs &&
                      index < props.breadCrumbs.length - 1 ? (
                        <CaretRight className="text-muted-foreground size-3" />
                      ) : null}
                    </>
                  ))}
                </div>
                <div className="flex w-full flex-row items-center justify-between">
                  <div className="flex flex-col gap-2">
                    <PageTitle title={props.title} />
                    {props?.description ? (
                      <p className="text-muted-foreground text-sm">
                        {props.description}
                      </p>
                    ) : null}
                  </div>
                  {props?.actions ? <>{props.actions}</> : null}
                </div>
              </div>
              <div className={`flex size-full flex-col items-center`}>
                <div className="w-full">{props.children}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
