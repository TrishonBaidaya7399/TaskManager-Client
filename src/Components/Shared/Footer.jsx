import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import Aos from "aos";
import { useEffect } from "react";
const Footer = () => {
        useEffect(() => {
          Aos.init({
            duration: 1500, // Specify the animation duration
            easing: 'ease-out-cubic', // Specify the easing function
          });
        }, []);
  return (
    <div className="bg-gradient-to-r from-[#f72585] via-[#7209b7] to-[#560bad] h-[300px]">
      <footer data-aos="fade-down" className="h-[300px] footer footer-center p-4 md:p-10 bg-black bg-opacity-50 text-yellow-400">
        <aside>
          <img src={logo} className="w-[100px]" alt="" />
          <p className="font-bold text-3xl">Task Management</p>
          <p className="font-bold">Providing reliable tech since 1992</p>
          <p>Copyright © 2023 - All right reserved</p>
        </aside>
        <nav className="md:-mt-8">
          <div className="grid grid-flow-col gap-4">
            <Link to="#" className="text-2xl">
              <button>
                <FaFacebookF />
              </button>
            </Link>
            <Link to="#" className="text-2xl">
              <button>
                <FaTwitter />
              </button>
            </Link>
            <Link to="#" className="text-2xl">
              <button>
                <FaYoutube />
              </button>
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
