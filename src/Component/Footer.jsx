import React, {useEffect} from "react";
import pause from "../img&other/pause.png"
import play from "../img&other/play.png"

export const msg = new SpeechSynthesisUtterance();
export default function Footer() {
  let speech=window.speechSynthesis;
  let voices = [];
  useEffect(()=>{
    document.getElementById('ppcont').disabled=true;
  },[])
  return (
    <div className="w-[90%] relative xl:bottom-8 left-4 text-white text-lg flex max-h-footer max-sm:hidden xl:text-[1rem] lg:text-[1.2rem] lg:bottom-10 sm:text-[1.9rem] sm:bottom-12">
      Select voice:
      <select
        className="bg-gray-600 relative text-white cursor-pointer appearance-none px-2 scroll-smooth outline-none ml-2 text-[1rem] max-h-footer-select xl:text-[1rem] lg:text-[1.2rem] md:bottom-0 sm:text-[1.7rem] sm:bottom-2"
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
        }, 5)}
      </select>
      <div className="ml-4 flex">
        Speed:
        <form>
          <input
            className="ml-2 cursor-grab transition-all duration-[3s] max-h-footer-ratio relative xl:top-[1.8px] lg:top-[1.3px] lg:bottom-0 sm:bottom-[1.5px]"
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
          <label className="ml-2 relative xl:text-[1rem] lg:text-[1.2rem] lg:bottom-[1.3px] md:bottom-2 sm:text-[2rem] sm:bottom-4" id="rangeValue">
            1X
          </label>
        </form>
      </div>
      <div className="ml-4 flex">
        <button onClick={(e)=>{
          const m=document.getElementById('play/pause')
          if(m.src==pause){
            speech.pause();
            m.src=play;
          }
          else{
            speech.resume();
            m.src=pause;
          }
        }} id='ppcont'><img src={play} className="w-[25px]" alt='sorry' id='play/pause'/></button>
      </div>
    </div>
  );
}
