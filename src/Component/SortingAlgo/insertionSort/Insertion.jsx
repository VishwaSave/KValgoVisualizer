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

export default function Insertion(props) {
  let e;
  const [arr, newArr] = useState(defaultarr);
  const speech = window.speechSynthesis;
  let a = [],
    b = [];

  useEffect(() => {
    document.getElementById("newArray").value = arr;
    arr.map((val, ind) => {
      a.push(document.getElementById("bar" + ind));
      a[ind].style.transition = "all 3s ease-out";
    });
  }, [arr]);

  async function sorting() {
    let i,
      j,
      k,
      l,
      txt,
      temparr = arr;
    let c = document.getElementById("textContainer");
    b = [
      document.getElementById("br1"),
      document.getElementById("br2"),
      document.getElementById("br3"),
      document.getElementById("br4"),
      document.getElementById("br5"),
    ];
    let sorted, unsorted,movpos;
    let ex = document.getElementById("extra").getBoundingClientRect(),
      h;
    if (!(arr.length == 1)) {
      for (j = 0; j < arr.length - 1; j++) {
        sorted = j;
        for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
        txt = "Mark the first element (" + temparr[j] + ") as sorted.";
        c.innerText = txt;
        msg.text = txt;
        speech.speak(msg);
        b[0].classList.add("bg-gray-700");
        a[j].classList.remove("bg-green-600");
        a[j].classList.remove("bg-red-600");
        a[j].classList.add("bg-orange-600");
        await new Promise((resolve) => {
          msg.addEventListener("end", () => {
            resolve();
          });
        });
        for (i = j + 1; i < arr.length; i++) {
          unsorted = i;
          for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
          txt = "Extract the first unsorted element (" + temparr[i] + ")";
          c.innerText = txt;
          msg.text = txt;
          speech.speak(msg);
          b[1].classList.add("bg-gray-700");
          a[i].classList.remove("bg-green-600");
          a[i].classList.add("bg-red-600");
          h = a[i].getBoundingClientRect();
          movpos=ex.bottom - h.bottom - 7;
          a[i].style.transform = `translateY(${ex.bottom - h.bottom - 7}px)`;
          await new Promise((resolve) => {
            msg.addEventListener("end", () => {
              resolve();
            });
          });
          for (l = sorted; l >= 0; l--) {
            for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
            txt =
              "Figure where to insert extracted element; comparing with sorted element " +
              temparr[l] +
              ".";
            c.innerText = txt;
            msg.text = txt;
            speech.speak(msg);
            b[2].classList.add("bg-gray-700");
            a[l].classList.remove("bg-orange-600");
            a[l].classList.add("bg-green-600");
            await new Promise((resolve) => {
              msg.addEventListener("end", () => {
                resolve();
              });
            });
            if (temparr[l] > temparr[unsorted]) {
              for (k = 0; k < b.length; k++)
                b[k].classList.remove("bg-gray-700");
              txt =
                temparr[l] +
                " > " +
                temparr[unsorted] +
                " is true, hence move current sorted element (" +
                temparr[l] +
                ") to the right by 1.";
              c.innerText = txt;
              msg.text =
                temparr[l] +
                " greater than " +
                temparr[unsorted] +
                " is true, hence move current sorted element (" +
                temparr[l] +
                ") to the right by 1.";
              speech.speak(msg);
              b[3].classList.add("bg-gray-700");
              let temp = temparr[l];
              temparr[l] = temparr[unsorted];
              temparr[unsorted] = temp;
              a[l].classList.remove("bg-green-600");
              a[l].classList.add("bg-red-600");
              a[unsorted].classList.remove("bg-red-600");
              a[unsorted].classList.add("bg-green-600");
              a[l].style.transform = "translate(57px,0px)";
              a[unsorted].style.transform = `translate(-57px,${
                movpos
              }px)`;
              await new Promise((res) => {
                setTimeout(res, 3000);
              });
              a[l].style.transition = "all 0ms ease-out";
              a[unsorted].style.transition = "all 0ms ease-out";
              temp = a[l].style.height;
              a[l].style.height = a[unsorted].style.height;
              a[unsorted].style.height = temp;
              let temp1 = a[l].children[0].innerText;
              a[l].children[0].innerText = a[unsorted].children[0].innerText;
              a[unsorted].children[0].innerText = temp1;
              h = a[l].getBoundingClientRect();
              a[l].style.transform = `translate(0px,${
                ex.bottom - h.bottom - 7
              }px)`;
              a[unsorted].style.transform = "translate(0px,0px)";
              await new Promise((res) => {
                setTimeout(res, 100);
              });
              a[l].style.transition = "all 3s ease-out";
              a[unsorted].style.transition = "all 3s ease-out";
              a[unsorted].classList.remove("bg-green-600");
              unsorted = l;
            } else {
              for (k = 0; k < b.length; k++) {
                b[k].classList.remove("bg-gray-700");
              }
              txt =
                temparr[l] +
                " > " +
                temparr[unsorted] +
                " is false, insert element at current position.";
              c.innerText = txt;
              msg.text =
                temparr[l] +
                " greater than " +
                temparr[unsorted] +
                " is false, insert element at current position.";
              speech.speak(msg);
              b[4].classList.add("bg-gray-700");
              a[l].classList.remove("bg-green-600");
              for (k = sorted; k >= 0; k--) a[k].classList.add("bg-orange-600");
              await new Promise((resolve) => {
                msg.addEventListener("end", () => {
                  resolve();
                });
              });
              break;
            }
            a[l].classList.remove("bg-green-600");
            for (k = sorted; k >= 0; k--) a[k].classList.add("bg-orange-600");
            await new Promise((resolve) => {
              msg.addEventListener("end", () => {
                resolve();
              });
            });
          }
          for (l = sorted; l >= 0; l--) {
            a[l].style.transform = "translateY(0px)";
          }
          a[unsorted].classList.remove("bg-red-600");
          a[i].style.transform = "translateY(0px)";
          a[i].classList.remove("bg-red-600");
          a[i].classList.add("bg-orange-600");
          break;
        }
      }
      arr.map((val, ind) => {
        a[ind].classList.add("bg-orange-600");
      });
      txt = "Finally, our array is sorted";
    } else {
      txt = "As the list only contains one element so no sorting is require";
    }
    c.innerText = txt;
    msg.text = txt;
    speech.speak(msg);
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });
    newArr(temparr);
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
                  a = parseInt(Math.random() * 10);
                let b = a >= 3 ? a : 5;
                for (i = 0; i < b; i++) {
                  array[i] = parseInt(Math.random() * 50);
                }
                let o = document.getElementById("barContainer");
                o.innerHTML = ``;
                array.map((val, ind) => {
                  o.innerHTML += `<div class="w-[3rem] relative bg-blue-300 m-[0.2rem] text-center" id=${
                    "bar" + ind
                  }><span class="relative bottom-6">${val}</span></div>`;
                  document.getElementById("bar" + ind).style.height = val + "%";
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
                type="text"
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
                  let regex = /^(?:[0-9]\d?|50)(?:,(?:[0-9]\d?|50)){0,9}$/;

                  if (regex.test(m.value)) {
                    let n = m.value.split(",");
                    let o = document.getElementById("barContainer");
                    o.innerHTML = ``;
                    n.map((val, ind) => {
                      o.innerHTML += `<div class="w-[3rem] bg-blue-300 m-[0.2rem] text-center" id=${
                        "bar" + ind
                      }><span class="relative bottom-6">${val}</span></div>`;
                      document.getElementById("bar" + ind).style.height =
                        val + "%";
                    });
                    newArr(
                      n.map((val, ind) => {
                        return parseInt(val);
                      })
                    );
                  } else {
                    alert(
                      "!! Invalid list !! Please provide a valid list which consist of only numbers of 2 digits or less and comma (,) and upto 10 elements/numbers which are less than or equal to 50 are allowed"
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
