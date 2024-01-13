import Card from '../components/Card';
import StoriesHeading from '../components/StoriesHeading';
export default function SuccessStory() {
  return (
    <>
      <StoriesHeading />
      <div className='w-screen bg-white pt-8 pb-8'>
        <div className='text-center text-4xl md:text-5xl font-semibold pb-8'> 
          <h3>Our Featured Stories</h3>
        </div>
        <div className="flex flex-col-reverse gap-8 place-items-center md:grid md:grid-cols-3">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  )
}
