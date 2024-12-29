// Base Class
class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  startRace() {
    return `${this.name} has started racing!`;
  }

  getRaceTime(distance) {
    const time = distance / this.speed;
    return time.toFixed(2); // Time rounded to 2 decimal places
  }
}

// Subclasses
class SportsCar extends Car {
  constructor(name, speed, turboBoost) {
    super(name, speed);
    this.turboBoost = turboBoost;
  }

  startRace() {
    return `${this.name} zooms off with an additional turbo boost of ${this.turboBoost} km/h!`;
  }
}

class Truck extends Car {
  constructor(name, speed, cargoWeight) {
    super(name, speed);
    this.cargoWeight = cargoWeight;
  }

  startRace() {
    return `${this.name} rumbles onto the track with a cargo weight of ${this.cargoWeight} kg!`;
  }
}

// Function to display results on the frontend
function displayRaceResults(cars, distance) {
  const resultsDiv = document.getElementById("race-results");
  resultsDiv.innerHTML = ""; // Clear previous results

  // Add a heading for the race
  const heading = document.createElement("h2");
  heading.textContent = `The race is ${distance} km long!`;
  resultsDiv.appendChild(heading);

  // Display each car's result
  cars.forEach((car) => {
    const raceResultDiv = document.createElement("div");
    raceResultDiv.classList.add("race-result");

    const startMessage = document.createElement("h3");
    startMessage.textContent = car.startRace();

    const raceTimeMessage = document.createElement("p");
    const raceTime = car.getRaceTime(distance);
    raceTimeMessage.textContent = `${car.name} will finish the race in approximately ${raceTime} hours.`;

    raceResultDiv.appendChild(startMessage);
    raceResultDiv.appendChild(raceTimeMessage);
    resultsDiv.appendChild(raceResultDiv);
  });
}

// Cars for the race
const car1 = new SportsCar("Ferrari", 200, 50);
const car2 = new Truck("Monster Truck", 120, 3000);
const car3 = new Car("Sedan", 150);
const cars = [car1, car2, car3];

// Handle form submission
const raceForm = document.getElementById("race-form");
raceForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from refreshing the page

  const distanceInput = document.getElementById("distance");
  const distance = parseFloat(distanceInput.value);

  if (!isNaN(distance) && distance > 0) {
    displayRaceResults(cars, distance);
  } else {
    alert("Please enter a valid distance.");
  }
});
