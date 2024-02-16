import Carousel from "../components/Carousel"
import RecentPets from "../components/RecentPets"
// import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center">
        <Carousel />
      </div>


      {/* how we work */}
      <div className="h-full bg-blue-100 pb-5 md:py-10">
        <div className="md:flex text-center font-bold justify-center">
          <h1 className="text-5xl pt-32 text-center ">How We Work</h1>
          <img className="w-[300px] ml-16 md:ml-32 hover:contrast-125" src="adopt-pet.png" alt="1" />
        </div>

        <div className="items-center">
        </div>

        {/* grid */}
        <div className="md:pt-12">
          <div className="md:flex md:flex-cols-3 text-2xl md:gap-8 justify-center">
              
              <div className="text-center mb-10">
                <img className="mx-auto hover:contrast-150" src="https://cdn-icons-png.flaticon.com/128/2447/2447831.png" alt="1" onClick={() => {navigate('/found-pet')}} />
                <h2 className="font-bold text-2xl mt-4 mb-2 hover:cursor-pointer hover:text-blue-800" onClick={() => {navigate('/found-pet')}}>Report a Found Pet</h2>
                <p className="text-justify mx-8">Users who have found a lost pet can report it on the website by providing details such as where and when it was found, its description, and any other relevant information.</p>
              </div>

              <div className="text-center mb-10">
                <img className="mx-auto hover:contrast-150" src="https://cdn-icons-png.flaticon.com/128/2447/2447831.png" alt="1" onClick={() => {navigate('/lost-pets')}} />
                <h2 className="font-bold text-2xl mt-4 mb-2 hover:cursor-pointer hover:text-blue-800" onClick={() => {navigate('/lost-pets')}}>Search Found Pets</h2>
                <p className="text-justify mx-8">Users can browse or search through listings of found pets. They can filter the search results based on various criteria such as species, breed, color, and distance from their location.</p>
              </div>

              <div className="text-center mb-10">
                <img className="mx-auto hover:contrast-150" src="https://cdn-icons-png.flaticon.com/128/2447/2447831.png" alt="1" onClick={() => {navigate('/success-stories')}} />
                <h2 className="font-bold text-2xl mt-4 mb-2 hover:cursor-pointer hover:text-blue-800" onClick={() => {navigate('/success-stories')}}>Reunion Stories</h2>
                <p className="text-justify mx-8">Users can share success stories of lost pets being reunited with their owners through the website, providing hope and encouragement to others.</p>
              </div>

          </div>
        </div>
      </div>

      {/* recently uploaded pets */}

      <div className="my-6">
        <div className="font-bold text-4xl text-center">
          Recently Added Pets
        </div>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item">
            <RecentPets />
          </div>
          <div id="item2" className="carousel-item">
            <RecentPets />
          </div>
          <div id="item4" className="carousel-item">
            <RecentPets />
          </div>
          <div id="item4" className="carousel-item">
            <RecentPets />
          </div>
          <div id="item4" className="carousel-item">
            <RecentPets />
          </div>
          <div id="item4" className="carousel-item">
            <RecentPets />
          </div>
        </div>
      </div>

      {/* general info */}
      {/* <div className="my-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="flex justify-center w-full h-[32rem] px-32 items-center">
          <div className="w-1/2">
            <img className="h-3/4" src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D" alt="" />
          </div>
          <div className="w-1/2 pl-8">
            <h3 className="text-4xl font-semibold ">Title 1</h3>
            <p className="mt-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat harum rerum maiores, ipsa magni eius exercitationem tenetur incidunt quisquam, ex non id, architecto sequi dignissimos deserunt alias illum consequuntur cupiditate!</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="flex justify-center w-full h-[32rem] px-32 items-center">
          <div className="w-1/2 pl-8">
            <h3 className="text-4xl font-semibold ">Title 2</h3>
            <p className="mt-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat harum rerum maiores, ipsa magni eius exercitationem tenetur incidunt quisquam, ex non id, architecto sequi dignissimos deserunt alias illum consequuntur cupiditate!</p>
          </div>
          <div className="w-1/2">
            <img className="h-3/4" src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D" alt="" />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="flex justify-center w-full h-[32rem] px-32 items-center">
          <div className="w-1/2">
            <img className="h-3/4" src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D" alt="" />
          </div>
          <div className="w-1/2 pl-8">
            <h3 className="text-4xl font-semibold ">Title 3</h3>
            <p className="mt-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat harum rerum maiores, ipsa magni eius exercitationem tenetur incidunt quisquam, ex non id, architecto sequi dignissimos deserunt alias illum consequuntur cupiditate!</p>
          </div>
        </div>
      </motion.div>
      </div> */}


    </>
  )
}
