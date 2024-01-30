/* eslint-disable react/prop-types */
/**
 * @typedef {Object} LostPetModalProps
 * @property {string} description
 * @property {number} index
 * @param {LostPetModalProps} props
 */

export default function LostPetModal({ description,index }) {
  return (
    <dialog id={"my_modal_"+index} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Description!</h3>
        <p className="py-4">{description}</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
