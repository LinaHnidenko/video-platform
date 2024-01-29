import { Menu } from "lucide-react";
import { useSidebarContext } from "../context/SidebarContext";
import Button from "./Button";
import logo from "../assets/logo.svg";

type HeaderFirstSectionProps = {
  hidden?: boolean;
};

const HeaderFirstSection = ({ hidden = false }: HeaderFirstSectionProps) => {
  const { toggle } = useSidebarContext();
  return (
    <div
      className={` gap-4 items-center flex-shrink-0 ${
        hidden ? "hidden" : "flex"
      }`}
    >
      <Button variant="ghost" size="icon" className="" onClick={toggle}>
        <Menu />
      </Button>
      <a href="/" className="flex justify-center items-center gap-1">
        <img src={logo} alt="" className="h-6" />
        <span>PlayPulse</span>
      </a>
    </div>
  );
};
export default HeaderFirstSection;
