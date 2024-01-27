/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Navbar from "./Navbar";
/**
 * @param {{children:React.ReactElement}} props 
 */
export default function Layout({children}) {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}
