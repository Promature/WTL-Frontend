import React from 'react'
import Card from '../components/success-stories/Card';
import StoriesHeading from '../components/success-stories/StoriesHeading';

const stories = [
  {
    name: "Sullie",
    addr: "Vegas, LA",
    posted_date: "2 days aggo",
    desc: "If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, consectetur! Aliquid eos, voluptates nihil iste iusto tempora doloribus odio eaque reiciendis! Et quia hic ducimus culpa illo natus nihil sint?",
    image:"na",
    owner:"Harry"
  },
  {
    name: "Arther",
    addr: "Vegas, LA",
    posted_date: "2 days aggo",
    desc: "If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, consectetur! Aliquid eos, voluptates nihil iste iusto tempora doloribus odio eaque reiciendis! Et quia hic ducimus culpa illo natus nihil sint?",
    image:"na",
    owner:"Harry"
  },
  {
    name: "Jack",
    addr: "Vegas, LA",
    posted_date: "2 days aggo",
    desc: "If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, consectetur! Aliquid eos, voluptates nihil iste iusto tempora doloribus odio eaque reiciendis! Et quia hic ducimus culpa illo natus nihil sint?",
    image:"na",
    owner:"Harry"
  },
]


export default function SuccessStory() {

  return (
    <>
      <>
        <StoriesHeading />
        <div className='w-full overflow-hidden bg-white pt-8 pb-8'>
          <div className='text-center text-4xl md:text-5xl font-semibold pb-8'>
            <h3>Our Featured Stories</h3>
          </div>
          <div className="flex flex-col-reverse place-items-center justify-evenly md:grid md:grid-cols-3">
            {
              stories.map((story, ind) => (
                <Card key={ind} name={story.name} addr={story.addr} posted_date={story.posted_date}
                  desc={story.desc} />
              ))
            }
          </div>
        </div>
      </>
    </>
  )
}
