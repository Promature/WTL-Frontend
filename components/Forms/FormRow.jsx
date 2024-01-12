/* eslint-disable react/prop-types */
/**
 * @param {Object} props - Component props.
 * @param {string} props.label - The content of the label.
 * @param {string} props.type - The type of the input.
 * @param {string} props.name - The name and id of the input.
 *
 */
export default function FormRow({ label, type, name }) {
  return (
    <div>
        <label className="form-control max-w-xs block w-max mx-auto">
          <div className="label">
            <span className="label-text">{label}</span>
          </div>
          <input
            type={type}
            name={name}
            id={name}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
    </div>
  );
}
