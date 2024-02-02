import './foundpet.css';
import petLogo from '/Adopt a pet-amico.svg'
export default function FoundPetHeader() {
    return (
        <div className='bg-gray-50 custom__hero'>
            <div className=' text-center py-16 custom__hero-title'>
                <h1 className='text-7xl font-bold py-4'>I found a pet</h1>
                <p className='text-4xl py-4'>Help us find home</p>
                <p className='text-4xl pt-2 pb-6'>Report a found pet. We can help!
                </p>
            </div>
            <div className='p-14'>
                <div className='text-center flex md:flex justify-center align-center px-8'>
                    <div className='md:w-3/4 h-64'>
                        {/* <img className="h-64 w-11/12  rounded-md" src={petLogo} alt="petHeader__image" /> */}
                    </div>
                    <div className='flex items-center'>
                        <div className=''>
                        <h2 className="text-4xl font-black custom__hero-subtitle ">You have found someone&apos;s pet how can you help get them home quickly?</h2>
                        <p className='text-xl font-semibold py-4'>
                        Spread the word! It&apos;s the fastest way to ensure you bring a lost dog or pet back to their pack.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
