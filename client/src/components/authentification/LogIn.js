import { Link } from "react-router-dom";
export default function LogIn() {
  return (
    <>
      <div className="flex place-items-center justify-center mt-2">
        <Link to="/" className=" btn btn-ghost normal-case text-xl ">
          WoDat?&nbsp;
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
              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
        </Link>
      </div>
      <div class="flex justify-center self-center  z-10">
        {" "}
        <div class="p-12 bg-white mx-auto rounded-2xl w-100 ">
          <div class="mb-4">
            <h3 class="font-semibold text-2xl text-gray-800">Log In </h3>
            <p class="text-gray-500">Please log in to your account.</p>
          </div>
          <div class="space-y-5">
            {" "}
            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700 tracking-wide">
                Email
              </label>
              <input
                class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type=""
                placeholder="mail@gmail.com"
              />
            </div>
            <div class="space-y-2">
              <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Password
              </label>
              <input
                class="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type=""
                placeholder="Enter your password"
              />
            </div>
            <div class="flex items-center justify-between">
              {/* <div class="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                />
                <label
                  for="remember_me"
                  class="ml-2 block text-sm text-gray-800"
                >
                  Remember me
                </label>
              </div> */}
              <div class="text-sm">
                Don't have an account yet?&nbsp;
                <Link
                  to="/signup"
                  className="text-green-400 hover:text-green-500"
                >
                  Sign up!
                </Link>
              </div>
            </div>
            <div>
              <button
                type="submit"
                class="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
