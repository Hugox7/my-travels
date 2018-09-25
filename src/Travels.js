import React from "react";
import Travel from "./Travel";

const travels = [
  {
    destination:
      "London",
    photo: "http://image.noelshack.com/minis/2018/39/2/1537862884-london-small.png",
    country:
      "England",
    distance: "600km"
  },
  {
    destination:
      "New-York",
    photo: "https://image.noelshack.com/minis/2018/39/2/1537862896-newyork.png",
    country:
      "United-States",
    distance: "6000km"
  },
  {
    destination:
      "Berlin",
    photo: "http://image.noelshack.com/minis/2018/39/2/1537862905-berlin.png",
    country:
      "Germany",
    distance: "1000km"
  },
  {
    destination:
      "Madrid",
    photo: "https://image.noelshack.com/minis/2018/39/2/1537862893-madrid.png",
    country:
      "Spain",
    distance: "1500km"
  },
  {
    destination:
      "Los Angeles",
    photo: "http://image.noelshack.com/minis/2018/39/2/1537862889-losangeles.png",
    country:
      "United-States",
    distance: "9000km"
  }
];

const Travels = () => (
  <div>
    {travels.map(travel => (
  <Travel 
    destination={travel.destination}
    photo={travel.photo} 
    country={travel.country} 
    distance={travel.distance} 
  />
    ))}
  </div>
    
  
);

export default Travels;