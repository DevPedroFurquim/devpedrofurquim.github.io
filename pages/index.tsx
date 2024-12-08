import type { NextPage } from "next";
import Head from "next/head";
import HeroPic from "../components/core/HeroPic";
import Header from "../components/Layout/Header";
import Title from "../components/core/Title";
import HeadignWithText from "../components/Layout/HeadignWithText";
import Button from "../components/core/Button";
import Link from "next/link";
import Image from "next/image";
import Text from "../components/core/Text";
import { useTranslation } from "../hooks/useTranslation";

const Home: NextPage = () => {
  const t = useTranslation(); // Load translations
  return (
    <div className='min-h-screen'>
     <Head>
      <title>Pedro Portfolio</title>
      <meta name="description" content="Explore Pedro's portfolio of mobile development projects and achievements." />
      <meta name="keywords" content="Pedro, Portfolio, Mobile Development, Projects, Software Developer" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <main>

        {/* Hero Section */ }
        <section className="pb-12">
          <HeroPic/>
          <HeadignWithText label={t.Biolabel} title={t.bioTitle} style="gradient" text={t.bioText} bioStack={t.bioStack}/>
        </section>

        { /*Education */}

        <section className="pb-12">
        <Title title={t.educationTitle} />
        <div className="space-y-4">
          {t.educationArray.map((edu) => (
            <div
              key={edu.id}
              className="p-4 rounded-lg"
            >
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                {edu.degree}
              </h3>
              <p className="text-md text-gray-500 dark:text-gray-300">
                {edu.institution}
              </p>
              <p className="text-MD text-gray-400 dark:text-gray-400">
                {edu.duration} — {edu.country}
              </p>
            </div>
          ))}
        </div>
      </section>

        {/* Experience Section */}
        <section  className="pb-12">
        <Title title={t.experienceTitle} />
        <div className="space-y-2">
          {t.experienceArray.map((experience) => (
            <div
              key={experience.id}
              className="flex flex-col p-4"
            >
              <h3 className="text-xl font-semibold text-[#4A3F35] dark:text-[#F5EDE0]">
                {experience.role}
              </h3>
              <p className="mt-2 text-md text-gray-500 dark:text-gray-300">
                {experience.company} — {experience.duration}
              </p>
              <p className="mt-2 text-md text-gray-500 dark:text-gray-300">
                {experience.country}
              </p>
              <p className="mt-2 text-md text-[#4A3F35] dark:text-[#F5EDE0]">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </section>

        {/* Projects Section */}
      <section className="pb-12">
        <Title title={t.latestProjectsTitle} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6" >
          {t.projectsArray.slice(0, 2).map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-lg p-4"
            >
              {/* Image */}
              <div className="relative h-40 w-full mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>

              {/* Project Details */}
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {project.year}
              </span>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mt-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {project.description}
              </p>

              {/* "Know more" Link */}
              <Link href={project.url || "#"}>
                <a
                  className="hover:underline text-sm mt-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.knowMore}
                </a>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-8 flex justify-center">
          <Link href="/projects">
            <a className=" text-black dark:text-white border-1 border-black dark:border-white border px-6 py-2 rounded-md">
              {t.viewAllProjects}
            </a>
          </Link>
        </div>
      </section>
      </main>
    </div>
  );
};

export default Home;
