export default function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<section className="flex min-h-full w-full items-center justify-center px-4 py-8">
			<div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
				<div className="mb-6 text-center">
					<h1 className="text-xl font-semibold">Mind Tracker</h1>
				</div>
				{children}
			</div>
		</section>
	);
}
