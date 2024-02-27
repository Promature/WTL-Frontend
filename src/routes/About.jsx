import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Kedar from "/Kedar.jpg";
import more from "/more.jpg";
import samarth from "/samarth.jpeg";
const About = () => {
  return (
    <div className="min-h-screen">

        {/* HERO SECTION */}
        <div className="hero h-screen sm:h-[100vh]" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/group-portrait-adorable-puppies_53876-64796.jpg?w=1380&t=st=1705854445~exp=1705855045~hmac=836252811fe62fb649883b408bd89d6e367439fd7ef0ae7a7be8bce24e40e2b2)' }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
            <div className="md:mx-96 p-10 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border">
                <h1 className="mb-5 text-4xl font-bold">Who is Pet-Reunite</h1>
                <hr className="mb-5" />
                <p className="mb-5">Pet-Reunite is people helping cats, dogs and wild animals go home and thrive – whether home is the family room or the forest. We do this by rehabilitating orphaned and injured wildlife, sheltering and adopting homeless cats and dogs, and educating the community to inspire compassionate action for animals.<br /><br />Since 2024, Pet-Reunite has united more than 130,000 cats and dogs with loving families, cared for more than 140,000 sick, injured and orphaned wild animals, and made the world a better place for countless others through outreach, education and advocacy.</p>
                <Link to={'/home'} className="btn glass text-lg">Learn More</Link>
            </div>
            </div>
        </div>
        
        {/* TEAM SECTION */}
        <div className="pt-16 mb-16">
            <div className="mb-16">
                <p className="text-4xl text-center font-semibold">Meet The Founders & Developers !</p>
                <hr className="w-2/5 mt-8 mx-auto border-2 border-gray-400"/>
            </div>

            <div className="grid md:grid-cols-3 gap-16 md:gap-0 justify-center">

                <div>
                    <div className="w-full avatar justify-center">
                        <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={more} />
                        </div>
                    </div>
                    <div className="">
                            <p className="text-2xl text-center font-semibold mt-6">Aditya More</p>
                            <p className="mt-4 text-center">Full Stack Developer</p>
                            <div className="flex gap-8 mt-6 justify-center">
                                <FaGithub className="text-4xl hover:cursor-pointer" onClick={() => window.open("https://github.com/AdityaMore7000", '_blank')}/>
                                <FaLinkedin className="text-4xl hover:cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/aditya-more-9a095422a/", '_blank')}/>
                                <CgProfile className="text-4xl hover:cursor-pointer" onClick={() => window.open("https://portfolio-adityamore7000.vercel.app/", '_blank')}/>
                            </div>
                    </div>
                </div>

                <div>
                    <div className="w-full avatar justify-center">
                        <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={samarth} />
                        </div>
                    </div>
                    <div className="">
                            <p className="text-2xl text-center font-semibold mt-6">Samarth Mali</p>
                            <p className="mt-4 text-center">Full Stack Developer</p>
                            <div className="flex gap-8 mt-6 justify-center">
                                <FaGithub className="text-4xl hover:cursor-pointer" onClick={() => window.open("https://github.com/samarthsm1100", '_blank')}/>
                                <FaLinkedin className="text-4xl hover:cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/samarth-mali-19ab15225/", '_blank')}/>
                                <CgProfile className="text-4xl hover:cursor-pointer" onClick={() => window.open("https://sm-portfolio-jet.vercel.app/", '_blank')}/>
                            </div>
                    </div>
                </div>

                <div>
                    <div className="w-full avatar justify-center">
                        <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={Kedar} />
                        </div>
                    </div>
                    <div className="">
                            <p className="text-2xl text-center font-semibold mt-6">Kedar Pawar</p>
                            <p className="mt-4 text-center">Frontend Developer</p>
                            <div className="flex gap-8 mt-6 justify-center">
                                <FaGithub className="text-4xl hover:cursor-pointer" onClick={() => window.open("https://github.com/Promature", '_blank')}/>
                                <FaLinkedin className="text-4xl hover:cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/kedar-pawar-02554122a/", '_blank')}/>
                                <CgProfile className="text-4xl hover:cursor-pointer" onClick={() => window.open("https://kedarpawar.vercel.app/", '_blank')}/>
                            </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default About;


