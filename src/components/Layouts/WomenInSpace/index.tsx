import React, { useState } from "react";
import "./styles.scss";
import Card from "../../Card";
import Button from "../../Button/Button";

export interface WomenInSpaceProps {
  name: string;
  img_url: string;
  description: string;
  further_details_url: string;
}

const WomenInSpace: React.FC = () => {
  const womenInSpace = [
    {
      name: "Annie Easley",
      img_url:
        "https://www.nasa.gov/wp-content/uploads/2023/01/GRC-1981-C-03697.jpg?resize=1536,1420",
      description:
        "Excerpt of the edited oral history transcript of a human computer and computer programmer at NASA’s Glenn Research Center.",
      further_details_url:
        "https://www.nasa.gov/history/history-publications-and-resources/oral-histories/annie-easley-oral-history/",
    },
    {
      name: "Katherine Johnson",
      img_url:
        "https://www.nasa.gov/wp-content/uploads/2016/04/lrc-1962-l-09381-katherine-johnson.jpg?resize=1536,1244",
      description:
        "Katherine Johnson was a pioneer for women everywhere. Learn more about her journey to NASA and her contributions to the agency.",
      further_details_url: "https://www.nasa.gov/katherine-johnson/",
    },
    {
      name: "Former Astronaut Sally Ride",
      img_url:
        "https://www.nasa.gov/wp-content/uploads/2021/06/s83-35763_orig-1.jpg?resize=1536,997",
      description:
        "Dr. Ride was selected as an astronaut candidate by NASA in January 1978. Sally Ride was the first American woman to fly in space.",
      further_details_url: "https://www.nasa.gov/former-astronaut-sally-ride/",
    },
    {
      name: "Former Astronaut Mae Jemison",
      img_url:
        "https://images-assets.nasa.gov/image/STS047-37-003/STS047-37-003~large.jpg?w=1920&h=1265&fit=crop&crop=faces%2Cfocalpoint",
      description:
        "Dr. Jemison applied and was selected by NASA as an astronaut candidate in 1987 and became the first African American woman in space.",
      further_details_url:
        "https://www.nasa.gov/former-astronaut-mae-c-jemison/",
    },
    {
      name: "Former Astronaut Shannon Lucid",
      img_url:
        "https://images-assets.nasa.gov/image/0601194/0601194~large.jpg?w=1512&h=1920&fit=crop&crop=faces%2Cfocalpoint",
      description:
        "Dr. Lucid became an astronaut in August 1979 and qualified for assignment as a mission specialist on the Space Shuttle. Dr. Lucid currently holds the U.S. single-mission spaceflight endurance record on the Russian Space Station Mir.",
      further_details_url:
        "https://www.nasa.gov/wp-content/uploads/2019/03/lucid_shannon_0.pdf?emrc=e11d80",
    },
    {
      name: "Former Astronaut Eileen Collins",
      img_url:
        "https://images-assets.nasa.gov/image/05pd1718/05pd1718~large.jpg?w=1276&h=1920&fit=crop&crop=faces%2Cfocalpoint",
      description:
        "Eileen Collins was selected as a NASA astronaut in 1990. Collins has the distinction of being the first female pilot and the first female commander in shuttle history.",
      further_details_url:
        "https://www.nasa.gov/former-astronaut-eileen-collins/",
    },
  ];

  const [cardsToShow, setCardsToShow] = useState(0);

  function handleNext() {
    setCardsToShow(cardsToShow + 3);
    window.scrollTo(0, 0);
  }

  return (
    <div className="woman-in-space">
      <h1 className="title"> Women In Space </h1>
      <div className="women-space-page layout">
        <Card card={womenInSpace[cardsToShow]} />
        <Card card={womenInSpace[cardsToShow + 1]} />
        <Card card={womenInSpace[cardsToShow + 2]} />
      </div>
      <Button
        disabled={cardsToShow === 3}
        onClick={handleNext}
        name="Show next"
      />
    </div>
  );
};

export default WomenInSpace;
