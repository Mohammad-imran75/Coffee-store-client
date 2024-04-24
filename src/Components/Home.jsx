import { useLoaderData } from "react-router-dom";
import CoffeCard from "./CoffeCard";
import { useState } from "react";
import Users from "./Users";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  console.log(coffees);
  return (
    <div>
      <h1 className="text-4xl text-center mt-10 font-bold">
        Hot Hot cold coffe{" "}
      </h1>
      <div className="grid md:grid-cols-2 gap-4 mt-10">
        {coffees.map((coffee) => (
          <CoffeCard
            key={coffee._id}
            coffee={coffee}
            setCoffees={setCoffees}
            coffees={coffees}
          ></CoffeCard>
        ))}
      </div>
          
    </div>
  );
};

export default Home;
