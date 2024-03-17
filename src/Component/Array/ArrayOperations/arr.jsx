import React from "react";
import { useState, useEffect, createContext } from "react";
import { defaultarr, defaultarrlen } from "./array";
import ArrInGraph from "./ArrayInGraph";
import Codesider from "./codesider";
import Text from "./text";
import { msg } from "../../Footer";
import play from "../../../img&other/play.png";
import pause from "../../../img&other/pause.png";

export const arrContext = createContext([]);

export default function Arr(props) {
  const [arr, newArr] = useState(defaultarr);
  const [arrl, newArrL] = useState(defaultarrlen.length);
  const speech = window.speechSynthesis;
  let min = 0,
    max = 0;
  let a = [],
    b = [];
  useEffect(() => {
    document.getElementById("newArr").value = arr;
    arr.map((val, ind) => {
      a.push(document.getElementById("bar" + ind));
      a[ind].style.transition = "all 2s ease-out";
      a[ind].style.height = "2rem";
      a[ind].classList.remove("bg-green-500");
      a[ind].classList.remove("bg-yellow-500");
      a[ind].classList.remove("bg-blue-500");
      a[ind].classList.remove("border-green-500");
      a[ind].classList.remove("border-yellow-500");
      a[ind].classList.remove("border-blue-500");
      a[ind].classList.remove("text-white");
      a[ind].classList.remove("text-yellow-500");
    });
  }, [arr]);

  async function insert(m, mv) {
    let txt,
      c = document.getElementById("textContainer"),
      k;
    let n = document.getElementById("barContainer");
    document.getElementById("codeContainer").innerHTML = `
      <div class="px-2" id="br1">
      for (j = lenFilled - 1; j >= i; j--)
      </div>
    <div class="px-2 pl-2" id="br2">
    A[j + 1] = A[j]
    </div>
    <div class="px-2" id="br3">
    A[i] = v
    </div>
    <div class="px-2" id="br4">
    lenFilled++
      </div>`;
    b = [
      document.getElementById("br1"),
      document.getElementById("br2"),
      document.getElementById("br3"),
      document.getElementById("br4"),
    ];
    for (let i = arr.length - 1; i >= m; i--) {
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[0].classList.add("bg-gray-700");
      b[1].classList.add("bg-gray-700");
      txt =
        "Shift element at A[" +
        i +
        "] to one index backward to A[" +
        (i + 1) +
        "].";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      let tmp = document.getElementById("bar" + (i + 1));
      a[i].classList.add("bg-yellow-500");
      a[i].classList.add("border-yellow-500");
      a[i].classList.add("text-white");
      a[i].children[0].style.transform = `translateX(1rem)`;
      tmp.classList.add("bg-yellow-500");
      tmp.classList.add("border-yellow-500");
      tmp.classList.add("text-white");
      await new Promise((res) => setTimeout(res, 150));
      tmp.children[0].innerHTML = a[i].children[0].innerHTML;
      a[i].children[0].innerHTML = "";
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      a[i].children[0].style.transform = `translateX(0rem)`;
      a[i].classList.remove("bg-yellow-500");
      a[i].classList.remove("border-yellow-500");
      a[i].classList.remove("text-white");
      tmp.classList.remove("bg-yellow-500");
      tmp.classList.remove("border-yellow-500");
      tmp.classList.remove("text-white");
    }
    for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
    b[2].classList.add("bg-gray-700");
    txt = "A[" + m + "] = " + mv + ".";
    c.innerText = txt;
    msg.text = txt;
    speech.speak(msg);
    document.getElementById("bar" + m).children[0].innerHTML =
      "<b>" + mv + "</b>";
    document.getElementById("bar" + m).classList.add("bg-yellow-500");
    document.getElementById("bar" + m).classList.add("border-yellow-500");
    document.getElementById("bar" + m).classList.add("text-white");
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });
    for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
    b[3].classList.add("bg-gray-700");
    txt =
      "We increment lenFilled by 1 from " +
      arr.length +
      " to " +
      (arr.length + 1) +
      ".";
    c.innerText = txt;
    msg.text = txt;
    speech.speak(msg);
    document.getElementById("bar" + m).classList.remove("bg-yellow-500");
    document.getElementById("bar" + m).classList.remove("border-yellow-500");
    document.getElementById("bar" + m).classList.remove("text-white");
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });
    newArr([...arr.slice(0, m), mv, ...arr.slice(m)]);
  }
  async function remove(m) {
    let txt,
      c = document.getElementById("textContainer"),
      k;
    let n = document.getElementById("barContainer");
    document.getElementById("codeContainer").innerHTML = `
      <div class="px-2" id="br1">
      if empty, do nothing
      </div>
    <div class="px-2" id="br2">
    remove A[i]
    </div>
    <div class="px-2" id="br3">
    for (j = i + 1; j < lenFilled; j++)
    </div>
    <div class="px-2 pl-2" id="br4">
    A[j - 1] = A[j]
    </div>
    <div class="px-2" id="br5">
    lenFilled--
      </div>`;
    b = [
      document.getElementById("br1"),
      document.getElementById("br2"),
      document.getElementById("br3"),
      document.getElementById("br4"),
      document.getElementById("br5"),
    ];
    if (arr.length == 0) {
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[0].classList.add("bg-gray-700");
      txt = "The Array is already empty. No action is performed.";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
    } else {
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[1].classList.add("bg-gray-700");
      txt = "Remove A[" + m + "] = " + arr[m] + ".";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      a[m].classList.add("bg-yellow-500");
      a[m].classList.add("border-yellow-500");
      a[m].classList.add("text-white");
      a[m].children[0].innerHTML = "";
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      a[m].classList.remove("bg-yellow-500");
      a[m].classList.remove("border-yellow-500");
      a[m].classList.remove("text-white");
      for (let i = m + 1; i < arr.length; i++) {
        for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
        b[2].classList.add("bg-gray-700");
        b[3].classList.add("bg-gray-700");
        txt =
          "Shift element at A[" +
          (i + 1) +
          "] to one index forward to A[" +
          i +
          "].";
        c.innerText = txt;
        msg.text = txt;
        speech.speak(msg);
        a[i].classList.add("bg-yellow-500");
        a[i].classList.add("border-yellow-500");
        a[i].classList.add("text-white");
        a[i].children[0].style.transform = `translateX(-1rem)`;
        a[i - 1].classList.add("bg-yellow-500");
        a[i - 1].classList.add("border-yellow-500");
        a[i - 1].classList.add("text-white");
        await new Promise((res) => setTimeout(res, 150));
        a[i - 1].children[0].innerHTML = a[i].children[0].innerHTML;
        a[i].children[0].innerHTML = "";
        await new Promise((resolve) => {
          msg.addEventListener("end", () => {
            resolve();
          });
        });
        a[i - 1].children[0].style.transform = `translateX(0rem)`;
        a[i - 1].classList.remove("bg-yellow-500");
        a[i - 1].classList.remove("border-yellow-500");
        a[i - 1].classList.remove("text-white");
        a[i].classList.remove("bg-yellow-500");
        a[i].classList.remove("border-yellow-500");
        a[i].classList.remove("text-white");
      }
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[4].classList.add("bg-gray-700");
      txt =
        "We decrement lenFilled by 1 from " +
        arr.length +
        " to " +
        (arr.length - 1) +
        ".";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      newArr([...arr.slice(0, m), ...arr.slice(m + 1)]);
    }
  }
  async function minf() {
    let txt,
      c = document.getElementById("textContainer"),
      k;
    let n = document.getElementById("barContainer");
    document.getElementById("codeContainer").innerHTML = `
      <div class="px-2" id="br1">
      if empty, do nothing
      </div>
    <div class="px-2" id="br2">
    min = A[0]
    </div>
    <div class="px-2" id="br3">
    for (i = 1; i < lenFilled; i++)
    </div>
    <div class="px-2 pl-2" id="br4">
    if (A[i] < min)
    </div>
    <div class="px-2 pl-4" id="br5">
    min = A[i]
      </div>
      <div class="px-2" id="br6">
      return min
      </div>`;
    b = [
      document.getElementById("br1"),
      document.getElementById("br2"),
      document.getElementById("br3"),
      document.getElementById("br4"),
      document.getElementById("br5"),
      document.getElementById("br6"),
    ];
    if (arr.length == 0) {
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[0].classList.add("bg-gray-700");
      txt = "The Array is already empty. No action is performed.";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
    } else {
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[1].classList.add("bg-gray-700");
      txt = "We set " + arr[0] + " at index 0 as the current min of the array.";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      min = 0;
      a[0].classList.add("bg-yellow-500");
      a[0].classList.add("border-yellow-500");
      a[0].classList.add("text-white");
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      a[0].classList.remove("bg-yellow-500");
      a[0].classList.remove("text-white");
      a[0].classList.add("text-yellow-500");
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= arr[min]) {
          for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
          b[2].classList.add("bg-gray-700");
          txt = "A[i] = " + arr[i] + ".";
          c.innerText = txt;
          msg.text = txt;
          speech.speak(msg);
          a[i].classList.add("bg-yellow-500");
          a[i].classList.add("border-yellow-500");
          a[i].classList.add("text-white");
          await new Promise((resolve) => {
            msg.addEventListener("end", () => {
              resolve();
            });
          });
          a[i].classList.remove("bg-yellow-500");
          a[i].classList.remove("border-yellow-500");
          a[i].classList.remove("text-white");
        } else {
          for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
          b[3].classList.add("bg-gray-700");
          b[4].classList.add("bg-gray-700");
          txt =
            arr[i] +
            " < min = " +
            arr[min] +
            ". We update min to " +
            arr[i] +
            ".";
          c.innerText = txt;
          msg.text = txt;
          speech.speak(msg);
          a[i].classList.add("bg-yellow-500");
          a[i].classList.add("border-yellow-500");
          a[i].classList.add("text-white");
          await new Promise((resolve) => {
            msg.addEventListener("end", () => {
              resolve();
            });
          });
          a[min].classList.remove("text-yellow-500");
          a[min].classList.remove("border-yellow-500");
          a[i].classList.remove("bg-yellow-500");
          a[i].classList.remove("text-white");
          a[i].classList.add("text-yellow-500");
          min = i;
        }
      }
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[5].classList.add("bg-gray-700");
      txt = "The min value is " + arr[min] + ".";
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
  async function maxf() {
    let txt,
      c = document.getElementById("textContainer"),
      k;
    let n = document.getElementById("barContainer");
    document.getElementById("codeContainer").innerHTML = `
      <div class="px-2" id="br1">
      if empty, do nothing
      </div>
    <div class="px-2" id="br2">
    max = A[0]
    </div>
    <div class="px-2" id="br3">
    for (i = 1; i < lenFilled; i++)
    </div>
    <div class="px-2 pl-4" id="br4">
    if (A[i] > max)
    </div>
    <div class="px-2 pl-6" id="br5">
    max = A[i]
      </div>
      <div class="px-2" id="br6">
      return max
      </div>`;
    b = [
      document.getElementById("br1"),
      document.getElementById("br2"),
      document.getElementById("br3"),
      document.getElementById("br4"),
      document.getElementById("br5"),
      document.getElementById("br6"),
    ];
    if (arr.length == 0) {
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[0].classList.add("bg-gray-700");
      txt = "The Array is already empty. No action is performed.";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
    } else {
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[1].classList.add("bg-gray-700");
      txt = "We set " + arr[0] + " at index 0 as the current min of the array.";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      max = 0;
      a[0].classList.add("bg-yellow-500");
      a[0].classList.add("border-yellow-500");
      a[0].classList.add("text-white");
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      a[0].classList.remove("bg-yellow-500");
      a[0].classList.remove("text-white");
      a[0].classList.add("text-yellow-500");
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[max]) {
          for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
          b[2].classList.add("bg-gray-700");
          txt = "A[i] = " + arr[i] + ".";
          c.innerText = txt;
          msg.text = txt;
          speech.speak(msg);
          a[i].classList.add("bg-yellow-500");
          a[i].classList.add("border-yellow-500");
          a[i].classList.add("text-white");
          await new Promise((resolve) => {
            msg.addEventListener("end", () => {
              resolve();
            });
          });
          a[i].classList.remove("bg-yellow-500");
          a[i].classList.remove("border-yellow-500");
          a[i].classList.remove("text-white");
        } else {
          for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
          b[3].classList.add("bg-gray-700");
          b[4].classList.add("bg-gray-700");
          txt =
            arr[i] +
            " > max = " +
            arr[max] +
            ". We update max to " +
            arr[i] +
            ".";
          c.innerText = txt;
          msg.text = txt;
          speech.speak(msg);
          a[i].classList.add("bg-yellow-500");
          a[i].classList.add("border-yellow-500");
          a[i].classList.add("text-white");
          await new Promise((resolve) => {
            msg.addEventListener("end", () => {
              resolve();
            });
          });
          a[max].classList.remove("text-yellow-500");
          a[max].classList.remove("border-yellow-500");
          a[i].classList.remove("bg-yellow-500");
          a[i].classList.remove("text-white");
          a[i].classList.add("text-yellow-500");
          max = i;
        }
      }
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[5].classList.add("bg-gray-700");
      txt = "The max value is " + arr[max] + ".";
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
  async function update(m, mv) {
    let txt,
      c = document.getElementById("textContainer"),
      k;
    let n = document.getElementById("barContainer");
    document.getElementById("codeContainer").innerHTML = `
      <div class="px-2" id="br1">
      A[idx] = v
      </div>`;
    b = [document.getElementById("br1")];
    for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
    b[0].classList.add("bg-gray-700");
    txt = "A[" + m + "] = " + mv + ".";
    c.innerText = txt;
    msg.text = txt;
    speech.speak(msg);
    a[m].children[0].innerHTML = "<b>" + mv + "</b>";
    a[m].classList.add("bg-yellow-500");
    a[m].classList.add("border-yellow-500");
    a[m].classList.add("text-white");
    min = m;
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });
  }

  return (
    <arrContext.Provider value={{ array: arr, arrlen: defaultarrlen }}>
      <div class="w-[100%] h-[87vh] bg-gray-900" id="main">
        <ArrInGraph />
        <Codesider />
        <Text />
        <div class="w-[57rem] absolute bottom-[10%] h-[35.5%] flex max-h-option max-sm:hidden">
          <button
            class="bg-yellow-600 w-[3rem] h-[100%] text-[3rem] max-h-option-button"
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
                document.getElementById("subUserInp").classList.add("hidden");
                document.getElementById("subUserInpR").classList.add("hidden");
                let op = [...document.getElementsByClassName("hide")];
                op.map((v) => {
                  v.classList.add("hidden");
                });
              }
            }}
            id="stbtn"
          >
            {"<"}
          </button>
          <div
            class=" bg-gray-300 ml-[0.5rem] max-h-option-subOption text-lg"
            id="sort"
          >
            <button
              class="w-[100%] h-10 mt-4 bg-yellow-600 text-center max-h-newArr"
              onClick={(e) => {
                let m = document.getElementById("newArrContainer");
                if (m.classList.contains("hidden")) {
                  let op = [...document.getElementsByClassName("hide")];
                  op.map((v) => {
                    v.classList.add("hidden");
                  });
                  m.classList.remove("hidden");
                } else {
                  let op = [...document.getElementsByClassName("hide")];
                  op.map((v) => {
                    v.classList.add("hidden");
                  });
                  m.classList.add("hidden");
                }
                document.getElementById("subUserInp").classList.add("hidden");
                document.getElementById("subUserInpR").classList.add("hidden");
                document
                  .getElementById("newSelectContainer")
                  .classList.add("hidden");
              }}
            >
              Create(A)
            </button>
            <button
              class="w-[100%] h-10 mt-1 bg-yellow-600 text-center max-h-newArr"
              onClick={(e) => {
                let m = document.getElementById("newInsertContainer");
                if (m.classList.contains("hidden")) {
                  let op = [...document.getElementsByClassName("hide")];
                  op.map((v) => {
                    v.classList.add("hidden");
                  });
                  m.classList.remove("hidden");
                } else {
                  let op = [...document.getElementsByClassName("hide")];
                  op.map((v) => {
                    v.classList.add("hidden");
                  });
                  m.classList.add("hidden");
                }
                document.getElementById("subUserInp").classList.add("hidden");
                document.getElementById("subUserInpR").classList.add("hidden");
                document
                  .getElementById("newSelectContainer")
                  .classList.add("hidden");
                document
                  .getElementById("newArrContainer")
                  .classList.add("hidden");
              }}
            >
              Insert
            </button>
            <button
              class="w-[100%] h-10 mt-1 bg-yellow-600 text-center max-h-newArr"
              onClick={(e) => {
                e.preventDefault();
                let m = document.getElementById("newRemoveContainer");
                if (m.classList.contains("hidden")) {
                  let op = [...document.getElementsByClassName("hide")];
                  op.map((v) => {
                    v.classList.add("hidden");
                  });
                  m.classList.remove("hidden");
                } else {
                  let op = [...document.getElementsByClassName("hide")];
                  op.map((v) => {
                    v.classList.add("hidden");
                  });
                  m.classList.add("hidden");
                }
                document.getElementById("subUserInp").classList.add("hidden");
                document.getElementById("subUserInpR").classList.add("hidden");
                document
                  .getElementById("newSelectContainer")
                  .classList.add("hidden");
                document
                  .getElementById("newArrContainer")
                  .classList.add("hidden");
              }}
            >
              Remove
            </button>
            <button
              class="w-[100%] h-10 mt-1 bg-yellow-600 text-center max-h-sort"
              onClick={(e) => {
                let m = document.getElementById("newSelectContainer");
                if (m.classList.contains("hidden")) {
                  let op = [...document.getElementsByClassName("hide")];
                  op.map((v) => {
                    v.classList.add("hidden");
                  });
                  m.classList.remove("hidden");
                } else {
                  let op = [...document.getElementsByClassName("hide")];
                  op.map((v) => {
                    v.classList.add("hidden");
                  });
                  m.classList.add("hidden");
                }
                document.getElementById("subUserInp").classList.add("hidden");
                document.getElementById("subUserInpR").classList.add("hidden");
                document
                  .getElementById("newArrContainer")
                  .classList.add("hidden");
              }}
            >
              Select
            </button>
            <button
              class="w-[100%] h-10 mt-1 bg-yellow-600 text-center max-h-newArr"
              onClick={(e) => {
                let m = document.getElementById("newUpdateContainer");
                if (m.classList.contains("hidden")) {
                  let op = [...document.getElementsByClassName("hide")];
                  op.map((v) => {
                    v.classList.add("hidden");
                  });
                  m.classList.remove("hidden");
                } else {
                  let op = [...document.getElementsByClassName("hide")];
                  op.map((v) => {
                    v.classList.add("hidden");
                  });
                  m.classList.add("hidden");
                }
                document.getElementById("subUserInp").classList.add("hidden");
                document.getElementById("subUserInpR").classList.add("hidden");
                document
                  .getElementById("newSelectContainer")
                  .classList.add("hidden");
                document
                  .getElementById("newArrContainer")
                  .classList.add("hidden");
              }}
            >
              Update
            </button>
          </div>
          <div
            class="ml-[0.5rem] pl-[0.5rem] mt-4 h-8 bg-yellow-300 flex items-center hidden max-h-newArr-ins"
            id="newArrContainer"
          >
            <button
              class="bg-green-500 px-[0.5rem] mr-2"
              onClick={(e) => {
                e.preventDefault();
                newArr([]);
                let o = document.getElementById("barContainer");
                let op = [...document.getElementsByClassName("hide")];
                op.map((v) => {
                  v.classList.add("hidden");
                });
                document.getElementById("subUserInp").classList.add("hidden");
                document.getElementById("subUserInpR").classList.add("hidden");
                o.innerHTML = ``;
                newArrL(0);
              }}
            >
              Empty
            </button>
            <form>
              <div class="flex flex-col h-[25px]" id="userInp">
                <button
                  class="bg-green-500 px-[0.5rem] mr-2"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("subUserInp")
                      .classList.add("hidden");
                    document
                      .getElementById("subUserInpR")
                      .classList.remove("hidden");
                    document.getElementById("newArr").focus();
                  }}
                >
                  Random
                </button>
                <div
                  className="hidden px-[0.5rem] pb-1 bg-green-500 mr-2"
                  id="subUserInpR"
                >
                  <label>Array Size = </label>
                  <input
                    class="mr-[0.5rem] max-h-newArr-input"
                    defaultValue={parseInt(Math.floor(Math.random() * 7) + 10)}
                    size={2}
                    id="newArrL"
                  />
                  <button
                    class="bg-green-700 px-[0.5rem]"
                    onClick={(e) => {
                      e.preventDefault();
                      speech.cancel();
                      let c = parseInt(
                        document.getElementById("newArrL").value
                      );
                      if (c <= 20) {
                        document.getElementById("play/pause").src = play;
                        let array = [],
                          arrlen = [];
                        let i,
                          a = parseInt(Math.floor(Math.random() * 10) + 1);
                        for (i = 0; i < a; i++) {
                          array[i] = parseInt(
                            Math.floor(Math.random() * 199) - 99
                          );
                        }
                        for (i = 0; i < c; i++) {
                          arrlen[i] = i;
                        }
                        let o = document.getElementById("barContainer");
                        o.innerHTML = ``;
                        arrlen.map((val) => {
                          o.innerHTML += `<div>
                        <div
                          class="w-[4rem] text-center border-2 border-black h-[2rem] border-collapse mr-[-1.6px] transition-all duration-[2s] ease-in-out"
                          id="bar${val}"
                        ><div></div></div>
                        <div class="relative left-5 text-red-700" id="title${val}"><b>${val}</b></div>
                      </div>`;
                        });
                        newArrL(c);
                        newArr(
                          array.map((val, i) => {
                            document.getElementById(
                              "bar" + i
                            ).innerHTML = `<b>${val}</b>`;
                            return val;
                          })
                        );
                      } else alert("Sorry, the maximum size is 20");
                    }}
                  >
                    Go
                  </button>
                </div>
              </div>
            </form>
            <form>
              <div class="flex flex-col h-[25px]" id="userInp">
                <button
                  class="bg-green-500 px-[0.5rem] mr-2"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("subUserInpR")
                      .classList.add("hidden");
                    document
                      .getElementById("subUserInp")
                      .classList.remove("hidden");
                    document.getElementById("newArr1").focus();
                  }}
                >
                  User Defined List
                </button>
                <div
                  className="hidden px-[0.5rem] pb-1 bg-green-500 mr-2"
                  id="subUserInp"
                >
                  <label>Array Size = </label>
                  <input
                    class="mr-[0.5rem] mb-1 max-h-newArr-input"
                    defaultValue={arrl}
                    size={2}
                    id="newArr1"
                  />
                  <br />
                  <label>Elements = </label>
                  <input
                    class="mr-[0.5rem] max-h-newArr-input"
                    defaultValue={arr}
                    size={14}
                    id="newArr"
                  />
                  <button
                    class="bg-green-700 px-[0.5rem]"
                    onClick={(e) => {
                      e.preventDefault();
                      speech.cancel();
                      document.getElementById("play/pause").src = play;
                      let m = document.getElementById("newArr");
                      let md = document.getElementById("newArr1");
                      let regex = /^(-?\d{1,2})(,\s?-?\d{1,2})*$/;
                      if (regex.test(m.value)) {
                        let n = m.value.split(",");
                        if (n.length <= 20) {
                          if (parseInt(md.value) >= n.length) {
                            let arrlen=[]
                            for (let i = 0; i < parseInt(md.value); i++) {
                              arrlen[i] = i;
                            }
                            let o = document.getElementById("barContainer");
                            o.innerHTML = ``;
                            arrlen.map((val) => {
                              o.innerHTML += `<div>
                            <div
                              class="w-[4rem] text-center border-2 border-black h-[2rem] border-collapse mr-[-1.6px] transition-all duration-[2s] ease-in-out"
                              id="bar${val}"
                            ><div></div></div>
                            <div class="relative left-5 text-red-700" id="title${val}"><b>${val}</b></div>
                          </div>`;
                            });
                            newArrL(parseInt(md.value));
                            newArrL(n.length);
                            newArr(
                              n.map((val, i) => {
                                document.getElementById(
                                  "bar" + i
                                ).innerHTML = `<b>${val}</b>`;
                                return parseInt(val);
                              })
                            );
                          } else
                            alert("Sorry, No. of elements > Size of Array");
                        } else alert("Sorry, the maximum size is 20");
                      } else {
                        alert(
                          "Invalid array Please provide a valid array must consist of only numbers between -99 and 99 and comma (,)"
                        );
                      }
                    }}
                  >
                    Go
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div
            class="ml-[0.5rem] pl-[0.5rem] mt-[16.5%] h-8 bg-yellow-300 flex items-center hidden max-h-newList-ins hide"
            id="newSelectContainer"
          >
            <button
              class="bg-green-500 px-[0.5rem] mr-4"
              onClick={(e) => {
                e.preventDefault();
                if (a[min]) {
                  a[min].classList.remove("border-yellow-500");
                  a[min].classList.remove("bg-yellow-500");
                  a[min].classList.remove("text-white");
                  a[min].classList.remove("text-yellow-500");
                }
                if (a[max]) {
                  a[max].classList.remove("border-yellow-500");
                  a[max].classList.remove("bg-yellow-500");
                  a[max].classList.remove("text-white");
                  a[max].classList.remove("text-yellow-500");
                }
                let op = [...document.getElementsByClassName("hide")];
                op.map((v) => {
                  v.classList.add("hidden");
                });
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
                document.getElementById("subUserInp").classList.add("hidden");
                document.getElementById("subUserInpR").classList.add("hidden");
                minf();
              }}
            >
              Min
            </button>
            <button
              class="bg-green-500 px-[0.5rem] mr-4"
              onClick={(e) => {
                e.preventDefault();
                if (a[min]) {
                  a[min].classList.remove("border-yellow-500");
                  a[min].classList.remove("bg-yellow-500");
                  a[min].classList.remove("text-white");
                  a[min].classList.remove("text-yellow-500");
                }
                if (a[max]) {
                  a[max].classList.remove("border-yellow-500");
                  a[max].classList.remove("bg-yellow-500");
                  a[max].classList.remove("text-white");
                  a[max].classList.remove("text-yellow-500");
                }
                let op = [...document.getElementsByClassName("hide")];
                op.map((v) => {
                  v.classList.add("hidden");
                });
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
                document.getElementById("subUserInp").classList.add("hidden");
                document.getElementById("subUserInpR").classList.add("hidden");
                maxf();
              }}
            >
              Max
            </button>
          </div>
          <div
            class="ml-[0.5rem] pl-[0.5rem] mt-16 h-8 bg-yellow-300 flex items-center hidden max-h-newList-ins hide"
            id="newInsertContainer"
          >
            <form>
              <label>i = </label>
              <input
                class="mr-[0.5rem] max-h-newList-input"
                defaultValue={parseInt(Math.floor(Math.random() * arr.length))}
                size={4}
                id="newInsert"
              />
              <label>v = </label>
              <input
                class="mr-[0.5rem] max-h-newList-input"
                defaultValue={parseInt(Math.floor(Math.random() * 199) - 99)}
                size={4}
                id="newInsertv"
              />
              <button
                class="bg-green-700 px-[0.5rem]"
                onClick={(e) => {
                  e.preventDefault();
                  if (a[min]) {
                    a[min].classList.remove("border-yellow-500");
                    a[min].classList.remove("bg-yellow-500");
                    a[min].classList.remove("text-white");
                    a[min].classList.remove("text-yellow-500");
                  }
                  if (a[max]) {
                    a[max].classList.remove("border-yellow-500");
                    a[max].classList.remove("bg-yellow-500");
                    a[max].classList.remove("text-white");
                    a[max].classList.remove("text-yellow-500");
                  }
                  if (arr.length < arrl) {
                    let ins = document.getElementById("newInsert").value;
                    if (parseInt(ins) <= arr.length) {
                      let op = [...document.getElementsByClassName("hide")];
                      op.map((v) => {
                        v.classList.add("hidden");
                      });
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
                      document
                        .getElementById("subUserInp")
                        .classList.add("hidden");
                      document
                        .getElementById("subUserInpR")
                        .classList.add("hidden");
                      let insv = document.getElementById("newInsertv").value;
                      insert(parseInt(ins), parseInt(insv));
                    } else alert("Input i should be 0 <= i <= lenFilled");
                    document.getElementById("newInsert").value = parseInt(
                      Math.floor(Math.random() * arr.length)
                    );
                    document.getElementById("newInsertv").value = parseInt(
                      Math.floor(Math.random() * 199) - 99
                    );
                  } else
                    alert(
                      "Sorry, the maximum number of elements that can store inside array has reached"
                    );
                }}
              >
                Go
              </button>
            </form>
          </div>
          <div
            class="ml-[0.5rem] pl-[0.5rem] mt-[11.7%] h-8 bg-yellow-300 flex items-center hidden max-h-newList-ins hide"
            id="newRemoveContainer"
          >
            <form>
              <label>i = </label>
              <input
                class="mr-[0.5rem] max-h-newList-input"
                defaultValue={parseInt(Math.floor(Math.random() * arr.length))}
                size={10}
                id="newRemove"
              />
              <button
                class="bg-green-700 px-[0.5rem]"
                onClick={(e) => {
                  e.preventDefault();
                  if (a[min]) {
                    a[min].classList.remove("border-yellow-500");
                    a[min].classList.remove("bg-yellow-500");
                    a[min].classList.remove("text-white");
                    a[min].classList.remove("text-yellow-500");
                  }
                  if (a[max]) {
                    a[max].classList.remove("border-yellow-500");
                    a[max].classList.remove("bg-yellow-500");
                    a[max].classList.remove("text-white");
                    a[max].classList.remove("text-yellow-500");
                  }
                  let rm = document.getElementById("newRemove").value;
                  if (parseInt(rm) < arr.length || parseInt(rm) == 0) {
                    let op = [...document.getElementsByClassName("hide")];
                    op.map((v) => {
                      v.classList.add("hidden");
                    });
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
                    document
                      .getElementById("subUserInp")
                      .classList.add("hidden");
                    document
                      .getElementById("subUserInpR")
                      .classList.add("hidden");
                    remove(parseInt(rm));
                  } else alert("Input i should be 0 <= i < lenFilled");
                  document.getElementById("newRemove").value = parseInt(
                    Math.floor(Math.random() * arr.length)
                  );
                }}
              >
                Go
              </button>
            </form>
          </div>
          <div
            class="ml-[0.5rem] pl-[0.5rem] mt-[21.5%] h-8 bg-yellow-300 flex items-center hidden max-h-newList-ins hide"
            id="newUpdateContainer"
          >
            <form>
              <label>i = </label>
              <input
                class="mr-[0.5rem] max-h-newList-input"
                defaultValue={parseInt(Math.floor(Math.random() * arr.length))}
                size={4}
                id="newUpdate"
              />
              <label>v = </label>
              <input
                class="mr-[0.5rem] max-h-newList-input"
                defaultValue={parseInt(Math.floor(Math.random() * 199) - 99)}
                size={4}
                id="newUpdatev"
              />
              <button
                class="bg-green-700 px-[0.5rem]"
                onClick={(e) => {
                  e.preventDefault();
                  if (a[min]) {
                    a[min].classList.remove("border-yellow-500");
                    a[min].classList.remove("bg-yellow-500");
                    a[min].classList.remove("text-white");
                    a[min].classList.remove("text-yellow-500");
                  }
                  if (a[max]) {
                    a[max].classList.remove("border-yellow-500");
                    a[max].classList.remove("bg-yellow-500");
                    a[max].classList.remove("text-white");
                    a[max].classList.remove("text-yellow-500");
                  }
                  if (arr.length < arrl) {
                    let ins = document.getElementById("newUpdate").value;
                    if (parseInt(ins) <= arr.length) {
                      let op = [...document.getElementsByClassName("hide")];
                      op.map((v) => {
                        v.classList.add("hidden");
                      });
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
                      document
                        .getElementById("subUserInp")
                        .classList.add("hidden");
                      document
                        .getElementById("subUserInpR")
                        .classList.add("hidden");
                      let insv = document.getElementById("newUpdatev").value;
                      update(parseInt(ins), parseInt(insv));
                    } else alert("Input i should be 0 <= i <= lenFilled");
                    document.getElementById("newUpdate").value = parseInt(
                      Math.floor(Math.random() * arr.length)
                    );
                    document.getElementById("newUpdatev").value = parseInt(
                      Math.floor(Math.random() * 199) - 99
                    );
                  } else
                    alert(
                      "Sorry, the maximum number of elements that can store inside array has reached"
                    );
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
