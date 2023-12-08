import React, { useEffect } from "react";

export const msg = new SpeechSynthesisUtterance();
export default function Footer() {
  const speech = window.speechSynthesis;
  let voices = [];
  return (
    <div className="absolute bottom-4 left-4 text-white text-lg flex">
      <label>Select voice: </label>
      <select
        className="bg-gray-600 text-white cursor-pointer appearance-none px-2 scroll-smooth outline-none ml-2 text-[1rem]"
        id="selectVoice"
        onClick={(e) => {
          voices.map((val) => {
            if (val.name === e.currentTarget.selectedOptions[0].text) {
              msg.voice = val;
            }
          });
        }}
      >
        {
        setTimeout(() => {
            voices = speech.getVoices();
            voices.map((val, ind) => {
              if (ind !== 1 && ind !== 2 && ind !== 5) {
                document.getElementById(
                  "selectVoice"
                ).innerHTML += `<option>${val.name}</option>`;
              }
            });
        }, 1)}
      </select>
      <div className="ml-4 flex">
        Speed:
        <form>
          <input
            className="ml-2 cursor-grab transition-all duration-[3s]"
            type="range"
            min="0"
            max="6"
            defaultValue="1"
            id="speedController"
            onMouseDown={(e)=>{
                    e.currentTarget.classList.remove('cursor-grab')
                    e.currentTarget.classList.add('cursor-grabbing')
            }}
            onMouseUp={(e)=>{
                e.currentTarget.classList.remove('cursor-grabbing')
                e.currentTarget.classList.add('cursor-grab')
            }}
            onChange={(e) => {
              if (e.currentTarget.value !== "0") {
                msg.rate = parseInt(e.currentTarget.value);
                document.getElementById("rangeValue").innerText =
                  e.currentTarget.value + "X";
              } else {
                msg.rate = 0.5;
                document.getElementById("rangeValue").innerText = "0.5X";
              }
            }}
          />
          <label className="ml-2" id="rangeValue">
            1X
          </label>
        </form>
      </div>
    </div>
  );
}
