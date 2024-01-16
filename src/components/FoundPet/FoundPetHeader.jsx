import React from 'react'
import './foundpet.css';
export default function FoundPetHeader() {
    return (
        <div className='bg-sky-50'>
            <div className=' text-center py-16'>
                <h1 className='text-6xl font-bold py-4'>I found a pet</h1>
                <p className='text-3xl py-4'>Help us find home</p>
                <p className='text-4xl pt-2 pb-6'>Report a found pet. We can help!
                </p>
            </div>
            <div className='p-14'>
                <div className='flex justify-center align-center px-8'>
                    <div className='w-3/4'>
                        <img className="h-64 w-11/12 border rounded-md" src="https://images.unsplash.com/photo-1507682520764-93440a60e9b5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBldCUyMG93bmVyfGVufDB8fDB8fHww" alt="petHeader__image" />
                    </div>
                    <div className=''>
                        <h2 className="text-4xl font-black">You have found someone's pet how can you help get them home quickly?</h2>
                        <p>
                        Spread the word! It’s the fastest way to ensure you bring a lost dog or pet back to their pack.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
