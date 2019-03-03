import React, { Component } from 'react'
// import Loader from '../Loader/Loader'
import './CardViewer.scss';

export default class CardViewer extends Component {
  get person() {
      window.scrollTo(0,0)
      const person = this.props.getPersonById(this.props.match.params.id) 
      return person
  }

  render() {        
    console.log(this.person)
    if(this.person) {
      return (
        <div className="CardViewer">
          <div className="CardViewer__title">
            <span>{this.person.name.first} {this.person.name.last}</span>
            <a href={`tel:${this.person.phone}`} className="CardViewer__title-number">{` ${this.person.phone}`}</a>
            <span>{`Age: ${this.person.age}`}</span>
          </div>
          <div className="CardViewer__about">
            <div className="CardViewer__point">About: </div>
            {this.person.about}
          </div>
          <div className="CardViewer__about">
            <div className="CardViewer__point">Address & Email: </div>
            {this.person.address} <br /><br />
            <a href={`mailto: ${this.person.email}`}>{ this.person.email }</a> 
          </div>
          <div className="CardViewer__about">
            <span className="CardViewer__point">Company: </span>
            <span className="CardViewer__highlight-point">{this.person.company}</span>
          </div>
          <div className="CardViewer__about">
            <div className="CardViewer__point">Balance: </div>
            {this.person.balance}
          </div>
          <div className="CardViewer__about">
            <div className="CardViewer__point">Personal information: </div>
            <ul className="CardViewer__personal-information-list">
              <li className="CardViewer__personal-information-item"><span className="CardViewer__personal-information-item-point">Eye Color:</span> {this.person.eyeColor}</li>
              <li className="CardViewer__personal-information-item"><span className="CardViewer__personal-information-item-point">Favorite Fruit:</span> {this.person.favoriteFruit}</li>
              <li className="CardViewer__personal-information-item"><span className="CardViewer__personal-information-item-point">Registered: </span>{this.person.registered}</li>
              <li className="CardViewer__personal-information-item"><span className="CardViewer__personal-information-item-point">Friends: </span>
                <ol className="CardViewer__personal-information-friends">
                {this.person.friends.map(friend => (
                  <li key={friend.id}>{ friend.name }</li>
                ))}
                </ol>
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}
