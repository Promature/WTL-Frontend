import React from 'react'
import './foundpet.css';
export default function Petform() {
    return (
        <div className="flex grid grid-cols-2 bg-white">
            <div className='p-8 '>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <time className="font-mono italic">Step 1</time>
                            <div className="text-xl font-black">Work in the neighbourhood</div>
                            Speak with neighbors, postal carriers, landscapers, and anyone else in the vicinity who might know who the animal belongs to.
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="font-mono italic">Step 2</time>
                            <div className="text-xl font-black">Register the pet on PetReunite</div>
                            Take a photo of the found pet, upload it, and search the PetReunite Lost database. If there’s no match, create a free PetReunite Lost found pet flyer to share on social media and Nextdoor pages in your area.
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <time className="font-mono italic">Step 3</time>
                            <div className="text-xl font-black">Look for the identification</div>
                            If you can safely restrain the pet, check for an ID tag on their collar and look for contact information. You can also take them to a pet retailer, vet office, or animal shelter to scan for a microchip.
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="font-mono italic">Step 4</time>
                            <div className="text-xl font-black">Make a call</div>
                            Contact your local animal shelter, non-emergency police number or animal control office. If someone contacts you to claim their pet, be sure to confirm proof of ownership (i.e., veterinary records, pet’s photo on your phone, etc.).
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <time className="font-mono italic">Step 5</time>
                            <div className="text-xl font-black">Take care of pet</div>
                            Don't let them feel lonely. Spend more time with pet and have fun.
                        </div>
                    </li>
                </ul>
            </div>
            <div className='p-8'>
                <form action="" className=' p-4 border-2 border-solid rounded-md shadow-2xl shadow-cyan-500/50'>
                    <div className='grid grid-cols-3 gap-x-2 gap-y-4 m-3'>
                        <div className='col-span-2'>
                            <label className="form-control w-full max-w-2xl "></label>
                            <div className="label ">
                                <span className="label-text">What is your name?</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-2xl" />

                        </div>
                        <div>
                            <label className="form-control w-full max-w-xs"></label>
                            <div className="label">
                                <span className="label-text">Where did you found pet?</span>
                            </div>
                            <input type="text" placeholder="Location" className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className='col-span-1'>
                            <label className="form-control w-full max-w-xs"></label>
                            <div className="label">
                                <span className="label-text">Species</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className='col-span-2'>
                            <label className="form-control w-full max-w-2xl"> </label>
                            <div className="label">
                                <span className="label-text">Breed</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-2xl" />

                        </div>
                        <div>
                            <label className="form-control w-full max-w-xs"> </label>
                            <div className="label">
                                <span className="label-text">Color</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className='col-span-2'>
                            <label className="form-control w-full max-w-2xl"></label>
                            <div className="label">
                                <span className="label-text">Status</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-2xl" />

                        </div>
                        <div className='col-span-3 '>

                            <label className="form-control w-full max-w-2xl">
                                <div className="label">
                                    <span className="label-text">Dsecription</span>
                                </div>
                                <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
                            </label>
                        </div>
                        <div className='col-span-2'>
                            <label className="form-control w-full max-w-2xl"> </label>
                            <div className="label">
                                <span className="label-text">Image URL</span>
                            </div>
                            <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-2xl" />

                        </div>
                    </div>
                    <button type="submit" className="btn btn-outline btn-success m-4">Submit</button>
                </form>
                <div className='custom__img flex place-content-center items-center'>
                <div className=''>
                    <img src="https://cdn-icons-png.flaticon.com/256/12413/12413237.png" alt="cat__image" />
                </div>
                </div>
            </div>
        </div>
    )
}
