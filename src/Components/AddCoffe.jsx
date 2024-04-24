import Swal from 'sweetalert2'

const AddCoffe = () => {
const handleCoffeInfo= (e) =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('coffeName')
    const chef = formData.get('chef')
    const supplier = formData.get('supplier')
    const taste = formData.get('taste')
    const categorey = formData.get('categorey')
    const details = formData.get('details')
    const photo = formData.get('photo url')
    const newCoffee = {name,chef,supplier,taste,categorey,details,photo}
    console.log(newCoffee)
    fetch('http://localhost:5000/coffee',{
       method:'POST',
       headers:{
        'content-type':'application/json'
       },
       body:JSON.stringify(newCoffee) 
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                title: 'success!',
                text: 'success user successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
}
  return (
    <div className="bg-[#F4F3F0] p-24 mt-5">
      <h1 className="text-3xl">Added coffe</h1>
      <form className="mt-4" onSubmit={handleCoffeInfo}>
      <div className="flex gap-10 mb-4">
       <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Coffee Name</span>
          </label>
          <input
            type="text"
            name="coffeName"
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
            name="photo url"
            placeholder="Enter Coffee name"
            className="input input-bordered w-full"
            required
          />
        </div>
       </div>
       <input type="submit" value="Add coffee" className="btn btn-block bg-orange-950 text-white" />
      </form>
    </div>
  );
};

export default AddCoffe;
