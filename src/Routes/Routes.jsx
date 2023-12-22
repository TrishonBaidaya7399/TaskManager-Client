import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import CreateNewTask from "../Dashboard/CreateNewTask";
import ToDoList from "../Dashboard/ToDoList";
import TaskDetails from "../Components/TaskDetails/TaskDetails";
import EditTask from "../Components/TaskDetails/EditTask";
import Todo from "../Dashboard/Todo";
import OnGoing from "../Dashboard/OnGoing";
import Completed from "../Dashboard/Completed";
import UserProfile from "../Dashboard/UserProfile";
import ErrorPage from "../Error Page/Error";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/register",
            element:<SignUp/>
        },
        {
            path:"/login",
            element:<Login/>
        },
      ]
    },
    {
      path: "dashboard",
      element: <Dashboard/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:"/dashboard/CreateNewTask",
            element:<CreateNewTask/>
        },
        
        {
            path:"/dashboard/toDoList",
            element:<ToDoList/>
        },
        {
            path:"/dashboard/todo",
            element:<Todo/>
        },
        {
            path:"/dashboard/onGoing",
            element:<OnGoing/>
        },
        {
            path:"/dashboard/completed",
            element:<Completed/>
        },
        {
            path:"/dashboard/profile",
            element:<UserProfile/>
        },
        {
          path: "/dashboard/toDoList/taskDetails/:id",
          element: <TaskDetails/>,
          loader: ({params}) => fetch(`https://tash-manager-server.vercel.app/tasks/${params.id}`)
        },
        {
          path: "/dashboard/toDoList/editTask/:id",
          element: <EditTask/>,
          loader: ({params}) => fetch(`https://tash-manager-server.vercel.app/tasks/${params.id}`)
        },
        
      ]
    }
  ]);