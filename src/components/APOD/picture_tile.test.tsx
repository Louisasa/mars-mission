import { render, screen } from "@testing-library/react";
import { PictureTile } from "./picture_tile";
import userEvent from "@testing-library/user-event";

const requiredProps = {
  info: "Did you see the full moon last month? During every month, on average, a full moon occurs in the skies over planet Earth. This is because the Moon takes a month to complete another orbit around our home planet, goes through all of its phases, and once again has its entire Earth-facing half lit by reflected sunlight.  Many indigenous cultures give each full moon a name, and this past full moon's names include the Ice Moon, the Stay at Home Moon, and the Quiet Moon. Occurring in January on the modern western calendar, several cultures have also named the most recent full moon the Wolf Moon, in honor of the famous howling animal. Featured here above the Italian Alps mountains, this past Wolf Moon was captured in combined long and short exposure images.  The image is striking because, to some, the surrounding clouds appear as a wolf's mouth ready to swallow the Wolf Moon, while others see the Moon as a wolf's eye.",
  title: "A January Wolf Moon",
  imgaeUrl: "https://apod.nasa.gov/apod/image/2402/WolfMoon_Zegarski_960.jpg",
};

describe("<PictureTile> Checking for heading", () => {
  it("Picture of the Day title is present or not", () => {
    render(<PictureTile />);
    const textElement = screen.getByText(/Picture of the Day/i);
    expect(textElement).toBeInTheDocument();
  });
});

describe("<PictureTile> Checking for image", () => {
  it("Image should be present when required props are given", () => {
    render(<PictureTile {...requiredProps} />);
    const imageElement = screen.getByAltText(/A January Wolf Moon/i);
    expect(imageElement).toBeInTheDocument();
  });
});

describe("<PictureTile> Checking for explaination on Hover", () => {
  it("On hover title of the picture should be displayed", () => {
    render(<PictureTile {...requiredProps} />);
    const imageElement = screen.getByAltText(/A January Wolf Moon/i);
    userEvent.hover(imageElement);
    const title = screen.getByText(requiredProps.title);
    expect(title).toBeInTheDocument();
  });
  it("On hover info of the picture should be displayed", () => {
    render(<PictureTile {...requiredProps} />);
    const imageElement = screen.getByAltText(/A January Wolf Moon/i);
    userEvent.hover(imageElement);
    const explaination = screen.getByTestId("info");
    expect(explaination).toBeInTheDocument();
  });
});
