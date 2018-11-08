

//$(document).ready(function(){});


/*
// define a class
// https://pawelgrzybek.com/the-observer-pattern-in-javascript-explained/
class Channels {
    // each instance of the Observer class
    // starts with an empty array of things (observers)
    // that react to a state change
    constructor() {
      this.channels = [];
    }
  
    // add the ability to subscribe to a new object / DOM element
    // essentially, add something to the observers array
    subscribe(channel) {
      this.observers.push(channel);
    }
  
    // add the ability to unsubscribe from a particular object
    // essentially, remove something from the observers array
    unsubscribe(channel) {
      this.observers = this.channels.filter(subscriber => subscriber !== channel);
    }
  
    // update all subscribed objects / DOM elements
    // and pass some data to each of them
    notify(data) {
      this.observers.forEach(channel => channel(data));
    }
  }

  // some DOM references
const input = document.querySelector('.js-input');
const p1 = document.querySelector('.js-p1');
const p2 = document.querySelector('.js-p2');
const p3 = document.querySelector('.js-p3');

// some actions to add to the observers array
const updateP1 = text => p1.textContent = text;
const updateP2 = text => p2.textContent = text;
const updateP3 = text => p3.textContent = text;

// instantiate new Observer class
const ChannelsObserver = new Channels();

// subscribe to some observers
ChannelsObserver.subscribe(updateP1);
headingsObserver.subscribe(updateP2);
headingsObserver.subscribe(updateP3);

// notify all observers about new data on event
input.addEventListener('click', e => {
  headingsObserver.notify(e.target.value);
}); */