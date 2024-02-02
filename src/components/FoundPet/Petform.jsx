import './foundpet.css';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from "yup";

export default function Petform() {

    // const MAX_FILE_SIZE = 102400; //100KB

    // const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };

    // function isValidFileType(fileName, fileType) {
    // return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
    // }
    const [postImg,setPostImg] = useState('');
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file)
          fileReader.onload = () => {
            resolve(fileReader.result);
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
        })
      }
    const handleFileRead =async(e) =>{
        console.log(e.target.files);
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setPostImg(base64);
    }

    const onSubmit = (values, actions) => {
        values.image = postImg;
        console.log(values);
        // console.log(postImg);
    }

    const schema = yup.object().shape({
        species:yup.string().required("Required"),
        breed:yup.string().required("Required"),
        color:yup.string().required("Required"),
        addr:yup.string().required("Required"),
        desc:yup.string().required("Required"),
        image: yup
            .string()
            // .required("Required")
            // .test("is-valid-type", "Not a valid image type",
            //     value => isValidFileType(value && value.name.toLowerCase(), "image"))
            // .test("is-valid-size", "Max allowed size is 100KB",
            //     value => value && value.size <= MAX_FILE_SIZE)
    })
    const formik = useFormik({
        initialValues:{
            species:"",
            breed:"",
            color:"",
            addr:"",
            image:postImg,
            desc:""
        },
        validationSchema:schema,
        onSubmit,
    });

    return (
        <div className="md:grid grid-cols-2 bg-white">
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
                            Don&apos;t let them feel lonely. Spend more time with pet and have fun.
                        </div>
                    </li>
                </ul>
            </div>
            <div className='p-8'>
                <form onSubmit={formik.handleSubmit} action="" className=' p-4 border-2 border-solid rounded-md shadow-2xl shadow-cyan-500/50' autoComplete='off'>
                    <div className='grid grid-cols-3 gap-x-2 gap-y-4 m-3'>
                        
                        <div className='col-span-1'>
                            <label className="form-control w-full max-w-xs"></label>
                            <div className="label">
                                <span className="label-text">Species</span>
                            </div>
                            <input 
                            type="text" 
                            placeholder="e.g, Dog" 
                            id ="species"
                            value={formik.values.species}
                            onChange={formik.handleChange}
                            className={formik.errors.species && formik.touched.species ? 
                            "input input-bordered w-full max-w-xs border-2 border-rose-500/75"
                            :"input input-bordered w-full max-w-xs"} />
                            {formik.errors.species && formik.touched.species ? <p className='text-sm font-medium text-rose-500'>Required</p>
                            :null}
                        </div>
                        <div className='col-span-2'>
                            <label className="form-control w-full max-w-2xl"> </label>
                            <div className="label">
                                <span className="label-text">Breed</span>
                            </div>
                            <input 
                            type="text" 
                            placeholder="e.g, Pitbull"
                            id ="breed" 
                            value={formik.values.breed}
                            onChange={formik.handleChange}
                            className={formik.errors.breed && formik.touched.breed 
                            ?"input input-bordered w-full max-w-2xl border-2 border-rose-500/75":
                            "input input-bordered w-full max-w-2xl"} />
                            {formik.errors.breed && formik.touched.breed ? <p className='text-sm font-medium text-rose-500'>Required</p>
                            :null}
                        </div>
                        <div className='col-span-2'>
                            <label className="form-control w-full max-w-2xl"></label>
                            <div className="label">
                                <span className="label-text">Where did you found pet?</span>
                            </div>
                            <input type="text" 
                            placeholder="e.g, Chennai,TN"
                            id ="addr" 
                            value={formik.values.addr}
                            onChange={formik.handleChange}
                            className={formik.errors.addr && formik.touched.addr
                                ?"input input-bordered w-full max-w-2xl border-2 border-rose-500/75":
                                "input input-bordered w-full max-w-2xl"} />
                            {formik.errors.addr && formik.touched.addr ? <p className='text-sm font-medium text-rose-500'>Required</p>
                            :null}
                        </div>
                        
                        <div className='col-span-1'>
                            <label className="form-control w-full max-w-xs"> </label>
                            <div className="label">
                                <span className="label-text">Color</span>
                            </div>
                            <input type="text" 
                            placeholder="e.g, brown with black spots"
                            id ="color"
                            value={formik.values.color}
                            onChange={formik.handleChange} 
                            className={formik.errors.color && formik.touched.color 
                                ?"input input-bordered w-full max-w-2xs border-2 border-rose-500/75":
                                "input input-bordered w-full max-w-2xs"} />
                                {formik.errors.color && formik.touched.color ? <p className='text-sm font-medium text-rose-500'>Required</p>
                            :null}
                        </div>
                        <div className='col-span-3 '>

                            <label className="form-control w-full max-w-2xl">
                                <div className="label">
                                    <span className="label-text">Dsecription</span>
                                </div>
                                <textarea 
                                value={formik.values.desc}
                                onChange={formik.handleChange}
                                id ="desc"
                                className={formik.errors.desc && formik.touched.desc ?
                                    "textarea textarea-bordered textarea-xl w-full border-2 border-rose-500/75" :
                                    "textarea textarea-bordered textarea-xl w-full" }
                                placeholder="Add details about pet">
                                </textarea>
                            </label>
                            {formik.errors.desc && formik.touched.desc ? <p className='text-sm font-medium text-rose-500'>Required</p>
                            :null}
                        </div>
                        <div className='col-span-2'>
                            <label className="form-control w-full max-w-2xl"> </label>
                            <div className="label">
                                <span className="label-text">Image URL</span>
                            </div>
                            <input type="file"
                            id ="image"
                            value={formik.values.image}
                            onChange={e => handleFileRead(e)}
                            className="file-input file-input-bordered file-input-primary w-full max-w-2xl" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-outline btn-success m-4">Submit</button>
                </form>
                <div className='mt-4 custom__img flex place-content-center items-center'>
                <div className=''>
                    <img src="https://cdn-icons-png.flaticon.com/256/12413/12413237.png" alt="cat__image" />
                </div>
                </div>
            </div>
        </div>
    )
}
