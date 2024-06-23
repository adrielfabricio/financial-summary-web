interface PageTitleProps {
  title: string
}

export const PageTitle = (props: PageTitleProps) => {
  return <h1 className="text-primary text-2xl font-medium">{props.title}</h1>
}
