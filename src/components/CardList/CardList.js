import React from "react";
import PersonCard from "./PersonCard";
import { Link } from "react-router-dom";
import './CardList.scss'


export default function CardList(props) {  
  return (
    <div className="CardList">
      <ul className="CardList__list">
        {props.data.map(person => (
          <Link to={person['_id']} key={person.index}>
            <li className="CardList__item">
              <PersonCard personData={person} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
