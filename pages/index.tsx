import type { NextPage } from "next";
import Head from "next/head";
import HeroPic from "../components/core/HeroPic";
import Header from "../components/Layout/Header";
import Title from "../components/core/Title";
import HeadignWithText from "../components/Layout/HeadignWithText";
import Button from "../components/core/Button";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Project Name 1",
    description: "Lorem ipsum dolor sit amet...",
    year: "2019 - present",
    gradient: "from-cyan-400 to-blue-600",
  },
  {
    id: 2,
    title: "Project Name 2",
    description: "Lorem ipsum dolor sit amet...",
    year: "2019 - present",
    gradient: "from-green-400 to-yellow-600",
  },
  {
    id: 3,
    title: "Project Name 3",
    description: "Lorem ipsum dolor sit amet...",
    year: "2019 - present",
    gradient: "from-purple-400 to-pink-600",
  },
];

const experiences = [
  {
    id: 1,
    role: "Mobile Developer",
    company: "Sitallcom",
    duration: "2024 - Present",
    country: "Brazil",
    description:
      `Responsible for creating and maintaining high-quality mobile applications using React Native, TypeScript, and Expo. 
      I develop new features and enhance existing ones to improve user experience, serving over 20K active users.`,
  },
  {
    id: 3,
    role: "Freelance Mobile Developer",
    company: "Self-Employed",
    duration: "2024 - Present",
    country: "Brazil",
    description:
      "Designed and developed small-scale mobile apps for clients, focusing on user-friendly interfaces and functionality.",
  },
  {
    id: 2,
    role: "Intern - Software Development",
    company: "Mark Studios LLC",
    duration: "2023 - 2023 (3 months)",
    country: "USA",
    description: `Responsible for updates and improvements to the company’s SaaS platform, focusing on enhancing employee engagement. 
    I maintained internal applications using React, JavaScript, and TypeScript, ensuring the delivery of efficient and user-friendly solutions. `  },
];

const bio = {
  title: "I’m Pedro",
  text: `I’m a 25-year-old Computer Engineering student and a passionate mobile developer specializing in React Native and Expo. 
  When I’m not busy building apps, I’m working on my dream of creating indie games.`,
  label: 'Find my on Linkedin'
}


const Home: NextPage = () => {
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
        <section className="py-12">
          <HeroPic/>
          <HeadignWithText label={bio.label} title={bio.title} style="gradient" text={bio.text}/>
        </section>

        {/* Experience Section */}
        <section>
        <Title title="Experience" />
        <div className="space-y-2">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="flex flex-col p-4"
            >
              <h3 className="text-lg font-semibold text-[#4A3F35] dark:text-[#F5EDE0]">
                {experience.role}
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                {experience.company} — {experience.duration}
              </p>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                <strong>Country:</strong> {experience.country}
              </p>
              <p className="mt-2 text-sm text-[#4A3F35] dark:text-[#F5EDE0]">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </section>


        {/* Projects Section */ }
        <section className="py-12">
          <Title title="Latest Projects"/>

          {projects.slice(0, 2).map((project) => (
              <div key={project.id} className="flex flex-col space-y-8 mt-4">
                <div
                  className={`w-full h-[250px] md:h-[180px] bg-gradient-to-r ${project.gradient} rounded-md shadow-lg`}
                ></div>
                <div>
                  <span className="text-sm text-gray-400 font-light">
                    {project.year}
                  </span>
                  <HeadignWithText
                    label="try it out"
                    title={project.title}
                    text={project.description}
                  />
                </div>
              </div>
            ))}
          { /*Project 3 - FIM */}
           {/* Button to View All Projects */}
            <Link href="/projects">
              <a>
                <Button label="View All Projects" />
              </a>
            </Link>

        </section>

        {/* Articles Section */ }
        <section className="py-12">

        </section>

      </main>
    </div>
  );
};

export default Home;
