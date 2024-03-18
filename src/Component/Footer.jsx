import React, {useEffect} from "react";
import pause from "../img&other/pause.png"
import play from "../img&other/play.png"
import mute from "../img&other/mute.png"
import high from "../img&other/high.png"

export const msg = new SpeechSynthesisUtterance();
export default function Footer() {
  let speech=window.speechSynthesis;
  const voices = speech.getVoices();
  useEffect(()=>{
    document.getElementById('ppcont').disabled=true;
  },[])
  return (
    <div className="w-[100vw] h-[25px] bg-gray-900 left-4 text-white text-lg flex max-h-footer max-sm:hidden xl:text-[1rem] lg:text-[1.2rem] sm:text-[1.9rem]">
      Select voice:
      <select
        className="bg-gray-600 text-white cursor-pointer appearance-none px-2 scroll-smooth outline-none ml-2 text-[1rem] max-h-footer-select xl:text-[1rem] lg:text-[1.2rem] sm:text-[1.7rem]"
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
            className="ml-2 cursor-grab transition-all duration-[3s] max-h-footer-ratio relative xl:top-[1.8px] lg:top-[1.3px]"
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
          <label className="ml-2 xl:text-[1rem] lg:text-[1.2rem] sm:text-[2rem]" id="rangeValue">
            1X
          </label>
        </form>
      </div>
      <div className="ml-12 flex">
        <button onClick={(e)=>{
          const m=document.getElementById('volumeimg')
          if(m.src==mute){
            msg.volume=1;
            m.src=high;
          }
          else{
            msg.volume=0;
            m.src=mute;
          }
        }}><img src={high} className="w-[1.6rem] max-lg:w-[2.3rem] max-md:w-[2.5rem]" alt='sorry' id='volumeimg'/></button>
      </div>
      <div className="ml-28 flex">
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
        }} id='ppcont'><img src={play} className="w-[1.6rem] max-lg:w-[2.3rem] max-md:w-[2.5rem]" alt='sorry' id='play/pause'/></button>
      </div>
    </div>
  );
}
