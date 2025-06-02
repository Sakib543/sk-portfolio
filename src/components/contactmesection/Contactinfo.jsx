import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import Singleinfo from "./Singleinfo";

const Contactinfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <Singleinfo text="alisakib543@gmail.com" Image={HiOutlineMail} />
      <Singleinfo text="+92-3162831640" Image={FiPhone} />
      <Singleinfo text="Karachi Pakistan" Image={IoLocationOutline} />
    </div>
  );
};

export default Contactinfo;