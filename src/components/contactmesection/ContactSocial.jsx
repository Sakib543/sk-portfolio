import SingleSocial from "./SingleSocial";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleSocial Link="#" Icon={FaGithub} />
      <SingleSocial Link="#" Icon={FaLinkedin} />
      <SingleSocial Link="#" Icon={FaInstagramSquare} />
    </div>
  );
};

export default ContactSocial;
