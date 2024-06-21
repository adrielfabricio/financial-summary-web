interface PageTitleProps {
	title: string
}

export const PageTitle = (props: PageTitleProps) => {
	return <h1 className="text-2xl font-bold">{props.title}</h1>
}
