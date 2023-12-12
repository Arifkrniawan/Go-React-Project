import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={props.name}>
        {props.title}
      </label>
      <input
        id={props.name}
        type={props.type}
        className={props.className}
        name={props.name}
        ref={ref}
        placeholder={props.placeholder}
        onChange={props.onChange}
        autoComplete={props.autoComplete}
        value={props.value}
      ></input>
      <div className={props.errorDiv}>{props.errorMessage}</div>
    </div>
  );
});

export default Input;
