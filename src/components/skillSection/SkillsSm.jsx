import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framermotion/variant";

const Skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "Bootstrap",
    icon: FaBootstrap,
  },
  {
    skill: "JavaScript",
    icon: DiJavascript,
  },
  {
    skill: "ReactJs",
    icon: GrReactjs,
  },
  {
    skill: "NextJs",
    icon: RiNextjsFill,
  },
  {
    skill: "Redux",
    icon: TbBrandRedux,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
];
const SkillsSm = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
    {Skills.map((item, index) => {
      return (
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          key={index}
          className="flex flex-col items-center"
        >
          <item.icon className="text-7xl text-orange" />
          <p className="text-center mt-4">{item.skill}</p>
        </motion.div>
      );
    })}
  </div>
  );
};

export default SkillsSm;