{/* 

import { Link } from "react-router-dom"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import {CgProfile} from "react-icons/cg"

const About = () => {
  return (
    <div className="h-[100vh]">
        
        <div className="hero h-[100vh]" style={{backgroundImage: 'url(https://img.freepik.com/free-photo/group-portrait-adorable-puppies_53876-64796.jpg?w=1380&t=st=1705854445~exp=1705855045~hmac=836252811fe62fb649883b408bd89d6e367439fd7ef0ae7a7be8bce24e40e2b2)'}}>
            <div className="hero-overlay bg-opacity-40" ></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <div className="p-10 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border">
                        <h1 className="mb-5 text-4xl font-bold">Who is Pet-Reunite</h1>
                        <hr className="mb-5"/>
                        <p className="mb-5">Pet-Reunite is people helping cats, dogs and wild animals go home and thrive – whether home is the family room or the forest. We do this by rehabilitating orphaned and injured wildlife, sheltering and adopting homeless cats and dogs, and educating the community to inspire compassionate action for animals.<br /><br/>Since 2024, Pet-Reunite has united more than 130,000 cats and dogs with loving families, cared for more than 140,000 sick, injured and orphaned wild animals, and made the world a better place for countless others through outreach, education and advocacy.</p>
                        <Link to={'/'} className="btn glass text-lg">Learn More</Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="pt-16 h-[100vh]">
            <div className="mb-16">
                <p className="text-4xl text-center font-semibold">Meet The Founders & Developers !</p>
                <hr className="w-2/5 mt-8 mx-auto border-2 border-gray-400"/>
            </div>
            <div className="w-full justify-center avatar gap-40 ">  
                <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
                <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
                <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>  
            </div>
            <div className="w-full flex justify-center gap-[180px] mt-10">
                <div>
                    <p className="text-2xl text-center font-semibold">Aditya More</p>
                    <p className="mt-4 text-center">Full Stack Developer</p>
                    <div className="flex gap-8 mt-6">
                        <FaGithub className="text-4xl hover:cursor-pointer" onClick={() => window.open("https://github.com/AdityaMore7000", '_blank')}/>
                        <FaLinkedin className="text-4xl hover:cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/aditya-more-9a095422a/", '_blank')}/>
                        <CgProfile className="text-4xl hover:cursor-pointer" onClick={() => window.open("https://portfolio-adityamore7000.vercel.app/", '_blank')}/>
                    </div>
                </div>
                <div>
                    <p className="text-2xl text-center font-semibold">Samarth Mali</p>
                    <p className="mt-4 text-center">Full Stack Developer</p>
                    <div className="flex gap-8 mt-6">
                        <FaGithub className="text-4xl hover:cursor-pointer" onClick={() => window.open("https://github.com/samarthsm1100", '_blank')}/>
                        <FaLinkedin className="text-4xl hover:cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/samarth-mali-19ab15225/", '_blank')}/>
                        <CgProfile className="text-4xl hover:cursor-pointer" onClick={() => window.open("https://sm-portfolio-jet.vercel.app/", '_blank')}/>
                    </div>
                </div>
                <div>
                    <p className="text-2xl text-center font-semibold">Kedar Pawar</p>
                    <p className="mt-4 text-center">Frontend Developer</p>
                    <div className="flex gap-8 mt-6">
                        <FaGithub className="text-4xl hover:cursor-pointer" onClick={() => window.open("https://github.com/Promature", '_blank')}/>
                        <FaLinkedin className="text-4xl hover:cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/kedar-pawar-02554122a/", '_blank')}/>
                        <CgProfile className="text-4xl hover:cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/samarth-mali-19ab15225/", '_blank')}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

*/}