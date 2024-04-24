import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  console.log(coffee);
  const {_id, name, chef, supplier, taste, categorey, details, photo } = coffee;
  const handleUpdatedCoffee = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("coffeName");
    const chef = formData.get("chef");
    const supplier = formData.get("supplier");
    const taste = formData.get("taste");
    const categorey = formData.get("categorey");
    const details = formData.get("details");
    const photo = formData.get("photo url");
    const updateCoffee = {
      name,
      chef,
      supplier,
      taste,
      categorey,
      details,
      photo,
    };
    console.log(updateCoffee);
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount>0) {
          Swal.fire({
            title: "success!",
            text: "updated user successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24 mt-5">
      <h1 className="text-3xl">Update coffee</h1>
      <form className="mt-4" onSubmit={handleUpdatedCoffee}>
        <div className="flex gap-10 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input
              type="text"
              name="coffeName"
              defaultValue={name}
              placeholder="Enter Coffee name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <input
              type="text"
              name="chef"
              defaultValue={chef}
              placeholder="Enter Coffee Chef"
              className="input input-bordered  w-full"
              required
            />
          </div>
        </div>
        <div className="flex gap-10 mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              placeholder="Enter supplier name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              defaultValue={taste}
              placeholder="Enter Coffee taste"
              className="input input-bordered  w-full"
              required
            />
          </div>
        </div>
        <div className="flex gap-10 mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Categorey</span>
            </label>
            <input
              type="text"
              name="categorey"
              defaultValue={categorey}
              placeholder="Enter Coffee catergorey"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              name="details"
              defaultValue={details}
              placeholder="Enter Coffee details"
              className="input input-bordered  w-full"
              required
            />
          </div>
        </div>
        <div className="flex gap-10 mb-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              defaultValue={photo}
              name="photo url"
              placeholder="Enter Coffee name"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <input
          type="submit"
          value="updated coffee"
          className="btn btn-block bg-orange-950 text-white"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
