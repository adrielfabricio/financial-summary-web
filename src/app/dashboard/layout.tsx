import { SideNav } from "@/components/side-nav"
import { UserNotFound } from "@/components/user-not-found"
import { getUser } from "@/modules/auth"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default async function DashboardLayout(props: DashboardLayoutProps) {
  const user = await getUser()

  if (!user) {
    return <UserNotFound />
  }

  return (
      <div className="flex h-dvh flex-col overflow-hidden">
        <div className="min-h-screen flex-1 basis-0">
          <div className="flex h-full">
            <SideNav user={user.data} />

            <>{props.children}</>
          </div>
        </div>
      </div>
  )
}
