import { Link } from "react-router-dom";
export default function LogIn() {
  return (
    <>
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
