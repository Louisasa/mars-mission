import image1 from "../../assests/Mars1.jpg";
import image2 from "../../assests/Moons.jpg";
import image3 from "../../assests/Viking1.jpg";
import image4 from "../../assests/Perseverance_Landing.jpg";
import image6 from "../../assests/Mars_gravity.jpg";
import image7 from "../../assests/Atmosphere.jpg";
import image8 from "../../assests/Pathfinder.jpg";
import image9 from "../../assests/MOXIE.jpg";
import image10 from "../../assests/Curiosity.jpg";
import image11 from "../../assests/Ingenuity1.jpg";
import image12 from "../../assests/Comparing_the_atmospheres_of_Mars_and_Earth_pillars.jpg";

export interface Fact {
  title: string;
  image?: string;
  id: number;
  content: string;
  links?: string;
  category: string;
}

export const factList: Fact[] = [
  {
    title: "The red planet",
    image: image1,
    id: 1,
    content:
      "Mars is also called the red planet. It get its colour from the abundance of iron oxide — the same compound that gives blood and rust their red tones. As most planets it was named by the Romans (and the Greeks before them) after a God. Because its color was reminiscent of the colour of blodd it was named after the God of war.",
    links: "http://...",
    category: "environment",
  },

  {
    title: "Mars moons",
    image: image2,
    id: 2,
    content:
      "Mars has two small moons, Phobos and Deimos which were named after the two mythical horses that pulled the chariot of the Greek god of war. The moons were probably asteroids that remained in Mars' gravitational field. Due to their small mass there is no sufficient graviattional pull to make them speherical. ",
    links: "http://...",
    category: "environment",
  },
  {
    title: "Days and years",
    image: image1,
    id: 5,
    content:
      "A day in Mars, called a sol, is 24h 39 min. A year, defined as the time taken to orbit around the sun, is 687 earth days or 669 sols",
    links: "http://...",
    category: "environment",
  },
  {
    title: "Mars size and gravity",
    image: image6,
    id: 6,
    content:
      "Mars' radius is 3,390km radius; about half the size of Earth. Its mass is about 10 times less than earth giving it a gravity 3.78 m/s2, which is 38% of earth's gravity. A 60 kg person standing on Mars would feel as heavy as a 22.8 peron on earth.!",
    links: "http://",
    category: "environment",
  },
  {
    title: "Atmosphere",
    image: image7,
    id: 7,
    content:
      "Mars atmosphere is 100 times thinner than earth's. It is believed that Mars once had a  thicker but several factors contributed to its deterioration. The low gravity makesit easy for upper layers of the atmosphere to be boiled away into the vacuum of space.Add to that lack of magnetic field, which would have been lost when the planet cooled down about 4 billion years ago means powerful solar wind stripped particles away from its atmosphere.   ",
    category: "mission",
  },

  {
    title: "Other Mars missions",
    image: image8,
    id: 8,
    content:
      "Pathfinder was launched on December 1996. The mission carried a series of scientific instruments to analyze the Martian atmosphere, climate, and geology and the composition of its rocks and soil. The mission was planned to last from a week to a month, but the rover operated successfully for almost three months. Data from the pathfinder was used to designed subsequent missions.",
    category: "mission",
  },
  {
    title: "First mission to Mars",
    image: image3,
    id: 3,
    content:
      "The first successful mission to Mars was NASA's Viking 1 mission in 1976.",
    category: "mission",
  },
  {
    title: "Rover lands on mars",
    image: image4,
    id: 4,
    content:
      "Perseverance was launched on July 2020 and landed on Mars on February 2021. Like many previous Mars rovers ( Sojourner, Spirit, Opportunity and Curiosit) it was named by a school kid, following a ntional contest. The perseverance maximum speed is 0.1 miles per hour (an average person walks  at 3mph). Currently, february 2024, it has been operating for 2 years and 11 months),   ",
    category: "rover",
  },
  {
    title: "Rover made Oxygen",
    image: image9,
    id: 9,
    content:
      "A toaster-size experimental instrument aboard Perseverance called the Mars Oxygen In-Situ Resource Utilization Experiment (MOXIE) accomplished the task by converting carbon dioxide into oxygen. Oxygen is not only required for humans to breath but is also necessary for fuel to burn. A human expedition to mars will need around 30 tonns of oxygen to be able to make their way back.  ",
    category: "rover",
  },
  {
    title: "Curiosity",
    image: image10,
    id: 10,
    content: "Curiosity was lanched in November 2011 and it is still active.",
    category: "rover",
  },
  {
    title: "Ingenuity",
    image: image11,
    id: 11,
    content:
      "Perseverance carried the Ingenuity helicopter attached to the underside. It has demonstrated that flight is possible in the extremely thin atmosphere of Mars, and is the first aircraft to conduct a powered and controlled extra-terrestrial flight. Because radio signals take between five and 20 minutes to travel between Earth and Mars, depending on the planets' positions, it flew autonomously executing plans designed and sent to it.",
    category: "rover",
  },
  {
    title: "Atmosphere composition",
    image: image12,
    id: 12,
    content:
      "The Martian atmosphere is mostly carbon dioxide (CO2) . Today, Mars is a cold, inhospitable desert but features like dry riverbeds and minerals that only form with liquid water indicate that long ago it had a thick atmosphere that retained enough heat for liquid water.",
    category: "mission",
  },
];
