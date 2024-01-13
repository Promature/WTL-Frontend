import React from 'react'
import Card from '../components/Card';
import StoriesHeading from '../components/StoriesHeading';
export default function SuccessStory() {
  return (
    <>
      <StoriesHeading />
      <div className='bg-white pt-8 pb-8'>
        <div className='text-center text-5xl font-semibold pb-8'> 
          <h3>Our Featured Stories</h3>
        </div>
        <div className="grid grid-cols-3 gap-8 ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  )
}
