import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

export default function RecentPets({ pet }) {
    const navigate = useNavigate();
    return (
        <div className="card w-96 bg-base-100 shadow-xl  m-4 p-4 shadow-xl hover:bg-base-200 transition-all duration-200 hover:-translate-y-1">
            <figure>
                <img
                    src={pet.image_url}
                    alt="Pets"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {pet.species} | {pet.breed}
                </h2>
                <p>{pet.description.substring(0, 150)}...</p>
                <div className="card-actions justify-end">
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            navigate("/lost-pets");
                        }}
                    >
                        Visit
                    </button>
                </div>
            </div>
        </div>
    );
}

RecentPets.propTypes = {
    pet: PropTypes.shape({
        species: PropTypes.string.isRequired,
        breed: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
    }).isRequired,
};
