import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration
} from "@remix-run/react";

import styles from "./tailwind.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "Spencer Solberg",
	viewport: "width=device-width,initial-scale=1",
	"theme-color": "black"
});

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body id="gradient" className="bg-white overflow-hidden">
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
