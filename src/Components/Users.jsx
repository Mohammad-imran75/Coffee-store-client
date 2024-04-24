import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const users = useLoaderData();
  const [loadedUsers,setLoadedUsers] = useState(users);
  const handleDelete = id =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(result=>{
        if(result.isConfirmed){
            fetch(`http://localhost:5000/users/${id}`,{
                method:'DELETE'
            }).then(res=>res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your coffee has been deleted.",
                        icon: "success",
                    });
                    const remainingUser = loadedUsers.filter(user=>user._id !== id)
                    setLoadedUsers(remainingUser)
                }
            })

        }
      })
  }
console.log(users)
  return (
    <div className="mt-10">
      <h1 className="text-orange-500 font-bold text-4xl text-center">
        This is User section{users.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>CreateAt</th>
             
              <th>Last Logged at</th>
              <th>Delete Icon</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
           {
            loadedUsers.map((user,index)=> <tr key={user.id}>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>{user.createAt}</td>
            <td>{user.lastLoggedAt}</td>
            <td>
            <button
                  onClick={() => handleDelete(user._id)}
                  className="btn join-item text-3xl  text-red-600 bg-red-300"
                >
                  <MdDelete />
                </button>
            </td>
            <td>
            <Link to={`/signIn`}>
                  <button className="btn join-item text-white bg-black text-2xl">
                    <FaEdit />
                  </button>
                </Link>
            </td>
          </tr>)
           }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
