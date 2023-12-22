import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
};

const Card = ({ task }) => {
    const handleDelete = (taskId) => {
        console.log(taskId);                             
        fetch(`https://tash-manager-server.vercel.app/tasks/${taskId}`, {
            method: "DELETE"
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Task deleted successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                
            }
            setTimeout(() => {
                window.location.reload();
              }, 1500);
        })  
    }
  const truncatedNote = truncateText(task?.note || "", 100);

  return (
    <div>
        <div className="bg-gray-300 cursor-pointer rounded-lg p-4 flex flex-col gap-2 h-[300px] border-[4px] border-yellow-400">
      <Link to={`/dashboard/toDoList/taskDetails/${task._id}`}>
          <div className="flex bg-black rounded-md bg-opacity-70 text-xs">
            <span className="font-semibold flex items-center text-white px-2">Priority:
          <p
            className={`w-fit px-2  ${
              task.priority === "Low" && "text-yellow-300"
            } ${task.priority === "Moderate" && "text-orange-500"} ${
              task.priority === "High" && "text-red-500"
            }  font-semibold rounded-md py-1`}
          >
            {task.priority}
          </p>
            </span>
            <span className="font-semibold flex items-center text-white">Status:
          <p
            className={`w-fit px-2  ${
              task.state === "Completed" && "text-green-500"
            } ${task.state === "On-Going" && "text-blue-500"} ${
              task.state === "To-Do" && "text-red-500"
            }  font-semibold rounded-md py-1`}
          >
            {task.state}
          </p>
            </span>
          </div>
          <h1 className="text-2xl w-full py-2 font-semibold">{task?.title}</h1>
          <article className="overflow-hidden overflow-ellipsis">{truncatedNote}</article>
      </Link>
          <button onClick={()=>handleDelete(task._id)} className="w-full rounded-md bg-black bg-opacity-80 py-1 text-md text-red-500 font-semibold mt-auto">Delete</button>
        </div>
    </div>
  );
};

Card.propTypes = {
    task: PropTypes.shape({
      _id: PropTypes.string,
      title: PropTypes.string,
      state: PropTypes.string,
      priority: PropTypes.string,
      note: PropTypes.string,
    }).isRequired,
  };
  
export default Card;


