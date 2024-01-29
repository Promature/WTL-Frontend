// import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import Modal from '../Modal'

export default function Card({id,name, addr, posted_date,desc,img}) {
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
            <figure><img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" alt="Shoes" /></figure>
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
                <p>{desc.slice(0,200)}...</p>
                <button className="btn hover:text-blue-700 hover:bg-blue-200 hover:font-bold" 
                onClick={
                    ()=> document.getElementById(`${id}`).showModal()
                    } ><span>See More</span></button>
                <Modal id ={id} name={name} desc={desc} addr={addr} posted_date={posted_date}/>
            </div>
        </div>
        </motion.div>
    )
}
