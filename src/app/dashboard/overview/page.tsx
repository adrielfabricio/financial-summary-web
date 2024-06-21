import { PageWrapper } from "@/components/page-wrapper";
import { UserNotFound } from "@/components/user-not-found";
import { getUser } from "@/modules/auth";

export default async function Overview() {
  const user = await getUser()

  if(!user){
    return <UserNotFound/>
  }

  return (
    <PageWrapper title="Resumo Financeiro">
      <h1>Welcome back, {user.data.name}!</h1>
      <p>Your email is {user.data.email}</p>
    </PageWrapper>
  )

}