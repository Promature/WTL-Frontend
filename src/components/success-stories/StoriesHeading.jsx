import './stories.css'
import petLogo from '/Adopt a pet-amico.svg'
export default function StoriesHeading() {
  return (
    <div className='story__header flex items-center'>
      <div className='p-14'>
        <div className='flex justify-center px-8'>
          <div className='flex items-center'>
            <div className=''>
              <h2 className="text-7xl font-black custom__hero-title ">Meet Our Success Stories</h2>
              <p className='text-2xl font-light py-4'>
                Spread the word! It’s the fastest way to ensure you bring a lost dog or pet back to their pack.
              </p>
            </div>
          </div>
          <div className='w-3/4 h-full'>
            <img className="h-4/5 w-11/12  rounded-md" src={petLogo} alt="petHeader__image" />
          </div>
        </div>
      </div>
    </div>
  )
}
// bg-gradient-to-r from-purple-500 to-pink-500 