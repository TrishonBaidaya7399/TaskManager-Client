import { FaUser } from "react-icons/fa";
import useUserInfo from "../Hooks/useUserInfo";

const UserProfile = () => {
  const [userInfo] = useUserInfo();

  return (
    <div className="my-6 mx-auto h-fit w-fit px-12 bg-black bg-opacity-70 rounded-lg">
      <h1 className="text-3xl font-semibold text-left text-yellow-400 pt-4 text-center">User Profile</h1>
      <div className="p-12 flex gap-6  justify-center">
        <div>
        <div className="flex justify-center">
            {userInfo?.photo ? (
              <img src={userInfo.photo} className="border-[4px] border-yellow-400 rounded-lg" alt="" />
            ) : (
              <FaUser className="text-[100px] text-black bg-gray-300 p-2 w-full h-full rounded-lg drop-shadow-lg" />
            )}
          </div>
        </div>
        <div className="profileCard bg-white border-[4px] border-yellow-400 rounded-lg p-6 w-[330px]">
          
          <div className="flex flex-col text-left gap-1 mt-4">
            <h1 className="text-xl"><span className="font-semibold text-xl">User Name:</span> {userInfo.name}</h1>
            <h1 className="text-xl"><span className="font-semibold text-xl">Contact Info:</span> +8801*********</h1>
            <h1 className="text-xl"><span className="font-semibold text-xl">Email:</span> {userInfo.email}</h1>
            <h1 className="text-xl"><span className="font-semibold text-xl">Designation</span>: {userInfo.role}</h1>
            <h1 className="text-xl"><span className="font-semibold text-xl">Department:</span> N/A</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
