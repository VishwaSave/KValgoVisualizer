import React from "react";
import { useState, useEffect, createContext } from "react";
import { defaultarr } from "./array";
import ArrInGraph from "./ArrayInGraph";
import Codesider from "./codesider";
import Text from "./text";
import { msg } from "../../Footer";
import play from "../../../img&other/play.png";
import pause from "../../../img&other/pause.png";

export const arrContext = createContext([]);

export default function Radix(props) {
  let e;
  const [arr, newArr] = useState(defaultarr);
  const speech = window.speechSynthesis;
  let a = [],
    b = [];
  useEffect(() => {
    document.getElementById("newArray").value = arr;
    arr.map((val, ind) => {
      a.push(document.getElementById("bar" + ind));
      a[ind].style.transition = "all 2s ease-out";
    });
  }, [arr]);

  async function sorting() {
    let g = document.getElementById("buckets");
    g.style.transition = "all 2s ease-out";
    let p = document.getElementById("barContainer");
    let txt, k;
    let c = document.getElementById("textContainer");
    b = [
      document.getElementById("br1"),
      document.getElementById("br2"),
      document.getElementById("br3"),
      document.getElementById("br4"),
      document.getElementById("br5"),
    ];
    if (!(arr.length == 1)) {
      const maxDigits = Math.max(...arr).toString().length;

      let sortedArray = [...arr];
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[0].classList.add("bg-gray-700");
      txt = "First create 10 buckets/queues for each digit (0 to 9)";
      c.innerText = txt;
      msg.text = "Firstly create 10 buckets or queues for each digit (0 to 9)";
      speech.speak(msg);
      document.getElementById("buckets").innerHTML += `
    <div class="flex flex-col items-center text-center ml-[50px]" id="bucket0"><hr class="w-[4rem] h-[3px] bg-black" id="hr0"/>0</div>
    <div class="flex flex-col items-center text-center" id="bucket1"><hr class="w-[4rem] h-[3px] bg-black" id="hr1"/>1</div>
    <div class="flex flex-col items-center text-center" id="bucket2"><hr class="w-[4rem] h-[3px] bg-black" id="hr2"/>2</div>
    <div class="flex flex-col items-center text-center" id="bucket3"><hr class="w-[4rem] h-[3px] bg-black" id="hr3"/>3</div>
    <div class="flex flex-col items-center text-center" id="bucket4"><hr class="w-[4rem] h-[3px] bg-black" id="hr4"/>4</div>
    <div class="flex flex-col items-center text-center" id="bucket5"><hr class="w-[4rem] h-[3px] bg-black" id="hr5"/>5</div>
    <div class="flex flex-col items-center text-center" id="bucket6"><hr class="w-[4rem] h-[3px] bg-black" id="hr6"/>6</div>
    <div class="flex flex-col items-center text-center" id="bucket7"><hr class="w-[4rem] h-[3px] bg-black" id="hr7"/>7</div>
    <div class="flex flex-col items-center text-center" id="bucket8"><hr class="w-[4rem] h-[3px] bg-black" id="hr8"/>8</div>
    <div class="flex flex-col items-center text-center" id="bucket9"><hr class="w-[4rem] h-[3px] bg-black" id="hr9"/>9</div>`;
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });

      for (let i = 0; i < maxDigits; i++) {
        const buckets = Array.from({ length: 10 }, () => []);
        for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
        b[1].classList.add("bg-gray-700");
        txt =
          "Processing the " +
          (maxDigits - i) +
          (maxDigits - i == 1
            ? "st"
            : maxDigits - i == 2
            ? "nd"
            : maxDigits - i == 3
            ? "rd"
            : "th") +
          " index";
        c.innerText = txt;
        msg.text = txt;
        speech.speak(msg);
        for (let j = 0; j < sortedArray.length; j++) {
          let f = a[j].innerText;
          let s = maxDigits - a[j].innerText.length;
          let o = maxDigits - s;
          a[j].innerHTML = f;
          if (o - i - 1 >= 0) {
            a[j].innerHTML =
              f.slice(0, o - i - 1) +
              "<span class='text-red-700 bg-blue-300'>" +
              f[o - i - 1] +
              "</span>" +
              f.slice(o - i, o);
          }
        }
        await new Promise((resolve) => {
          msg.addEventListener("end", () => {
            resolve();
          });
        });

        for (let j = 0; j < sortedArray.length; j++) {
          const placeholderDiv = document.createElement("div");
          placeholderDiv.classList.add(
            "w-[3rem]",
            "h-[2rem]",
            "m-[0.2rem]",
            "border-2"
          );
          const digit = Math.floor((sortedArray[j] / Math.pow(10, i)) % 10);
          buckets[digit].push(sortedArray[j]);
          for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
          b[2].classList.add("bg-gray-700");
          txt = "Moving " + sortedArray[j] + " to bucket no. " + digit;
          c.innerText = txt;
          msg.text = txt;
          speech.speak(msg);
          let z = g.children[digit].children[0].getBoundingClientRect();
          let h = a[j].getBoundingClientRect();
          if (g.children[digit].children.length == 1) {
            a[j].style.transform = `translate(${z.x - h.x + 8}px,${
              z.y - 120
            }px)`;
          } else {
            a[j].style.transform = `translate(${z.x - h.x}px,${z.y - 122}px)`;
          }
          await new Promise((resolve) => {
            msg.addEventListener("end", () => {
              resolve();
            });
          });
          a[j].style.transition = "";
          a[j].style.transform = `translate(0px,0px)`;
          if (j + 1 < sortedArray.length)
            p.insertBefore(placeholderDiv, a[j + 1]);
          a[j].style.transition = "all 2s ease-out";
          g.children[digit].insertBefore(a[j], g.children[digit].children[0]);
        }
        a = [];
        for (let q = 0; q < 10; q++) {
          for (let j = g.children[q].children.length - 1; j >= 0; j--) {
            if (g.children[q].children[j].id.includes("bar")) {
              a.push(g.children[q].children[j]);
              if (a.length > 1) {
                for (k = 0; k < b.length; k++)
                  b[k].classList.remove("bg-gray-700");
                b[3].classList.add("bg-gray-700");
                b[4].classList.add("bg-gray-700");
                txt =
                  "Restoring element to position " +
                  (a.length - 1) +
                  " in the list ";
                c.innerText = txt;
                msg.text = txt;
                speech.speak(msg);
                let z =
                  p.children[p.children.length - 1].getBoundingClientRect();
                let h = g.children[q].children[j].getBoundingClientRect();
                g.children[q].children[j].style.transform = `translate(${
                  z.x - h.x + 58
                }px,${z.y - h.y}px)`;
                await new Promise((resolve) => {
                  msg.addEventListener("end", () => {
                    resolve();
                  });
                });
                g.children[q].children[j].style.transition = "";
                g.children[q].children[
                  j
                ].style.transform = `translate(0px,0px)`;
                g.children[q].children[j].style.transition = "all 2s ease-out";
              } else {
                for (k = 0; k < b.length; k++)
                  b[k].classList.remove("bg-gray-700");
                b[3].classList.add("bg-gray-700");
                b[4].classList.add("bg-gray-700");
                txt = "Restoring element to position 0 in the list ";
                c.innerText = txt;
                msg.text = txt;
                speech.speak(msg);
                let z = p.getBoundingClientRect();
                let h = g.children[q].children[j].getBoundingClientRect();
                g.children[q].children[j].style.transform = `translate(${
                  z.left - h.x + 4
                }px,${(z.top-h.y)+6}px)`;
                await new Promise((resolve) => {
                  msg.addEventListener("end", async () => {
                    resolve();
                  });
                });
                g.children[q].children[j].style.transition = "";
                g.children[q].children[
                  j
                ].style.transform = `translate(0px,0px)`;
                g.children[q].children[j].style.transition = "all 2s ease-out";
                p.innerHTML = "";
              }
              p.appendChild(g.children[q].children[j]);
            }
          }
        }
        sortedArray = buckets.flat();
      }
      newArr(sortedArray);
      txt = "Finally, our array is sorted";
    } else {
      txt = "As the list only contains one element so no sorting is require";
    }
    c.innerText = txt;
    msg.text = txt;
    speech.speak(msg);
    document.getElementById("stbtn").disabled = false;
    document.getElementById(
      "navbarContainer"
    ).children[0].children[0].children[0].disabled = false;
    for (
      let i = 1;
      i < document.getElementById("navbarContainer").children.length;
      i++
    ) {
      document.getElementById("navbarContainer").children[
        i
      ].children[0].disabled = false;
    }
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });
  }

  return (
    <arrContext.Provider value={{ array: arr }}>
      <div className="w-[100%] h-[87vh] bg-gray-900" id="main">
        <ArrInGraph />
        <Codesider />
        <Text />
        <div className="w-[57rem] absolute bottom-[5rem] h-[7rem] flex max-h-option max-sm:hidden">
          <button
            className="bg-yellow-600 w-[3rem] h-[100%] text-[3rem] max-h-option-button"
            onClick={(e) => {
              if (e.currentTarget.innerText == ">") {
                e.currentTarget.innerText = "<";
                document.getElementById("sort").classList.remove("hidden");
              } else {
                document
                  .getElementById("newArrContainer")
                  .classList.add("hidden");
                document.getElementById("sort").classList.add("hidden");
                e.currentTarget.innerText = ">";
              }
            }}
            id="stbtn"
          >
            {"<"}
          </button>
          <div
            className="w-[10rem] bg-gray-300 ml-[0.5rem] max-h-option-subOption text-lg"
            id="sort"
          >
            <button
              className="w-[100%] h-10 mt-4 bg-yellow-600 text-center max-h-newArr"
              onClick={(e) => {
                let m = document.getElementById("newArrContainer");
                if (m.classList.contains("hidden") === true) {
                  m.classList.remove("hidden");
                } else {
                  m.classList.add("hidden");
                }
                let n = document.getElementById("newArray");
                n.focus();
              }}
            >
              Create new Array
            </button>
            <button
              className="w-[100%] h-10 mt-1 bg-yellow-600 text-center max-h-sort"
              onClick={(e) => {
                document.getElementById("stbtn").innerText = ">";
                document.getElementById("sort").classList.add("hidden");
                document.getElementById("cdbtn").innerText = ">";
                document
                  .getElementById("codeContainer")
                  .classList.remove("hidden");
                document.getElementById("ttbtn").innerText = ">";
                document
                  .getElementById("textContainer")
                  .classList.remove("hidden");
                document
                  .getElementById("newArrContainer")
                  .classList.add("hidden");
                speech.cancel();
                document.getElementById("ppcont").disabled = false;
                document.getElementById("play/pause").src = pause;
                sorting();
              }}
            >
              Sort
            </button>
          </div>
          <div
            className="w-[25rem] ml-[0.5rem] pl-[0.5rem] mt-4 h-8 bg-yellow-300 flex items-center hidden max-h-newArr-ins"
            id="newArrContainer"
          >
            <button
              className="bg-green-700 px-[0.5rem]"
              onClick={(e) => {
                e.preventDefault();
                speech.cancel();
                document.getElementById("play/pause").src = play;
                let array = [];
                let i,
                  a = parseInt(Math.random() * 15);
                let b = a >= 3 ? a : 5;
                for (i = 0; i < b; i++) {
                  array[i] = parseInt(Math.random() * 10000 - 1);
                }
                let o = document.getElementById("barContainer");
                o.innerHTML = ``;
                array.map((val, ind) => {
                  o.innerHTML += `<div class="w-[3rem] h-[2rem] m-1 text-center border-2 border-black" id=${
                    "bar" + ind
                  }>${val}</div>`;
                });
                newArr(
                  array.map((val) => {
                    return val;
                  })
                );
              }}
            >
              Random
            </button>
            <form>
              <label>
                <b className="mx-[0.5rem] max-h-newArr-b">OR</b>A ={" "}
              </label>
              <input
                className="mr-[0.5rem] max-h-newArr-input"
                defaultValue={arr}
                id="newArray"
              />
              <button
                className="bg-green-700 px-[0.5rem]"
                onClick={(e) => {
                  e.preventDefault();
                  speech.cancel();
                  document.getElementById("play/pause").src = play;
                  let m = document.getElementById("newArray");
                  let regex = /^\d{0,4}(,\d{0,4})*$/;
                  if (regex.test(m.value)) {
                    let n = m.value.split(",");
                    let o = document.getElementById("barContainer");
                    o.innerHTML = ``;
                    n.map((val, ind) => {
                      o.innerHTML += `<div class="w-[3rem] h-[2rem] m-1 text-center border-2 border-black" id=${
                        "bar" + ind
                      }>${val}</div>`;
                    });
                    newArr(
                      n.map((val, ind) => {
                        return parseInt(val);
                      })
                    );
                  } else {
                    alert(
                      "!! Invalid list !! Please provide a valid list which consist of only numbers of 4 digits or less and comma (,) and upto 20 elements/numbers are allowed"
                    );
                  }
                }}
              >
                Go
              </button>
            </form>
          </div>
        </div>
      </div>
    </arrContext.Provider>
  );
}
