export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Composers",
			href: "/composers",
		},
		{
			label: "Pieces",
			href: "/piecelist",
		},
		// {
		// 	label: "Posts",
		// 	href: "/posts",
		// }
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Composers",
			href: "/composers",
		},
		{
			label: "Pieces",
			href: "/piecelist",
		},
		// {
		// 	label: "Posts",
		// 	href: "/posts",
		// }
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev"
	},
};
