import { render } from "@testing-library/react";
//import fetch from "node-fetch";
import { APOD } from "./apod";

const mockResponse = {
  copyright: "\nAntoni Zegarski\n",
  date: "2024-02-13",
  explanation:
    "Did you see the full moon last month? During every month, on average, a full moon occurs in the skies over planet Earth. This is because the Moon takes a month to complete another orbit around our home planet, goes through all of its phases, and once again has its entire Earth-facing half lit by reflected sunlight.  Many indigenous cultures give each full moon a name, and this past full moon's names include the Ice Moon, the Stay at Home Moon, and the Quiet Moon. Occurring in January on the modern western calendar, several cultures have also named the most recent full moon the Wolf Moon, in honor of the famous howling animal. Featured here above the Italian Alps mountains, this past Wolf Moon was captured in combined long and short exposure images.  The image is striking because, to some, the surrounding clouds appear as a wolf's mouth ready to swallow the Wolf Moon, while others see the Moon as a wolf's eye.",
  hdurl: "https://apod.nasa.gov/apod/image/2402/WolfMoon_Zegarski_3648.jpg",
  media_type: "image",
  service_version: "v1",
  title: "A January Wolf Moon",
  url: "https://apod.nasa.gov/apod/image/2402/WolfMoon_Zegarski_960.jpg",
};

// jest.spyOn(global, "fetch").mockImplementation(
//   jest.fn(
//     () => Promise.resolve({ json: () => Promise.resolve(mockResponse),
//   }),
// ) as jest.Mock )
// This is the section where we mock `fetch`
const unmockedFetch = global.fetch;

beforeAll(() => {
  const mockFetchPromise = Promise.resolve({
    json: () => Promise.resolve(mockResponse),
  });
  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

describe("<PictureTile> Checking for heading", () => {
  it("Picture of the Day title is present or not", () => {
    render(<APOD />);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
