import { motion } from "framer-motion";
import { fadeIn } from "../../framermotion/variant";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-cyan "
      >
      Frontend Developer
      <span className="text-orange"> | </span> Mern Stack Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Saqib Ahmed
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        A passionate web developer with 1 year of experience turning ideas into<br/>
        interactive, user-friendly websites I specialize in building responsive <br/>
        frontends with modern frameworks like React I love clean code, great UI/UX<br/>
        and bringing projects to life from start to finish.
      </motion.p>
    </div>
  );
};

export default HeroText;
