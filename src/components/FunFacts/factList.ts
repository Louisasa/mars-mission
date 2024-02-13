import image1 from "../../assests/SolarSystem.jpg";

interface Fact {
  title: string;
  image?: string;
  id: number;
  content: string;
  category: string;
  links?: string;
}

export const factList: Fact[] = [
  {
    title: "Moons",
    image: "http://something.com ",
    id: 1,
    content: "Mars has two moons ",
    category: "rover",
    links: "http://...",
  },
  {
    title: "Days and years",
    image: image1,
    id: 5,
    content:
      "A day in Mars, called a sol, is 24h 39 min. A year, defined as the time taken to orbit around the sun, is 687 earth days or 669 sols",
    category: "rover",
    links: "http://...",
  },
  {
    title: "Mars size and gravity",
    image: "http://something.com ",
    id: 6,
    content:
      "Mars' radious is 3,390km radius; about half the size of Earth. Its mass is about 10 times less than earth giving it a gravity 3.78 m/s2, which is 38% of earth's gravity. A 60 kg person standing on Mars would feel as heavy as a 22.8 peron on earth.!",
    category: "environment",
    links: "http://",
  },
  {
    title: "atmosphere",
    image: "http://something.com ",
    id: 7,
    content: "Mars atmosphere is 100 times thinner than earth's",
    category: "environment",
  },
  {
    title: "First mission to Mars",
    image: "http://something.com ",
    id: 3,
    content: "",
    category: "missions",
  },
  {
    title: "Rover lands on mars",
    image: "http://something.com ",
    id: 4,
    content: "Mars has two moons ",
    category: "rover",
  },
  {
    title: "Rover made water",
    image: "http://something.com ",
    id: 8,
    content: "Mars has two moons ",
    category: "rover",
  },
];
