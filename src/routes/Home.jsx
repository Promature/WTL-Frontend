import Carousel from "../components/Carousel"
import RecentPets from "../components/RecentPets"
import { motion } from 'framer-motion'
export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <Carousel />
      </div>


      {/* how we work */}
      <div className="h-screen bg-blue-100">
        <div className="text-center font-bold">
          <h1 className="text-5xl pt-16">How We Work</h1>
          <p className="py-8 text-2xl">blah blah blah</p>
        </div>

        {/* grid */}
        <div className="pt-32">
          <div className=" grid grid-cols-3 text-2xl">
            <div className="place-self-center text-center">
              <img className="" src="https://cdn-icons-png.flaticon.com/128/2447/2447831.png" alt="1" />
              <h2>Step 1</h2>
              <p>blah b;ah b;ah</p>
            </div>
            <div className="place-self-center text-center">
              <img src="https://cdn-icons-png.flaticon.com/128/2447/2447831.png" alt="1" />
              <h2>Step 2</h2>
              <p>blah b;ah b;ah</p>
            </div>
            <div className="place-self-center text-center">
              <img src="https://cdn-icons-png.flaticon.com/128/2447/2447831.png" alt="1" />
              <h2>Step 3</h2>
              <p>blah b;ah b;ah</p>
            </div>
          </div>
        </div>

      </div>
      {/* recently uploaded pets */}

      <div className="my-6">
        <div className="ml-4 pb-6 font-semibold text-4xl">
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
      <div className="my-4">
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
      </div>
    </>
  )
}
