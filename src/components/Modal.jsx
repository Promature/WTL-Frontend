const Modal = () => {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
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
