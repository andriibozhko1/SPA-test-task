import React, { Component } from "react";

export default class PersonCard extends Component {
  render() {
    const person = this.props.personData;

    return (
      <div className="PersonCard">
        <div className="PersonCard__title">
          <span>{`${person.name.first} ${person.name.last}`}</span>
          <span>{`Age : ${person.age}`}</span>
        </div>
        <div className="PersonCard__body">
          <ul className="PersonCard__body-list">
            <li className="PersonCard__body-item">
              Company:{" "}
              <span className="PersonCard__body-item-info">
                {person.company}
              </span>{" "}
            </li>
            <li className="PersonCard__body-item">
              Email:
              <span>
                <span className="PersonCard__body-item-info">
                  {person.email}
                </span>{" "}
              </span>
            </li>
            <li className="PersonCard__body-item">
              Phone:{" "}
              <span className="PersonCard__body-item-info">{person.phone}</span>{" "}
            </li>
          </ul>
        </div>
        <div className="PersonCard__footer">
          <span>View More </span>
        </div>
      </div>
    );
  }
}
