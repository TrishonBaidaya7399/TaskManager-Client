// import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/6W94FKK/Home-Banner.png)",
        }}
      >
        {/* <div className="hero-overlay bg-opacity-30"></div> */}
        <div className="ml-auto mr-12 text-right text-yellow-400 drop-shadow-lg">
          <div className="max-w-lg mt-12">
            <p className="mb-2 text-2xl text-white">
              Start your daily tasks with
            </p>
            <h1 className="mb-5 text-8xl font-bold">Task Manager</h1>
            <Link to="register">
            <button className="btn bg-yellow-300 mt-8 text-Black drop-shadow-lg border-none text-xl font-semibold">Let’s Explore</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
