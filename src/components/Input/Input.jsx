import React from "react";
import "./input.scss";

const Input = (props) => {
  const { className, label, input } = props;
  const { error, id } = input;
  return (
    <div className={className}>
      {label && (
        <label className="rp-label" htmlFor={id}>
          {label}
        </label>
      )}
      <input {...input} />
      {error && error.errorData && error.touchedData ? (
        <p className="form-error">{error.errorData}</p>
      ) : null}
    </div>
  );
};

export default Input;
