const Modal = ({id, name,desc,addr,posted_date}) => {
  return (
    <dialog id= {id} className="modal">
      <div className="modal-box">
        <div className="flex justify-between">
          <div>
          <h3 className="font-bold text-lg">{name}</h3>
        <h4>{addr}</h4>
          </div>
          <div>
            <h4>{posted_date}</h4>
          </div>
        </div>
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
