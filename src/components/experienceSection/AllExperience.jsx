import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framermotion/variant";

const experiences = [
  {
    job: "Website Designer & Developer",
    company: "Wb Communications",
    date: "2023 - Present",
    responsibilities: [
      "Designed, developed, and maintained the OSHA Training School’s official website using modern web technologies (HTML, CSS, Bootstrap, JavaScript, PHP ).",
      "Implemented responsive, user-friendly layouts optimized for mobile and desktop viewing.",
      "Created visually engaging social media content, promotional banners, and course graphics using Canva.",
      "Ensured website SEO health by managing meta tags, structured data, and performance optimization to improve organic traffic and search engine ranking.",
      "Regularly analyzed website analytics (Google Search Console, Google Analytics) to identify improvements and implement SEO strategies.",
      "Monitored uptime, fixed bugs, and managed hosting/cPanel configurations for consistent website performance.",
    ],
  },
  {
    job: "Web Developer (Remote)",
    company: "Ar Trakker",
    date: "2024 - Present",
    responsibilities: [
      "Developed and maintain the company’s responsive website using HTML, CSS, JavaScript, and modern tools.",
      "Ensure website performance, security, speed optimization, and cross-device compatibility.",
      "Update and manage product pages, blogs, tracking features, and contact forms.",
      "Design branded social media posts, banners, and promotional graphics using Canva.",
      "Implement on-page SEO strategies including proper metadata, keyword optimization, structured URLs, and image optimization.",
      "Analyze site performance using Google Search Console and Google Analytics to improve rankings and user engagement.",
    ],
  }
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 1 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperience;