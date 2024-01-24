// import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import Modal from '../Modal'

export default function Card({name, addr, posted_date,desc}) {
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
                        <h3 className='card-title'>{name}</h3>
                        <h4>{addr}</h4>
                    </div>
                    <div>
                        <h4>{posted_date}</h4>
                    </div>
                </div>
                <p>{desc}</p>
                <button className="btn hover:text-blue-700 hover:bg-blue-200 hover:font-bold" 
                onClick={
                    ()=> document.getElementById('my_modal_1').showModal()
                    } ><span>See More</span></button>
                <Modal />
            </div>
        </div>
        </motion.div>
    )
}
