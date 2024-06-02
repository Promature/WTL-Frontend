import ReportCard from "../components/ReportCard"
import { useEffect, useState } from "react"
import instance from "../api/axios"

const UserProfile = () => {
  
  const [myReports, setMyReports] = useState([])

  const fetchReports = async () => {
    try {
      const res = await instance.get("/reportedPets",{
        withCredentials: true,
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        credentials: 'include'
      });
      console.log(res.data.data);
      setMyReports(res.data.data);
    } catch (error) {
      console.error("Error fetching reports:", error);
    }
  }

  useEffect(() => {
    fetchReports();
  }, []); 
  
  
  
  return (
    <div className="" >

        <div className="text-5xl text-center font-semibold text-blue-700 m-5 ">
            Your Reports 
        </div>

        <div className="md:grid md:grid-cols-3 gap-4">
        {myReports && myReports.map((report, idx) => {
          return (
            <ReportCard key={idx} species={report.species} breed={report.breed} address={report.address} _id={report._id} status={report.status} image_url={report.image_url} />
          )
        })}
      
        </div>  
    </div>
  )
}

export default UserProfile;