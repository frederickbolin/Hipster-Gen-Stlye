import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onchange={handleChange} {...otherProps} />
    {
      label ?
      (<label className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}
      >
      {/* Breakdown for this Scope: This <label> will always have the className{form-input-label}, but Ive also added the shrink property whenever the user has typed anything in, its mainly for certain broswer to auto-complete when user get t the portain of signin page. */}
        {label}

      </label>)
      : null
    }
  </div>
);

export default FormInput;