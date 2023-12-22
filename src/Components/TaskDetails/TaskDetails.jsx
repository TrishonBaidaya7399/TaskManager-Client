// import PropTypes from 'prop-types';

import { FaEdit } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const TaskDetails = () => {
  const task = useLoaderData();
  console.log(task);
  return (
    <div>
      <button
        className="mt-2 bg-yellow-400 px-4 py-1 rounded-md font-semibold"
        onClick={() => window.history.back()}
      >
        Go Back
      </button>
      <div className="bg-gray-300 rounded-lg p-4 flex flex-col gap-2 w-full h-[70vh] my-8  border-[4px] border-yellow-400">
        <Link to={`/dashboard/toDoList/editTask/${task._id}`}>
          <FaEdit className="ml-auto text-xl" />
        </Link>
        <div className="flex gap-4 bg-black rounded-md bg-opacity-70 w-fit">
            <span className="font-semibold text-sm flex items-center text-white px-2">Priority:
          <p
            className={`w-fit px-2  ${
              task.priority === "Low" && "text-yellow-300"
            } ${task.priority === "Moderate" && "text-orange-500"} ${
              task.priority === "High" && "text-red-500"
            }  text-sm font-semibold rounded-md py-1`}
          >
            {task.priority}
          </p>
            </span>
            <span className="font-semibold text-sm flex items-center text-white">Status:
          <p
            className={`w-fit px-2  ${
              task.state === "Completed" && "text-green-500"
            } ${task.state === "On-Going" && "text-blue-500"} ${
              task.state === "To-Do" && "text-red-500"
            }  text-sm font-semibold rounded-md py-1`}
          >
            {task.state}
          </p>
            </span>
          </div>
        <h1 className="text-2xl w-full py-2 font-semibold">{task?.title}</h1>
        <article className="overflow-auto">{task.note}</article>
      </div>
    </div>
  );
};

TaskDetails.propTypes = {};

export default TaskDetails;
