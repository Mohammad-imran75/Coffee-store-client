import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdPreview } from "react-icons/md";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const CoffeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, taste, categorey, details, photo } =
    coffee;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
            });
              const remaining = coffees.filter(cof => cof._id !== _id)
              setCoffees(remaining)
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-[#90876f] shadow-2xl mt-3">
        <figure>
          <img className="w-[200px] p-10 rounded-lg" src={photo} alt="Movie" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <div className="space-y-2">
              <h2 className="card-title">{name}</h2>
              <p className="font-bold ">
                Supplier : <small>{supplier}</small>
              </p>
              <p className="font-bold ">
                Taste : <small>{taste}</small>
              </p>
              <p className="font-bold">
                Categorey : <small>{categorey}</small>
              </p>
              <p className="font-bold ">
                Details : <small>{details}</small>
              </p>
              <p className="font-bold ">
                Quantity : <small>{chef}</small>
              </p>
            </div>

            <div className="card-actions">
              <div className="join join-vertical space-y-7">
                <button className="btn join-item bg-purple-300 text-2xl">
                  <MdPreview />
                </button>
                <Link to={`updateCoffee/${_id}`}>
                  <button className="btn join-item text-white bg-black text-2xl">
                    <FaEdit />
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn join-item text-3xl  text-red-600 bg-red-300"
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
CoffeCard.propTypes = {
  coffee: PropTypes.object,
};

export default CoffeCard;
