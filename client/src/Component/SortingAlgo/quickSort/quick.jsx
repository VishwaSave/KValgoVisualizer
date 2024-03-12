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

export default function Quick(props) {
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

  let temparr = arr,
    txt,
    k,
    c;
  const [tarr, newTarr] = useState([]);
  const quickSort = async (narr, low, high) => {
    if (low < high) {
      const partitionIndex = await partition(narr, low, high);
      await Promise.all([
        quickSort(narr, low, partitionIndex - 1),
        quickSort(narr, partitionIndex + 1, high),
      ]);
    } else {
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[0].classList.add("bg-gray-700");
      txt =
        "Working on partition [" +
        narr[high] +
        "] (index " +
        high +
        " to " +
        high +
        "). Since partition size == 1, element inside partition is necessarily at sorted position.";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      a[high].classList.remove("bg-green-600");
      a[high].classList.remove("bg-red-600");
      a[high].classList.remove("bg-blue-600");
      a[high].classList.remove("bg-yellow-600");
      a[high].classList.add("bg-yellow-600");
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
    }
  };

  const partition = async (narr, low, high) => {
    const pivot = narr[low];

    let i = low;
    for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
    b[0].classList.add("bg-gray-700");
    b[1].classList.add("bg-gray-700");
    b[2].classList.add("bg-gray-700");
    txt =
      "Working on partition [" +
      narr +
      "] (index " +
      low +
      " to " +
      (high + 1) +
      "). Selecting " +
      narr[low] +
      " as pivot. (storeIndex = " +
      i +
      ").";
    c.innerText = txt;
    msg.text =
      "Working on given partition (index " +
      low +
      " to " +
      high +
      "). Selecting " +
      narr[low] +
      " as pivot. (storeIndex = " +
      i +
      ").";
    speech.speak(msg);
    a[low].classList.remove("bg-green-600");
    a[low].classList.remove("bg-red-600");
    a[low].classList.remove("bg-blue-600");
    a[low].classList.remove("bg-yellow-600");
    a[low].classList.add("bg-yellow-600");
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });
    for (let j = low + 1; j <= high; j++) {
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[3].classList.add("bg-gray-700");
      b[4].classList.add("bg-gray-700");
      txt =
        "Checking if " +
        narr[j] +
        " < " +
        pivot +
        " (pivot) (or if they are equal but 50% lucky).";
      c.innerText = txt;
      msg.text =
        "Checking if " +
        narr[j] +
        " less than " +
        pivot +
        " (pivot) (or if they are equal but 50% lucky).";
      speech.speak(msg);
      a[j].classList.remove("bg-green-600");
      a[j].classList.remove("bg-red-600");
      a[j].classList.remove("bg-blue-600");
      a[j].classList.remove("bg-yellow-600");
      a[j].classList.add("bg-red-600");
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      if (narr[j] < pivot) {
        i++;
        for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
        b[3].classList.add("bg-gray-700");
        b[5].classList.add("bg-gray-700");
        txt =
          narr[j] +
          " < " +
          pivot +
          " (pivot) is true. Swapping index " +
          (j + 1) +
          " (value = " +
          narr[j] +
          ") with element at storeIndex " +
          (i - 1) +
          " (value = " +
          narr[i] +
          "). (Value of storeIndex is now = " +
          i +
          ").";
        c.innerText = txt;
        msg.text =
          narr[j] +
          " less than " +
          pivot +
          " (pivot) is true. Swapping index " +
          (j + 1) +
          " (value = " +
          narr[j] +
          ") with element at storeIndex " +
          (i - 1) +
          " (value = " +
          narr[i] +
          "). (Value of storeIndex is now = " +
          i +
          ").";
        speech.speak(msg);
        [narr[i], narr[j]] = [narr[j], narr[i]];
        [a[i].style.height, a[j].style.height] = [
          a[j].style.height,
          a[i].style.height,
        ];
        [a[j].children[0].innerText, a[i].children[0].innerText] = [
          a[i].children[0].innerText,
          a[j].children[0].innerText,
        ];
        a[j].classList.remove("bg-green-600");
        a[j].classList.remove("bg-red-600");
        a[j].classList.remove("bg-blue-600");
        a[j].classList.remove("bg-yellow-600");
        a[j].classList.add("bg-blue-600");
        a[i].classList.remove("bg-green-600");
        a[i].classList.remove("bg-red-600");
        a[i].classList.remove("bg-blue-600");
        a[i].classList.remove("bg-yellow-600");
        a[i].classList.add("bg-green-600");
        newTarr([...narr]);
        await new Promise((resolve) => {
          msg.addEventListener("end", () => {
            resolve();
          });
        });
      } else {
        a[j].classList.remove("bg-green-600");
        a[j].classList.remove("bg-red-600");
        a[j].classList.remove("bg-blue-600");
        a[j].classList.remove("bg-yellow-600");
        a[j].classList.add("bg-blue-600");
      }
    }
    for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
    txt = "Iteration complete";
    c.innerText = txt;
    msg.text = txt;
    speech.speak(msg);
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });
    for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
    b[6].classList.add("bg-gray-700");
    txt =
      "Swapping pivot (index = " +
      i +
      ", value = " +
      narr[i] +
      ") with element at storeIndex - 1 (index = " +
      (i - 1) +
      ", value = " +
      narr[i - 1] +
      ").";
    c.innerText = txt;
    msg.text = txt;
    speech.speak(msg);
    [narr[low], narr[i]] = [narr[i], narr[low]];
    [a[low].style.height, a[i].style.height] = [
      a[i].style.height,
      a[low].style.height,
    ];
    [a[low].children[0].innerText, a[i].children[0].innerText] = [
      a[i].children[0].innerText,
      a[low].children[0].innerText,
    ];
    a[low].classList.remove("bg-green-600");
    a[low].classList.remove("bg-red-600");
    a[low].classList.remove("bg-blue-600");
    a[low].classList.remove("bg-yellow-600");
    a[low].classList.add("bg-green-600");
    a[i].classList.remove("bg-green-600");
    a[i].classList.remove("bg-red-600");
    a[i].classList.remove("bg-blue-600");
    a[i].classList.remove("bg-yellow-600");
    a[i].classList.add("bg-yellow-600");
    newTarr([...narr]);
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });

    return i;
  };

  const sorting = async () => {
    c = document.getElementById("textContainer");
    b = [
      document.getElementById("br1"),
      document.getElementById("br2"),
      document.getElementById("br3"),
      document.getElementById("br4"),
      document.getElementById("br5"),
      document.getElementById("br6"),
      document.getElementById("br7"),
    ];
    if (!(arr.length == 1)) {
      await quickSort(temparr, 0, temparr.length - 1);
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      txt = "List is sorted!";
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
  };

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
            className="w-[26rem] ml-[0.5rem] pl-[0.5rem] mt-4 h-8 bg-yellow-300 flex items-center hidden max-h-newArr-ins"
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
                  document.getElementById("play/pause").src = play;
                  let m = document.getElementById("newArray");
                  let regex = /^\d{1,2}(,\d{1,2})*$/;
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
