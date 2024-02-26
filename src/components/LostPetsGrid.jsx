import LostPetModal from "./LostPetModal";
import { useState,useEffect } from "react";
import axios from "axios";
/**
 * ,species,breed,color,address,description,image_url
 */

export default function LostPetsGrid() {

  const [lostPets,setLostPets] = useState([]);
  const getPets = async () =>{
    try {
      const res = await axios.get('http://localhost:3001/allpets',{
        withCredentials:true,
      });
      setLostPets(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log("Error fetching pets:", error);
    }
    

  }

  useEffect(()=>{
    getPets();
    console.log(lostPets);
  },[]);
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-4 my-4">
        {lostPets.map((item, index) => (
          <div key={index} className="card w-96 bg-base-100 shadow-xl m-4">
            <figure>
              <img
                src={item.image_url ? item.image_url : 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg'}
                alt="pet-img"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.species}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    document.getElementById("my_modal_" + index).showModal()
                  }
                >
                  See Description
                </button>
              </div>
            </div>
            <LostPetModal description={item.description} index={index} reporter={item.reportedBy}/>
          </div>
        ))}
      </div>
    </section>
  );
}
