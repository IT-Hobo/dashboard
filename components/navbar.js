import Link from "next/link";
import { ImOffice } from "react-icons/im";


const NavBar = () => {
    return (
        <div className="nav-bar hidden mdhide:block">
        <nav className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="flex-grow-0 cursor-pointer">
        <Link href="/" passHref>
          <ImOffice size="32"/>
        </Link>
        </div>
        <span className="pl-4 flex-1 w-auto">Company Name</span>
        <span />
        <div className="flex flex-row items-center justify-between">
          <div className="block pl-2 pr-2">
            <Link href="/register">Sign In</Link>
            </div>
            <div className="block pl-2 pr-2">
            <Link href="/settings">Settings</Link>
            </div>
            <div className="block pl-2 pr-2">
            <Link href="/account">Account</Link>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default NavBar