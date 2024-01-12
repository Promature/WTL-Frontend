/* eslint-disable react/prop-types */
import Navbar from "./Navbar";
/**
 * @param {{children:React.ReactElement}} props 
 */
export default function Layout({children}) {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}
