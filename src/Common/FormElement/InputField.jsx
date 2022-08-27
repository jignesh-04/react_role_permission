import React from "react";

const InputField = ({ type, placeholder, validation }) => {
  return (
    <div>
      <input
        className="form-control"
        placeholder={placeholder}
        type={type}
        {...validation}
      />
    </div>
  );
};

const Checkbox = ({ options, type, title, validation }) => {
    return (
    <div className="checkbox">
      <h6>{title}</h6>
      {options?.map((option, inx) => {
        return (
          <React.Fragment key={inx}>
            <input type={type} value={option.value} {...validation} />
            <label className="ckeckbox_value">{option.value}</label>
          </React.Fragment>
        );
      })}
    </div>
  );
};

const Radio = ({ options, type, title, validation }) => {
  return (
    <div className="radio">
      <h6>{title}</h6>
      {options.map((option, inx) => {
        return (
          <React.Fragment key={inx}>
            <input type={type} value={option.value} {...validation} />
            <label className="radio_value">{option.value}</label>
          </React.Fragment>
        );
      })}
    </div>
  );
};

const Dropdwon = ({ options, title, className, validation }) => {
  return (
    <div className={className}>
      <h6>{title}</h6>
      <select {...validation}>
        {options.map((option, inx) => (
          <option key={inx} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputField;
export { Checkbox, Radio, Dropdwon };
