import { Head } from "$fresh/runtime.ts";

export default function Home() {

  const releases = [
    "https://song.link/gl"
  ]

  return (
    <>
      <Head>
        <title>Music</title>
        <style>
          {`
                    body {
                        background: #4C00AE;
                    
                    }
                
                `}
        </style>
        <meta name="theme-color" content="#4C00AE" />
      </Head>
      <div className="h-screen mt-4">
        <a href="/" className="text-white text-2xl font-serif px-4 hover:italic underline">
          spencersolberg.com
        </a>
        <div class="flex-1 flex px-4 pt-8 justify-center">
          <p class="text-center text-white text-6xl lg:text-7xl font-bold font-serif md:rotate-0">
            Music
          </p>
        </div>
        <div class="px-4 pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {releases.map((release) => (

            <iframe
              title="release"
              width="100%"
              height="150"
              src={`https://odesli.co/embed/?url=${encodeURIComponent(release)}&theme=dark`}
              frameborder="0"
              allowFullScreen
              sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox"
              allow="clipboard-read; clipboard-write"
              class="pb-4 rounded-md max-w-md mx-auto"
            />

            ))}
        </div>
      </div>
    </>
  );
}
