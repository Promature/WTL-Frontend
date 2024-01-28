const Modal = ({id, name,desc}) => {
  return (
    <dialog id= {`${id}`} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="py-4">{desc}</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn hover:text-red-700 hover:bg-red-200 hover:font-bold">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};
export default Modal;
