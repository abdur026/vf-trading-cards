"use client";


import React, { useState, useEffect } from "react";
import Notification from "./notification"; // Import the notification.js file

export default function CardDisplay() {
  const [cardRecords, setCardRecords] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [sortedCardRecords, setSortedCardRecords] = useState([]);
  const [savedDeck, setSavedDeck] = useState([]);
  const [isSavedDeckVisible, setIsSavedDeckVisible] = useState(false);
  const [notification, setNotification] = useState(false);
  const [noCardsMessage, setNoCardsMessage] = useState(false);

  useEffect(() => {
    fetch(`/api/cards`)
      .then((res) => res.json())
      .then((data) => {
        const sortedRecords = data.records.map((card) => ({
          ...card,
          color: getRandomBrightColor(),
        }));
        setSortedCardRecords(sortedRecords);
      })
      .catch((err) => console.log(err));
  }, []);

  const toggleCardSelection = (cardId) => {
    setSelectedCards((prevSelectedCards) =>
      prevSelectedCards.includes(cardId)
        ? prevSelectedCards.filter((id) => id !== cardId)
        : [...prevSelectedCards, cardId]
    );
  };

const saveDeck = () => {
  setSavedDeck((prevSavedDeck) => [...prevSavedDeck, ...selectedCards]);
  setSelectedCards([]);

  setNotification(true);

  setTimeout(() => {
    setNotification(false);
  }, 3000);
};


  const getRandomBrightColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 9) + 6];
    }
    return color;
  };

  const viewDeck = () => {
    if (savedDeck.length === 0) {
      setNoCardsMessage(true);
    } else {
      setIsSavedDeckVisible(true);
      setNoCardsMessage(false);
    }
  };

  const goBack = () => {
    setIsSavedDeckVisible(false);
  };

  const selectedCount = savedDeck.length;
  const remainingCards = sortedCardRecords.filter(
    (card) => !savedDeck.includes(card.Id)
  );
  const remainingCount = remainingCards.length;

  return (
    <>
      <Notification
        show={notification}
        onClose={() => setNotification(false)}
      />
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
        {!isSavedDeckVisible && (
          <div className="flex justify-between p-4">
            <button
              onClick={saveDeck}
              className="px-12 py-3 bg-blue-600 text-white border border-blue-700 rounded-lg hover:bg-blue-700"
            >
              Save
            </button>
            <button
              onClick={viewDeck}
              className="px-12 py-3 bg-green-600 text-white border border-green-700 rounded-lg hover:bg-green-700 ml-4"
            >
              View Deck
            </button>
          </div>
        )}

        {noCardsMessage && (
          <div className="text-2xl font-semibold text-white mt-4">
            You have no cards in your deck.
          </div>
        )}

        {isSavedDeckVisible && (
          <>
            <div className="ml-4">
              <span className="text-2xl font-semibold text-white">
                Cards: {selectedCount}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-8">
              {savedDeck.map((cardId, index) => {
                const card = sortedCardRecords.find(
                  (card) => card.Id === cardId
                );
                return (
                  <div
                    key={index}
                    className={`p-3 flex flex-col justify-center items-center transform hover:scale-105 transition duration-300 border border-white rounded-lg shadow-lg`}
                    style={{ backgroundColor: card.color }}
                  >
                    <label>
                      <div className="text-xl font-bold mb-2">{card.Name}</div>
                      <img
                        src={card.Image}
                        alt={card.Name}
                        className="w-32 h-32 object-cover rounded-full mb-4"
                      />
                      <div className="text-lg font-semibold">
                        Score: {card.Score}
                      </div>
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="absolute top-20 left-10">
              <button
                onClick={goBack}
                className="px-12 py-3 bg-blue-600 text-white border border-blue-700 rounded-lg hover:bg-blue-700"
              >
                Back
              </button>
            </div>

            {remainingCount === 0 && (
              <div className="mt-6 ml-4">
                <span className="text-2xl font-semibold text-white">
                  No more cards remaining.
                </span>
              </div>
            )}

            {remainingCount > 0 && (
              <>
                <div className="mt-6 ml-4">
                  <span className="text-2xl font-semibold text-white">
                    Remaining: {remainingCount}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-8">
                  {remainingCards.map((card, index) => (
                    <div
                      key={index}
                      className={`p-3 flex flex-col justify-center items-center transform hover:scale-105 transition duration-300 border border-white rounded-lg shadow-lg`}
                      style={{ backgroundColor: card.color }}
                    >
                      <label>
                        <input
                          type="checkbox"
                          checked={selectedCards.includes(card.Id)}
                          onChange={() => toggleCardSelection(card.Id)}
                        />
                        <div className="text-xl font-bold mb-2">
                          {card.Name}
                        </div>
                        <img
                          src={card.Image}
                          alt={card.Name}
                          className="w-32 h-32 object-cover rounded-full mb-4"
                        />
                        <div className="text-lg font-semibold">
                          Score: {card.Score}
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        )}

        {!isSavedDeckVisible && !noCardsMessage && remainingCount > 0 && (
          <div className="grid grid-cols-3 gap-8">
            {sortedCardRecords.map((card, index) => (
              <div
                key={index}
                className={`p-3 flex flex-col justify-center items-center transform hover:scale-105 transition duration-300 border border-white rounded-lg shadow-lg`}
                style={{ backgroundColor: card.color }}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={selectedCards.includes(card.Id)}
                    onChange={() => toggleCardSelection(card.Id)}
                  />
                  <div className="text-xl font-bold mb-2">{card.Name}</div>
                  <img
                    src={card.Image}
                    alt={card.Name}
                    className="w-32 h-32 object-cover rounded-full mb-4"
                  />
                  <div className="text-lg font-semibold">
                    Score: {card.Score}
                  </div>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
