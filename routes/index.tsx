import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Spencer Solberg</title>
        <style>
          {`
          body {
            background: #4C00AE;
          
          }
        
        `}
        </style>
        <meta name="theme-color" content="#4C00AE" />
      </Head>
      <div class="h-screen flex flex-col">
        <div class="flex-1 flex items-center justify-center">
          <p class="text-center text-white text-9xl sm:text-8xl md:text-8xl lg:text-9xl font-serif -rotate-90 md:rotate-0 transform-gpu transition-all hover:-translate-x-2 md:hover:-translate-x-0 md:hover:-translate-y-2 cursor-pointer active:scale-95 select-none">
            Spencer Solberg
          </p>
        </div>
        <div class="flex justify-between items-center text-white p-4 font-serif">
          <ul class="flex flex-col text-4xl">
          <li class="pb-4 transform-gpu transition-all hover:-translate-y-2 hover:translate-x-2 hover:scale-110">
              <a href="/music">
                Music
              </a>
            </li>
            <li class="pb-4 transform-gpu transition-all hover:-translate-y-2 hover:translate-x-2 hover:scale-110">
              <a href="https://www.twitter.com/spencersolberg_" target="_blank" rel="noreferrer">
                Twitter
              </a>
            </li>
            <li class="pb-4 transform-gpu transition-all hover:-translate-y-2 hover:translate-x-2 hover:scale-110">
              <a
                href="https://www.instagram.com/spencersolberg"
                target="_blank" rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li class="transform-gpu transition-all hover:-translate-y-2 hover:translate-x-2 hover:scale-110">
              <a href="https://github.com/spencersolberg" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
          {
            /*
            if small screen, display this


          */
          }
          <ul class="flex flex-col text-4xl md:hidden text-right self-end">
            <span class="pb-4">
              &copy; {
                // get year
                new Date().getFullYear()
              }
            </span>
            <span class="pb-4">Spencer</span>
            <span>Solberg</span>
          </ul>

          <p class="text-4xl self-end text-right hidden md:block">
            &copy; {
              // get year
              new Date().getFullYear()
            } Spencer Solberg
          </p>
        </div>
      </div>
    </>
  );
}
