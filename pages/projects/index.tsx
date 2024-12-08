import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Title from "../../components/core/Title";

const projects = [
    {
      id: 1,
      title: "Moonshiner",
      description: "A mystery indie game built with Flutter.",
      year: "2024 - present",
      image: "/moonshiner.png",
      url: "https://www.youtube.com/watch?v=LuPt9pOz79U&list=PLEDcEdSKLFLXTKAB-vDl392hhdlJlbe-H",
      techStack: ["Flutter", "Flame Engine", "Dart"],
    },
    {
      id: 2,
      title: "Emenu",
      description: "An interactive digital menu platform to enhance restaurant experiences.",
      year: "2024 - present",
      image: "/emenu.png",
      url: "https://your-emenu-website.com",
      techStack: ["Next.JS", "Typescript", "Tailwind", "MongoDB", "Express"],
    },
    {
      id: 3,
      title: "$FLAP",
      description: "The first Brazilian memecoin on Solana!",
      year: "2024",
      image: "/flap.png",
      url: "https://flap-token-landing-page.vercel.app/",
      techStack: ["Next JS", "Typescript", "Tailwind", "Framer Motion"],
    },
    {
      id: 4,
      title: "Todo App",
      description: "A simple Todo application to manage daily tasks.",
      year: "2023",
      image: "/todo.png", // Add the image to your public folder
      url: "https://todo-list-fawn-pi.vercel.app/", // Replace with your project link
      techStack: ["React", "TypeScript", "TailwindCSS", "Vite"],
    },
    {
      id: 5,
      title: "D281 Software Solutions",
      description: "High-quality custom software built with Next.js, TypeScript, and TailwindCSS.",
      year: "2023",
      image: "/d281.png", // Add this image to your public folder
      url: "https://d281.vercel.app/", // Replace with the actual link
      techStack: ["Next.js", "TypeScript", "TailwindCSS"],
    },
    {
      id: 6,
      title: "EvoGym",
      description: "A modern fitness website with a sleek design and interactive features.",
      year: "2022",
      image: "/evogym.png", // Add this image to your public folder
      url: "https://evogym-website.vercel.app/", // Replace with your live project link
      techStack: ["React", "Typescript", "TailwindCSS", "Framer Motion"],
    },
    {
      id: 7,
      title: "Netflix Clone",
      description: "A responsive Netflix clone with subscription forms and dynamic UI.",
      year: "2022",
      image: "/netflix.png", // Add this image to your public folder
      url: "https://your-netflix-clone-link.com", // Replace with your live project link
      techStack: ["Html", "Css", "JavaScript"],
    },
    {
      id: 8,
      title: "Furquim Advocacia",
      description: "A modern and responsive legal firm website offering professional legal services.",
      year: "2022",
      image: "/adv.png", // Add this image to your public folder
      url: "https://devpedrofurquim.github.io/law_firm_website/", // Replace with the live project link
      techStack: ["Next.js", "React", "TailwindCSS"],
    },
    {
      id: 9,
      title: "Hangman Game",
      description: "A multilingual hangman game built with React and TypeScript.",
      year: "2021",
      image: "/hang.png", // Add the image to your public folder
      url: "https://devpedrofurquim.github.io/hangman/", // Replace with the live project link
      techStack: ["React", "TypeScript", "CSS"],
    },
  ];

  import { useTranslation } from "../../hooks/useTranslation";

const Projects: NextPage = () => {
  const t = useTranslation();
  return (
    <div className="min-h-screen">
      <Head>
        <title>Projects | Pedro Portfolio</title>
        <meta
          name="description"
          content="Explore the projects Pedro has worked on, including Moonshiner and Emenu."
        />
      </Head>
      <main className="py-12">
      <section className="py-12">
        <Title title={t.allProjects} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {projects.map((project) => (
            <div
                key={project.id}
                className="rounded-lg overflow-hidden flex flex-col"
            >
                {/* Image */}
                <div className="h-36 w-full relative">
                <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col space-y-2">
                {/* Title */}
                <h3 className="text-lg font-semibold  text-dark dark:text-white">{project.title}</h3>
                {/* Year */}
                <p className="text-sm text-gray-400">{project.year}</p>
                {/* Tech Stack */}
                <div className="flex flex-wrap text-sm text-gray-400 gap-2">
                {project.techStack.map((tech) => (
                    <p key={tech} className="bg-gray-700 px-2 py-1 rounded-lg">
                    {tech}
                    </p>
                ))}
                </div>
                {/* View Project Link */}
                <Link href={project.url}>
                    <a
                    className="text-blue-400 hover:underline text-sm mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    {t.viewProject}
                    </a>
                </Link>
                </div>
            </div>
            ))}
        </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;