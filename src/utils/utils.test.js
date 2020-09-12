import fetchData from "./index";

jest.mock("axios");

describe("fetchData", () => {
  it(" fetches data successfully from an API", async () => {
    const data = {
      data: {
        hits: [
          {
            objectID: "1",
            title: "a",
          },
          {
            objectID: "2",
            title: "b",
          },
        ],
      },
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(fetchData("react")).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledWith(`${API}/search?query=react`);
  });
  it("fetches erroneously data from an API", async () => {
    const errorMessage = "Network Error";

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
  });
});
