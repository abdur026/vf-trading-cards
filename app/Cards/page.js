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

  
    return (
        <div className="grid grid-cols-3 gap-4">
          {cardRecords.map((card, index) => (
           <div
              key={index}
              className="bg-gray-200 p-4 flex flex-col justify-center items-center"
            >
             <div className="text-lg font-bold mb-2">{card.Name} </div>
              <img
                src={card.Image}
                alt={card.Name}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <div className="text-xl font-bold">{card.Score}</div>
            </div>
          ))}
        </div>
      );
  
}
