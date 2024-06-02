import PropTypes from 'prop-types';
import instance from '../api/axios';

const handleOwner = async ({id}) => {
  try {
    const res = await instance.put(`https://wtl-backend.onrender.com/claimedPet/${id}`, {}, {withCredentials: true, credentials: 'include'});
    // console.log(res)
    if(res){
      window.location.reload()
    }
  } 
  catch (error) {
    console.log(error)
  }
}

const ReportCard = ({species, breed, address, _id, status, image_url}) => {


  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl m-10 ml-[20px] md:ml-10">
    <figure><img src={image_url} alt="pet-img" /></figure>
    <div className="card-body">
        <h2 className="text-lg font-bold">Species - <span className='text-blue-700'>{species}</span> | Breed - <span className='text-blue-700'>{breed}</span></h2>
        <p className='font-semibold text-md'>Address : {address}</p>
        <div className="card-actions justify-end">
            <button className="btn btn-primary font-bold text-white text-lg" onClick={() => handleOwner({id:_id})}>{status == 'active' ? 'Owner Found' : 'Returned !'}</button>
        </div>
    </div>
    </div>
  )
}

ReportCard.propTypes = {
  species: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired
};

export default ReportCard