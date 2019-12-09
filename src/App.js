import React, {Component} from 'react';
import Card from './Card/card';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="products">
        <Card
          name = 'Titanic'
          desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, esse voluptate, iste accusamus sit dolor at aspernatur consequatur ipsum doloremque non. Odit ut veniam ipsum accusantium optio neque tempora itaque.'
          img = 'img/titanic.jpg'
          price = '40'
        />
        <Card
          name = 'Minions'
          desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, esse voluptate, iste accusamus sit dolor at aspernatur consequatur ipsum doloremque non. Odit ut veniam ipsum accusantium optio neque tempora itaque.'
          img = 'img/minions.jpg'
          price = '40'
        />
        <Card
          name = 'Batman'
          desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, esse voluptate, iste accusamus sit dolor at aspernatur consequatur ipsum doloremque non. Odit ut veniam ipsum accusantium optio neque tempora itaque.'
          img = 'img/batman.jpg'
          price = '40'
        />
        <Card
          name = 'I, Robot'
          desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, esse voluptate, iste accusamus sit dolor at aspernatur consequatur ipsum doloremque non. Odit ut veniam ipsum accusantium optio neque tempora itaque.'
          img = 'img/irobot.jpg'
          price = '40'
        />
      </div>
    )
  }
}

export default App;
