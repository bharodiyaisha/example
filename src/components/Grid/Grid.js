import React from "react";

import { Button } from "react-bootstrap";

import "./grid.scss";

const Grid = () => {
  return (
    <>
      <div className="container">
        <div className="title">Registration form</div>
        <form>
          <div className="user-detail">
            <div className="input-box">
              <label className="details">First Name:</label>
              <input type="text" placeholder="Enter first name" required />
            </div>
            <div className="input-box">
              <label className="details">Middle Name:</label>
              <input type="text" placeholder="Enter middle name" required />
            </div>
            <div className="input-box">
              <label className="details">Last Name:</label>
              <input type="text" placeholder="Enter last name" required />
            </div>
            <div className="input-email">
              <label className="details">Email Id:</label>
              <input type="text" placeholder="Enter email id " required />
            </div>
            <div className="input-password">
              <label className="details">Password:</label>
              <input type="password" placeholder="Enter password " required />
            </div>
            <div className="input-password">
              <label className="details"> Confirm Password:</label>
              <input
                type="password"
                placeholder="Enter Confirm password"
                required
              />
            </div>
            <div className="gender-details">
              <label className="gender-title">Gender:</label>
              <input className="check-space" type="radio" name="gender" />
              Male
              <input className="check-space" type="radio" name="gender" />
              Female
            </div>
          </div>
          <div>
            <Button type="button">Register</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Grid;
