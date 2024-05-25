/* eslint-disable react/prop-types */
/**
 * @typedef {Object} LostPetModalProps
 * @property {string} description
 * @property {number} index
 * @param {LostPetModalProps} props
 */

import { useEffect, useState } from "react";
import instance from "../api/axios";

export default function LostPetModal({ description, index, reporter }) {

  const [reporterData, setReporterData] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const res = await instance.get(`/contactreporter/${reporter}`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
          includeCredentials: true
        });
        console.log(res.data);
        setReporterData(res.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [reporter]); // Add reporter to the dependency array

  return (
    <dialog id={"my_modal_"+index} className="modal">
      <div className="modal-box bg-blue-200">
        <h3 className="font-bold text-lg">Description!</h3>
        <p className="py-4">{description}</p>
        <h3 className="font-bold text-lg">Reporter Information</h3>
        <p className="p-1"><span className="font-semibold">Name: </span>{reporterData.name}</p>
        <p className="p-1"><span className="font-semibold">Phone: </span>{reporterData.phone}</p>
        <p className="p-1"><span className="font-semibold">Email: </span> {reporterData.email}</p>

        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn hover:bg-blue-500 hover:font-bold">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
