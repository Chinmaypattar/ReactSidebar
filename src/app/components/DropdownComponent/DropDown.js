import React, { Component } from "react";
import "./Dropdown.scss";
class Dropdown extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, options, handleDropdown, name, isArray } = this.props;
    return (
      <div className="form-group">
        <label className="dropDownLabel M-b ">{label}</label>
        <div className="input-group ">
          <select
            name={name}
            onChange={(e) => handleDropdown(e)}
            className="form-control"
          >
            <option value="">Select</option>
            {isArray && isArray ? (
              <>
                {options.map((data) => {
                  return <option value={data}>{data}</option>;
                })}
              </>
            ) : (
              <>
                {options &&
                  options.map((data) => {
                    return <option value={data.value}>{data.title}</option>;
                  })}
              </>
            )}
          </select>
        </div>
      </div>
    );
  }
}

export default Dropdown;
