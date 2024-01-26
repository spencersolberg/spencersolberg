import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

interface Data {
    hostname: string;
}

export const handler: Handlers<Data> = {
    async GET(req: Request, ctx) {
        const { hostname } = new URL(req.url);
        return ctx.render({ hostname })
    }
}

export default function Projects(props: PageProps<Data>) {
  const projects = [
    {
        title: "Fresh Ears",
        description: "Ear training incremental game",
        url: "https://ears.spencersolberg.com",
        handshakeUrl: "https://ears.spencersolberg",
        image: "/fresh-ears.webp",
    },
    {
        title: "Syllabify",
        description: "Raycast extension for splitting words into syllables",
        url: "https://github.com/spencersolberg/syllabify",
        handshakeUrl: "https://github.com/spencersolberg/syllabify",
        image: "/syllabify.webp",
    },
    {
        title: "Music Copyright Notices",
        description: "Raycast extension for gathering music copyright details",
        url: "https://github.com/spencersolberg/music-copyright-notices",
        handshakeUrl: "https://github.com/spencersolberg/music-copyright-notices",
        image: "/music-copyright-notices.webp",
    },
    {
        title: "Blog",
        description: "Personal blog",
        url: "https://blog.spencersolberg.com",
        handshakeUrl: "https://blog.spencersolberg",
        image: "/blog.webp",
    },
    {
        title: "Handshake Incremental Game",
        description: "Clicker game for Handshake (HNS)",
        url: "https://handshake.incrementalgame.spencersolberg.com",
        handshakeUrl: "https://handshake.incrementalgame",
        image: "/handshake-incrementalgame.webp"
    },
    {
        title: "Shakeplace",
        description: "Collaborative pixel art with Handshake authentication",
        url: "https://github.com/spencersolberg/shakeplace",
        handshakeUrl: "https://github.com/spencersolberg/shakeplace",
        image: "shakeplace.webp"
    }
  ];

  const isHandshake = props.data.hostname === "spencersolberg";

  return (
    <>
      <Head>
        <title>Projects</title>
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
        <a
          href="/"
          className="text-white text-2xl font-serif px-4 hover:italic underline"
        >
          go back
        </a>
        <div class="flex-1 flex px-4 pt-8 justify-center">
          <p class="text-center text-white text-6xl lg:text-7xl font-bold font-serif md:rotate-0">
            Projects
          </p>
        </div>
        <div class="px-4 pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pb-12">
          {projects.map((project) => (
            <div class="max-w-sm mx-auto rounded-md overflow-hidden shadow-lg bg-white transform-gpu transition-all hover:scale-105 mt-4">
              <a href={isHandshake ? project.handshakeUrl : project.url} target="_blank" rel="noreferrer">
                <img
                  class="w-full"
                  src={project.image}
                  alt="Thumbnail of project"
                />
                <div class="px-6 py-4">
                  <div class="font-medium font-serif text-2xl mb-2">
                    {project.title}
                  </div>
                  <p class="text-gray-700 font-serif text-base">
                    {project.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
