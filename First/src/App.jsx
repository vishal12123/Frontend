// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div className="flex w-screen h-screen overflow-x-hidden">
//         <div className="grid grid-rows-2">
//           <div className="bg-red-500 w-screen">h1</div>

//           <div className="bg-blue-500 grid grid-cols-2">
//             <div className="bg-white">hii</div>
//             <div>ggg</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import React from "react";

const App = () => {
  return (
    <div>
      <div className="grid grid-rows-2  h-screen">
        <div className=" h-full">
          <div className="ml-12  mt-12">
            <div className="mb-4">
              <p className="text-4xl font-bold text-teal-600">
                Join our community
              </p>
            </div>
            <div className="mb-3 text-2xl text-lime-600 font-medium">
              <p>30-day, hassle-free money back guarantee</p>
            </div>
            <div className=" text-gray-400 font-medium">
              <p>
                Gain access to your full library of tutorials along with expert
                code review. Perfect for any developers who are serious about
                honing their skills
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 ">
          <div className="bg-teal-500 text-white ">
            <div className="ml-10 mt-10">
              <div className="text-xl font-medium ">Monthly Subscription</div>
              <div className="mt-6 mb-4">
                <span className="text-3xl font-bold">$29 </span>per month
              </div>
              <div>Full access for less than $1 a day</div>
              <div className="">
                <button className="w-10/12 h-12 text-white font-medium bg-lime-300 rounded-md mt-10 ">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="bg-teal-300">
            <div className="text-white mt-9 ml-10">
              <div className="text-2xl mb-5">Why Us</div>
              <div className="mb-12">
                <ul className="list-none space-y-1 ">
                  <li>Tutorial by idustry experts</li>
                  <li>peer & expert code review</li>
                  <li>Coding exercises</li>
                  <li>Access to our Github repos</li>
                  <li>Community forum</li>
                  <li>Flashcard decks</li>
                  <li>New videos every week</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
