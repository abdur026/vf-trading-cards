"use client";
import { useEffect, useState } from "react";
export default function CardDisplay() {
  const [cardRecords, setCardRecords] = useState([]);

  useEffect(() => {
    fetch(`/api/cards`)
      .then((res) => res.json())
      .then((data) => {
        setCardRecords(data.records);
      })
      .catch((err) => console.log(err));
  }, []);

  
     // Function to generate a random color class
  const getRandomColorClass = () => {
    const colors = [
        'bg-red-400',
        'bg-blue-400',
        'bg-green-400',
        'bg-yellow-400',
        'bg-purple-400',
        'bg-pink-400',
        'bg-indigo-400',
        'bg-teal-400',
        'bg-orange-400',
        'bg-cyan-400',
        'bg-lime-400',
        'bg-amber-400',
        'bg-emerald-400',
        'bg-fuchsia-400',
        'bg-rose-400',
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
      <div className="grid grid-cols-3 gap-8">
        {cardRecords.map((card, index) => (
          <div
            key={index}
            className={`p-5 flex flex-col justify-center items-center transform hover:scale-105 transition duration-300 ${getRandomColorClass()}`}
          >
            <div className="text-lg font-bold mb-2">{card.Name}</div>
            <img
              src={card.Image}
              alt={card.Name}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <div className="text-xl font-bold">{card.Score}</div>
          </div>
        ))}
      </div>
    </div>
  );
};