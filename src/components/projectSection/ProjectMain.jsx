import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framermotion/variant";

const projects = [
  {
    name: "Osha Training School",
    year: "Mar2022",
    align: "right",
    image: "public/images/website-img-1.png",
    link: "https://www.oshatrainingschool.com/",
  },
  {
    name: "AR TRAKKER",
    year: "Sept2022",
    align: "left",
    image: "public/images/website-img-2.webp",
    link: "https://artrakker.com/",
  },
  {
    name: "Rentifi",
    year: "Jan2023",
    align: "right",
    image: "public/images/website-img-3.jpg",
    link: "https://rentefi.vercel.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;