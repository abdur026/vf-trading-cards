"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function CardDisplay() {
  const [cardRecords, setCardRecords] = useState([]);
  const [sortOption, setSortOption] = useState("scoreDesc"); 
  const [sortedCardRecords, setSortedCardRecords] = useState([]);

  useEffect(() => {
    fetch(`/api/cards?sortOption=${sortOption}`)
      .then((res) => res.json())
      .then((data) => {
        let sortedRecords = [];
        if (sortOption === "scoreAsc") {
          sortedRecords = data.records.sort((a, b) => a.Score - b.Score);
        } else if (sortOption === "scoreDesc") {
          sortedRecords = data.records.sort((a, b) => b.Score - a.Score);
        } else if (sortOption === "alphabetical") {
          sortedRecords = data.records.sort((a, b) => a.Name.localeCompare(b.Name));
        }
        setSortedCardRecords(sortedRecords);
      })
      .catch((err) => console.log(err));
  }, [sortOption]);

  const handleSortOptionChange = (option) => {
    setSortOption(option);
  };

  const getRandomColorClass = () => {
    const colors = [
      "bg-red-400",
      "bg-blue-400",
      "bg-green-400",
      "bg-yellow-400",
      "bg-purple-400",
      "bg-pink-400",
      "bg-indigo-400",
      "bg-teal-400",
      "bg-orange-400",
      "bg-cyan-400",
      "bg-lime-400",
      "bg-amber-400",
      "bg-emerald-400",
      "bg-fuchsia-400",
      "bg-rose-400",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div
      style={{
        backgroundImage: "url(background.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        animation: "wave 5s infinite",
      }}
    >
      <Menu as="div" className="fixed top-3 right-1 transform -translate-x-1/2 -translate-y-5/30 z-30">
        <div>
          <Menu.Button className="inline-flex justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Sort: {sortOption === "scoreDesc" ? "Descending" : sortOption === "scoreAsc" ? "Ascending" : "Alphabetical"}
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="right-1/2 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleSortOptionChange("scoreDesc")}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm w-full text-left'
                    )}
                  >
                    Sort by Score Descending
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleSortOptionChange("scoreAsc")}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm w-full text-left'
                    )}
                  >
                    Sort by Score Ascending
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleSortOptionChange("alphabetical")}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm w-full text-left'
                    )}
                  >
                    Sort Alphabetically
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      <div className="grid grid-cols-3 gap-8">
        {sortedCardRecords.map((card, index) => (
          <Link
            key={index}
            className={`p-5 flex flex-col justify-center items-center transform hover:scale-105 transition duration-300 ${getRandomColorClass()}`}
            href={`/cards/${card.Id}`}
          >
            <div className="text-lg font-bold mb-2">{card.Name}</div>
            <img
              src={card.Image}
              alt={card.Name}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <div className="text-xl font-bold">Score: {card.Score}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}