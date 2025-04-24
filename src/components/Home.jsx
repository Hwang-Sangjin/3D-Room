import { useState, useEffect } from "react";
import url from "../constants/url";
import { Link } from "react-router"; // Correct import

function SceneObjects() {
  const estateIDs = ["1111111400", "1111111401", "2300033915", "2300033917"];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Room Styler</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {estateIDs.map((estateID, index) => (
          <li
            key={index}
            className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
          >
            <Link
              to={`/room?estateID=${estateID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              aria-label={`View scene for Estate ${estateID}`}
            >
              <h2 className="text-lg font-semibold">Estate {estateID}</h2>
              <p className="text-gray-600">Click to view scene</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SceneObjects;
