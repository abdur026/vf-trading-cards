"use client";
import { useState, useEffect } from "react";

export default function CardDetail({ params }) {
  const [cardInfo, setCardInfo] = useState({});

  useEffect(() => {
    fetch(`/api/cards/${params.cardName}`)
      .then((res) => res.json())
      .then((data) => {
        setCardInfo(data.records);
      })
      .catch((err) => console.log(err));
  }, [cardInfo]);

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
    fontFamily: "Poppins, sans-serif",
    color: "#fff",
    textAlign: "center",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  }}
>
  <div className="flex items-center">
    <img
     src={`/images/${cardInfo.PageName}.png`}
      alt="Image"
      className="w-64 h-auto rounded-full mr-4"
      style={{ width: "400px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)" }}
    />
    <div className="mb-4">
  <h2 className="text-2xl font-bold mb-1 uppercase">
    Name: {cardInfo.Name}
  </h2>
  <p className="text-lg font-bold mb-1">
    Score: {cardInfo.Score}
  </p>
  <p className="text-lg mb-1">
    Stamina: {cardInfo.Stamina}
  </p>
  <p className="text-lg mb-1">
    Aura: {cardInfo.Aura}
  </p>
  <p className="text-lg mb-1">
    Skill: {cardInfo.Skill}
  </p>
</div>
</div>
</div>

  )
}