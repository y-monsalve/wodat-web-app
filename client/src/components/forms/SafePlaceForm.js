import Navbar from "../Navbar";

export default function SafePlaceForm() {
  return (
    <>
      <Navbar />
      <section>
        <form className=" bg-blue-200 justify-center ">
          <div className="grid gap-4 grid-cols-3">
            <div className="w-1/4 bg-green-200">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>{" "}
            <div className="w-2/4 bg-blue-500">
              <h2>Create a safe place</h2>
            </div>
            <div className="w-1/4">
              <button className="bg-red-200">Save</button>
            </div>
          </div>
          <div className="">
            <label className="mr-3" for="sp_name">
              Name:
            </label>

            <input />
            <h3>Choose an option:</h3>
            <input type="radio" id="lugagge" name="location" />
            <label for="lugagge">Lugagge</label>
            <br />
            <input type="radio" id="box" name="location" />
            <label for="box">Box</label>
            <br />
            <input type="radio" id="bag" name="location" />
            <label for="bag">Bag</label>
            <br />
            <input type="radio" id="other" name="location" />
            <label for="other">Other</label>
            <br />
            <label className="" for="description">
              Where is it?
            </label>
            <br />
            <textarea
              className="mt-1"
              rows="4"
              cols="29"
              id="description"
              name="description"
              placeholder="Describe the location of your item "
            ></textarea>
            <br />
            <label for="location_pic">Upload an image:</label>
            <br />
            <input className="mt-1" type="file" />
            <br />
            <button className="mt-1 mb-1">Upload</button>
            <br />
            <label for="tags">Add tags:</label>
          </div>
        </form>
      </section>
    </>
  );
}
