import "../styles/globals.css";
import SideBar from "../components/sidebar";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/layout";
import NavBar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
        <SideBar />
        <NavBar  />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Layout>
          <div className="ml-[96px] z-0">
            <Component {...pageProps} />
          </div>
        </Layout>
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
