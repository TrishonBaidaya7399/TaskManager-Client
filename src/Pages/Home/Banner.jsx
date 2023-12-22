// import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="h-[70vh] lg:h-screen">
      <div
        className="hero  "
        style={{
          backgroundImage:
            "url(https://i.ibb.co/6W94FKK/Home-Banner.png)",
        }}
      >
        {/* <div className="hero-overlay bg-opacity-30"></div> */}
        <div className="bg-gradient-to-l from-[#151515] to-[rgba(21, 21, 21, 0.00)] ml-0 md:ml-auto h-[70vh] lg:h-screen w-full  mx-auto lg:mr-12 text-center md:text-right text-yellow-400 drop-shadow-lg">
          <div className="mt-[150px] md:mr-12">
            <p className="mb-2 lg:text-2xl text-white">
              Start your daily tasks with
            </p>
            <h1 className="mb-5 text-4xl lg:text-8xl font-bold">Task Manager</h1>
            <Link to="/login">
            <button className="text-black rounded-md h-8 px-6 lg:h-12 bg-yellow-300 lg:mt-8 text-Black drop-shadow-lg border-none text-xl font-semibold">Let’s Explore</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
