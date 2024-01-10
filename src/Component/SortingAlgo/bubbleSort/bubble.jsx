import React from "react";
import { useState, useEffect, createContext } from "react";
import { defaultarr } from "./array";
import ArrInGraph from "./ArrayInGraph";
import Codesider from "./codesider";
import Text from "./text";
import Footer, { msg } from "../../Footer";
import play from "../../../img&other/play.png"
import pause from "../../../img&other/pause.png"

export const arrContext = createContext([]);

export default function Bubble(props) {
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
      x,
      y,
      k,
      temparr = arr,
      txt;
    let c = document.getElementById("textContainer");
    b = [
      document.getElementById("br1"),
      document.getElementById("br2"),
      document.getElementById("br3"),
    ];
    if (!(arr.length==1)) {
      for (j = 0; j < arr.length - 1; j++) {
        for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
        if (j === 0) {
          b[0].classList.add("bg-gray-700");
          txt =
            "Firstly we will intiallize two loop that will iterate from 0 to " +
            (arr.length - 1) +
            " inclusive";
          c.innerText = txt;
          msg.text = txt;
          speech.speak(msg);
          await new Promise((resolve) => {
            msg.addEventListener("end", () => {
              resolve();
            });
          });
        }
        for (i = 0; i < arr.length - j - 1; i++) {
          if (i === 0 && j === 0) {
            txt =
              "Two loops so that we can check each and every element of array";
            c.innerText = txt;
            msg.text = txt;
            speech.speak(msg);
            await new Promise((resolve) => {
              msg.addEventListener("end", () => {
                resolve();
              });
            });
          }

          a[i].classList.add("bg-green-600");
          a[i + 1].classList.add("bg-green-600");
          arr.map((val, ind) => {
            if (i === ind) {
              x = a.slice(0, i);
              y = a.slice(i + 2, arr.length);
            }
          });

          let n = [...x, ...y];
          n.map((val, ind) => {
            n[ind].classList.remove("bg-green-600");
            n[ind].classList.remove("bg-red-600");
          });
          for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
          b[1].classList.add("bg-gray-700");
          txt =
            "Next we will check " +
            temparr[i] +
            " greater than " +
            temparr[i + 1] +
            ", if true then swap two elements else array will remain as it is";
          c.innerText =
            "Next we will check " +
            temparr[i] +
            " > " +
            temparr[i + 1] +
            ", if true then swap two elements else array will remain as it is";
          msg.text = txt;
          speech.speak(msg);
          await new Promise((resolve) => {
            msg.addEventListener("end", () => {
              resolve();
            });
          });

          if (arr[i] > arr[i + 1]) {
            let temp = temparr[i];
            temparr[i] = temparr[i + 1];
            temparr[i + 1] = temp;
            a[i].classList.remove("bg-green-600");
            a[i].classList.add("bg-red-600");
            a[i + 1].classList.remove("bg-green-600");
            a[i + 1].classList.add("bg-red-600");
            for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
            b[2].classList.add("bg-gray-700");
            txt =
              "Condition is true, so we will swap the currentElement that is " +
              temparr[i + 1] +
              " with rightElement that is " +
              temparr[i];
            c.innerText =
              "Condition is true, so we will swap the currentElement i.e " +
              temparr[i + 1] +
              " with rightElement i.e " +
              temparr[i];
            msg.text = txt;
            speech.speak(msg);
            await new Promise((resolve) => {
              msg.addEventListener("end", () => {
                resolve();
              });
            });

            let temp1;
            temp = a[i].style.height;
            temp1 = a[i].children[0].innerText;
            a[i].style.height = a[i + 1].style.height;
            a[i].children[0].innerText = a[i + 1].children[0].innerText;
            a[i + 1].style.height = temp;
            a[i + 1].children[0].innerText = temp1;
            a[i].classList.remove("bg-red-600");
            a[i + 1].classList.remove("bg-red-600");
          } else {
            for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
            txt = "Condition is false, so we will leave array as it is";
            c.innerText = txt;
            msg.text = txt;
            speech.speak(msg);
            await new Promise((resolve) => {
              msg.addEventListener("end", () => {
                resolve();
              });
            });
          }
        }
        a[arr.length - j - 1].classList.add("bg-orange-600");
        for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      }
      newArr(temparr);
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
    arr.map((val, ind) => {
      a[ind].classList.remove("bg-green-600");
      a[ind].classList.remove("bg-red-600");
      a[ind].classList.add("bg-orange-600");
    });
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });
  }

  return (
    <arrContext.Provider value={{ array: arr }}>
      <div className="w-[100%] h-[100vh] bg-gray-900" id="main">
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
          <div className="w-[10rem] bg-gray-300 ml-[0.5rem] max-h-option-subOption text-lg" id="sort">
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
                document.getElementById('ppcont').disabled=false
                document.getElementById('play/pause').src=pause;
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
                document.getElementById('play/pause').src=play;
                let array = [];
                let i,
                  a = parseInt(Math.random() * 10);
                let b = a >= 3 ? a : 5;
                for (i = 0; i < b; i++) {
                  array[i] = parseInt(Math.random() * 100);
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
                  document.getElementById('play/pause').src=play;
                  let m = document.getElementById("newArray");
                  let regex = /^(?:\d{1,2},){0,19}\d{1,2}$/;

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
                      "!! Invalid list !! Please provide a valid list which consist of only numbers of 2 digits or less and comma (,) and upto 20 elements/numbers are allowed"
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
