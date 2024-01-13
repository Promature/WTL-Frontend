import React from 'react'
import { Link } from 'react-router-dom'
export default function Card() {
    return (
        
        <div className="card card-compact w-96 bg-base-100 shadow-xl flex justify-self-center">
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
                <Link to='/' className='text-base font-semibold'>See More</Link>                
            </div>
        </div>
       
    )
}
