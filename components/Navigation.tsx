export const Navigation = () => {
	return (
		<nav className=" w-full bg-amber-300 dark:bg-slate-700 items-center justify-center">
			<ul className="flex flex-row gap-3 xl:w-[1280px] mx-auto">
				<li>
					<a href="/onboarding">onboarding</a>
				</li>
				<li>
					<a href="/login">login</a>
				</li>
				<li>
					<a href="/profile">profile</a>
				</li>
				<li>
					<a href="/diary">diary</a>
				</li>
				<li>
					<a href="/settings">settings</a>
				</li>
			</ul>
		</nav>
	);
};
