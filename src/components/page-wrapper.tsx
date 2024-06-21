import { PageTitle } from "./page-title"

interface PageWrapperProps {
	actions?: React.ReactNode
	children: React.ReactNode
	customHeader?: React.ReactNode
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
							<div className="flex w-full flex-row items-center justify-between">
								<div className="w-full">
									{props.customHeader ? (
										<>{props.customHeader}</>
									) : (
										<>
											<PageTitle title={props.title} />
											{props?.description ? (
												<p className="text-muted-foreground text-sm">
													{props.description}
												</p>
											) : null}
										</>
									)}
								</div>
								{props?.actions ? <>{props.actions}</> : null}
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
