import ReportCard from "../components/ReportCard"

const UserProfile = () => {
  return (
    <div className="" >

        <div className="text-5xl text-center font-semibold text-blue-700 m-5 ">
            Your Reports 
        </div>

        <div className="grid grid-cols-3 gap-4">

            <ReportCard />
            <ReportCard />
            <ReportCard />
            <ReportCard />

        </div>  
    </div>
  )
}
export default UserProfile