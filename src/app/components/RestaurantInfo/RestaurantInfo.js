import React, { Component } from "react";
import { SignUp_strings } from "../../utils/StringConstant";
import {
  outLetArray,
  countryList,
  heardSources,
} from "../../utils/utilConstant";
import Button from "../Button/Button";
import Dropdown from "../DropdownComponent/DropDown";
import Input from "../Input/Input";
import "./RestaurantInfo.scss";

class Restaurantinfo extends Component {
  onCheck = () => {
    console.log("Clicked");
  };
  render() {
    const {
      Restaurant_label,
      Restaurant_placeholder,
      OutLets_label,
      Country_label,
      Source_label,
    } = SignUp_strings;
    const { next } = this.props;
    return (
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <Input
            label={Restaurant_label}
            placeholder={Restaurant_placeholder}
            name="RestaurantName"
          />

          <Dropdown
            label={OutLets_label}
            name="outletNumbers"
            options={outLetArray}
            isArray={false}
          />
          <Dropdown
            label={Country_label}
            name="country"
            options={countryList}
            isArray={true}
          />
          <Dropdown
            label={Source_label}
            name="country"
            options={heardSources}
            isArray={true}
          />
          <div className="restaurant-buttons">
            <Button isBlur={true} children="Previous" />
            <Button onPress={() => next()} children="Continue" />
          </div>
        </div>

        <div className="col-md-3"></div>
      </div>
    );
  }
}

export default Restaurantinfo;
