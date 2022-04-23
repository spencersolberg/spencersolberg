import { useState, useEffect } from "react";
import io from "socket.io-client";

export default function Index() {
	const [visitors, setVisitors] = useState(0);
	const [socket, setSocket] = useState<ReturnType<typeof io>>();

	useEffect(() => {
		const url = location.protocol + "//" + location.host;
		setSocket(io(url));
	}, []);

	useEffect(() => {
		if (!socket) return;
		socket.on("visitors", ([wsVisitors]) => {
			setVisitors(wsVisitors);
		});
	}, [socket]);

	return (
		<>
			<header className="text-2xl lg:text-4xl">
				<h2 className="fixed top-0 p-4 text-black/50">Home</h2>
				<h2 className="fixed top-0 p-4 right-0 text-right text-black/50">
					{visitors} visitor{visitors == 1 ? "" : "s"}
				</h2>
			</header>
			<main className="text-white">
				<div id="name" className="flex mx-auto">
					<section className="mx-auto flex flex-col h-screen justify-center leading-[5rem] text-7xl sm:leading-[8rem] sm:text-8xl lg:leading-[11.5rem] lg:text-10xl">
						<h1 className="text-black/50">Spencer</h1>
						<h1 className="text-black/50 pb-20">Solberg</h1>
					</section>
				</div>
			</main>
			<footer className="text-2xl lg:text-4xl">
				<nav className="flex flex-col p-4 fixed bottom-0">
					<a
						className="text-black/50 hover:text-[#d83bd2] hover:italic"
						href="mailto:solberg@duck.com"
						target="_blank"
					>
						Contact
					</a>
					<a
						className="text-black/50 hover:text-[#6bd968] hover:bg- hover:italic"
						href="https://github.com/spencersolberg"
						target="_blank"
					>
						GitHub
					</a>
					<a
						className="text-black/50 hover:text-[#3992ff] hover:bg- hover:italic"
						href="https://www.twitter.com/spencersolberg_"
						target="_blank"
					>
						Twitter
					</a>
					<a
						className="text-black/50 hover:text-[#f44250] hover:bg- hover:italic"
						href="https://www.instagram.com/spencersolberg"
						target="_blank"
					>
						Instagram
					</a>
				</nav>
				<p className="text-black/50 fixed right-0 bottom-0 p-4">
					Copyright &copy;{" "}
					<span className="tracking-tight">2022</span>
				</p>
			</footer>
		</>
	);
}
