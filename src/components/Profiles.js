import React from 'react';

function Profiles() {
  return (
    <section className="rating-section min-h-screen flex items-center justify-center">
      <div className="card">
        <div className="heading caption text-yellow-300 text-5xl">Rating and Profiles</div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <a href="https://leetcode.com/prakashtarun313/" target="_blank">
            <div className="bg-sky-500 hover:bg-sky-700  border-4 border-yellow-500/100 p-4 rounded-lg  w-48 h-48">
              <img
                src="leetcode.png"
                alt="LeetCode"
                className="w-full h-16 mx-auto mb-2 object-contain"
              />
              <p className="text-center font-semibold">LeetCode</p>
            </div>
          </a>
          <a href="https://auth.geeksforgeeks.org/user/prakashtarun313" target="_blank">
            <div className="bg-sky-500 hover:bg-sky-700 p-4 rounded-lg  border-4 border-yellow-500/100 shadow w-48 h-48">
              <img
                src="geeksforgeeks.png"
                alt="GeeksforGeeks"
                className="w-full h-16 mx-auto mb-2 object-contain"
              />
              <p className="text-center font-semibold">GeeksforGeeks</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/tarun-prakash-poram/" target="_blank">
            <div className="bg-sky-500 hover:bg-sky-700 p-4 rounded-lg border-4 border-yellow-500/100 shadow w-48 h-48">
              <img
                src="linkedin.png"
                alt="LinkedIn"
                className="w-full h-16 mx-auto mb-2 object-contain"
              />
              <p className="text-center font-semibold">LinkedIn</p>
            </div>
          </a>
          <a href="https://www.codechef.com/users/tarunprakash" target="_blank">
            <div className="bg-sky-500 hover:bg-sky-700 p-4 rounded-lg border-4 border-yellow-500/100 shadow w-48 h-48">
              <img
                src="codechef.jpeg"
                alt="CodeChef"
                className="w-full h-16 mx-auto mb-2 object-contain"
              />
              <p className="text-center font-semibold">CodeChef</p>
            </div>
          </a>
          <a href="https://codeforces.com/profile/tarunprakash" target="_blank">
            <div className="bg-sky-500 hover:bg-sky-700 p-4 rounded-lg border-4 border-yellow-500/100 shadow w-48 h-48">
              <img
                src="codeforces.jpeg"
                alt="Codeforces"
                className="w-full h-16 mx-auto mb-2 object-contain"
              />
              <p className="text-center font-semibold">Codeforces</p>
            </div>
          </a>
          <a href="https://github.com/tarunprakashporam" target="_blank">
            <div className="bg-sky-500 hover:bg-sky-700 p-4 rounded-lg border-4 border-yellow-500/100  shadow w-48 h-48">
              <img
                src="github.png"
                alt="GitHub"
                className="w-full h-16 mx-auto mb-2 object-contain"
              />
              <p className="text-center font-semibold">GitHub</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Profiles;
