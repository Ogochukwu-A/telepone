// Task & Assignment
// For this exercise, our goal is to create a telephone package.
// The telephone class should expose 3 different methods.

// AddPhoneNumber - For adding a new phone number
// RemovePhoneNumber - For removing a phone number
// DialPhoneNumber - For dialling a phone number
// (only phone numbers that have been added can be dialled)
// The telephone class should also maintain a list of
// observers and notify them whenever a phone number is dialled.

// Requirements

// Create a telephone class. It should expose 3 public methods
// - AddPhoneNumber, RemovePhoneNumber, and DialPhoneNumber.

// Update the telephone class, so it uses the observer pattern
// (have methods to add, remove and notify observers)

// Create a class for the observer, it should have a method
// that can be called by the telephone class to notify it.

// Have the telephone class notify the observers any time a
// phone number is dialed.

// Add two observers to the telephone class

//  The first one should print the phone number
//   The second one should print `Now Dialling 2347023232`

// Observer Class
class Observer {
  update(number) {
    console.log(number);
  }
}

// Observer Class for printing "Now Dialling"
class DialObserver extends Observer {
  update(number) {
    console.log("Now Dialling " + number);
  }
}

// Telephone Class
class Telephone {
  constructor() {
    this.observers = [];
    this.numbers = [];
  }

  // Add a new phone number
  AddPhoneNumber(number) {
    this.numbers.push(number);
  }

  // Remove a phone number
  RemovePhoneNumber(number) {
    this.numbers = this.numbers.filter((n) => n !== number);
  }

  // Dial a phone number
  DialPhoneNumber(number) {
    if (this.numbers.includes(number)) {
      this.notifyObservers(number);
    }
  }

  // Add an observer
  addObserver(observer) {
    this.observers.push(observer);
  }

  // Remove an observer
  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // Notify observers
  notifyObservers(number) {
    this.observers.forEach((observer) => observer.update(number));
  }
}

// Create instances of the classes
const telephone = new Telephone();
const observer1 = new Observer();
const observer2 = new DialObserver();

// Add phone numbers
telephone.AddPhoneNumber("2348023232233");
telephone.AddPhoneNumber("2349023232233");

// Add observers
telephone.addObserver(observer1);
telephone.addObserver(observer2);

// Dial a phone number
telephone.DialPhoneNumber("2348023232233");
