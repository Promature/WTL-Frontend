
export default function RecentPets() {
    return (
        <div className="card w-96 bg-base-100 shadow-xl  m-4 p-4 shadow-xl hover:bg-base-200 transition-all duration-200 hover:-translate-y-1">
            <figure><img src="https://img.freepik.com/free-photo/cute-puppy-portrait-close-up-purebred-canine-generative-ai_188544-7975.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706313600&semt=ais" alt="Pets" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}
