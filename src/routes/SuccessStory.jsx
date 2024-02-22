import { useEffect, useState } from 'react'
import Card from '../components/success-stories/Card';
import StoriesHeading from '../components/success-stories/StoriesHeading';
import axios from "axios"

export default function SuccessStory() {
  const [story,setStories] =useState();

  const getStories = async () => {
    try {
      const {data} = await axios.get('http://localhost:3001/stories');
      console.log(data);
      setStories(data);
      console.log(story);
    } 
    catch (error) {
      console.error("Error fetching stories:", error);
    }
  }

  useEffect(() => {
    getStories();
    window.scrollTo(0, 0);
    console.log(story);
  }, []);

  return (
      <>
        <StoriesHeading />
        <div className='w-full overflow-hidden bg-white pt-8 pb-8'>
          <div className='text-center text-4xl md:text-5xl font-semibold pb-8'>
            <h3 style={{fontFamily:'Concert One', fontWeight:'normal'}}>Our Featured Stories</h3>
          </div>
          <div className="flex flex-col-reverse place-items-center justify-evenly md:grid md:grid-cols-3">
            {story && 
              story.map((story, ind) => (
                <Card key={ind} id={`modal_${ind}`} name={story.name} addr={story.addr} posted_date={story.posted_date}
                  desc={story.desc} />
              ))
            }
          </div>
        </div>
      </>
  )
}
