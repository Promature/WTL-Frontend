const ReportCard = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl m-10">
    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title font-bold">Species -<span className="text-blue-800">Breed</span></h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
            <button className="btn btn-primary font-bold text-white text-lg">Claimed</button>
        </div>
    </div>
    </div>
  )
}
export default ReportCard