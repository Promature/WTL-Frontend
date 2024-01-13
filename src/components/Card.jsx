import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

export default function Card() {
    return (
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
        <div className="card card-compact w-96 bg-base-100 shadow-xl flex justify-self-center my-4">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <div>
                        <h3 className='card-title'>Sullie</h3>
                        <h4>Mexico</h4>
                    </div>
                    <div>
                        <h4>2 days ago</h4>
                    </div>
                </div>
                <p>If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, consectetur! Aliquid eos, voluptates nihil iste iusto tempora doloribus odio eaque reiciendis! Et quia hic ducimus culpa illo natus nihil sint?</p>
                <Link to='/' className='text-base font-semibold hover:text-blue-500'>See More</Link>                
            </div>
        </div>
        </motion.div>
    )
}
