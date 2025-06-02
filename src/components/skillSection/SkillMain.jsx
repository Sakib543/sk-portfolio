import AllSkill from "./AllSkill";
import SkillsSm from "./SkillsSm";
import SkillText from "./SkillText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framermotion/variant";
const SkillMain = () => {
  return (
    <div id="skills">
    <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <SkillText />
      </motion.div>
      <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:hidden lg:block">
        <AllSkill />
      </div>
      <div className="sm:block lg:hidden">
        <SkillsSm />
      </div>
    </div>
  </div>
  );
};

export default SkillMain;
