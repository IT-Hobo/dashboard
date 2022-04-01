import Link from "next/link";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { HiDocument } from "react-icons/hi";
import { BsGearWideConnected } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { useRouter } from "next/router";
import Layout from "./layout";

const SideBar = () => {
  const router = useRouter();

  const handleClick = (e, path) => {
    e.preventDefault();
    switch (path) {
      case "/":
        router.push(path);
      case "/":
        router.push(path);
      case "/docs":
        router.push(path);
      case "/settings":
        router.push(path);
      case "/account":
        router.push(path);
      case "/register":
        router.push(path);
    }
  };
  return (
    <div>
      <div className="small-sidebar">
          <div className="flex flex-col-reverse">
            <button onClick={(e) => handleClick(e, "/")}>
              <SideBarIcon icon={<FaHome size="28" />} />
            </button>
            <button onClick={(e) => handleClick(e, "/docs")}>
              <SideBarIcon icon={<HiDocument size="28" />} />
            </button>
          </div>
          <div className="fixed bottom-2 flex flex-col px-5">
            <button onClick={(e) => handleClick(e, "/account")}>
              <SideBarIcon icon={<VscAccount size="28" />} />
            </button>

            <button onClick={(e) => handleClick(e, "/settings")}>
              <SideBarIcon icon={<BsGearWideConnected size="28" />} />
            </button>
          </div>
        </div>
        </div>


  );
};

const SideBarIcon = ({ icon }) => (
  <div className="sidebar-icon group">{icon}</div>
);

export default SideBar;
