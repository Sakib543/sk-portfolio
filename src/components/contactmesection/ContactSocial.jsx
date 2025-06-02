import SingleSocial from "./SingleSocial";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleSocial Link="https://github.com/Sakib543" Icon={FaGithub} />
      <SingleSocial Link="https://www.linkedin.com/in/saqib-ali-ba57681b5/" Icon={FaLinkedin} />
      <SingleSocial Link="https://www.instagram.com/i_am_sakib543?igsh=d2JhNzdyZGJmM3V5" Icon={FaInstagramSquare} />
    </div>
  );
};

export default ContactSocial;
