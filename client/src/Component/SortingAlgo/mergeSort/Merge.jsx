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

export default function Merge(props) {
  let e;
  const [arr, newArr] = useState(defaultarr);
  const [elementColors, setElementColors] = useState([]);
  const speech = window.speechSynthesis;
  let a = [];
  useEffect(() => {
    document.getElementById("newArray").value = arr;
    arr.map((val, ind) => {
      a.push(document.getElementById("bar" + ind));
      a[ind].style.transition = "all 2s ease-out";
      a[ind].classList.add("new");
    });
  }, [arr]);

  let k,
    temparr = arr;

    const generateRandomColor = () => {
      const minColorValue = 100;
      const randomColor = () => Math.floor(Math.random() * (255 - minColorValue) + minColorValue);
      return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    };
  
    const isColorUnique = (color) => {
      return !elementColors.includes(color);
    };
  
    const renderElements = () => {
      const elements = [];
      for (let i = 0; i < a.length; i++) {
        let uniqueColor;
        do {
          uniqueColor = generateRandomColor();
        } while (!isColorUnique(uniqueColor));
  
        a[i].style.backgroundColor=uniqueColor
        setElementColors((prevColors) => [...prevColors, uniqueColor]);
      }
      return elements;
    };
  async function mergeSort(arr, resp) {
    let c = document.getElementById("textContainer"),
      txt;
    let b = [
      document.getElementById("br1"),
      document.getElementById("br2"),
      document.getElementById("br3"),
      document.getElementById("br4"),
      document.getElementById("br5"),
    ];
    let left, right, middle, l, r;
    if (arr) {
      if (arr.length <= 1) {
        return arr;
      }
      middle = Math.floor(arr.length / 2);
      l = resp.slice(0, middle);
      r = resp.slice(middle);
      left = arr.slice(0, middle);
      right = arr.slice(middle);
    } else {
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[0].classList.add("bg-gray-700");
      txt =
        "We split the array into partitions of 1 (each partition takes on a distinct color).";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      renderElements();
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      if (temparr.length <= 1) {
        return arr;
      }
      middle = Math.floor(temparr.length / 2);
      l = a.slice(0, middle);
      r = a.slice(middle);
      left = temparr.slice(0, middle);
      right = temparr.slice(middle);
    }
    return merge(await mergeSort(left, l), l, r, await mergeSort(right, r));
  }

  async function merge(left, l, r, right) {
    let c = document.getElementById("textContainer"),
      txt;
    let b = [
      document.getElementById("br1"),
      document.getElementById("br2"),
      document.getElementById("br3"),
      document.getElementById("br4"),
      document.getElementById("br5"),
    ];
    let aa = document.getElementById("extra");
    let bb = document.getElementById("barContainer");
    let ex = aa.getBoundingClientRect(),
      h;
    let result = [],
      tr = [],
      z;
    let leftIndex = 0;
    let rightIndex = 0;
    let lColor = [],
      rColor = [];
    l.map((val, ind) => {
      lColor[ind] = val.style.backgroundColor;
    });
    r.map((val, ind) => {
      rColor[ind] = val.style.backgroundColor;
    });
    while (leftIndex < left.length && rightIndex < right.length) {
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[1].classList.add("bg-gray-700");
      txt =
        "Merge partitions " +
        left +
        " (index " +
        l[0].id[3] +
        " to " +
        l[left.length - 1].id[3] +
        ") and " +
        right +
        " (index " +
        r[0].id[3] +
        " to " +
        r[right.length - 1].id[3] +
        ").";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      let count = 0;
      for (let k = 0; k < bb.children.length; k++) {
        if (bb.children[k].classList.contains("new")) {
          if (parseInt(bb.children[k].children[0].innerText) == left[leftIndex])
            count++;
        }
      }
      if (count == 1) {
        for (let k = 0; k < bb.children.length; k++) {
          if (bb.children[k].classList.contains("new")) {
            if (
              parseInt(bb.children[k].children[0].innerText) == left[leftIndex]
            ) {
              l[leftIndex] = bb.children[k];
              break;
            }
          }
        }
      }
      count = 0;
      for (let k = 0; k < bb.children.length; k++) {
        if (bb.children[k].classList.contains("new")) {
          if (
            parseInt(bb.children[k].children[0].innerText) == right[rightIndex]
          ) {
            count++;
          }
        }
      }
      if (count == 1) {
        for (let k = 0; k < bb.children.length; k++) {
          if (bb.children[k].classList.contains("new")) {
            if (
              parseInt(bb.children[k].children[0].innerText) ==
              right[rightIndex]
            ) {
              r[rightIndex] = bb.children[k];
              break;
            }
          }
        }
      }
      l[leftIndex].style.backgroundColor = "";
      r[rightIndex].style.backgroundColor = "";
      l[leftIndex].classList.add("bg-green-400");
      r[rightIndex].classList.add("bg-green-400");
      l[leftIndex].classList.remove("bg-green-400");
      r[rightIndex].classList.remove("bg-green-400");
      l[leftIndex].classList.add("bg-red-600");
      r[rightIndex].classList.add("bg-red-600");
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      if (left[leftIndex] <= right[rightIndex]) {
        const placeholderDiv = document.createElement("div");
        placeholderDiv.classList.add(
          "w-[3rem]",
          "m-[0.2rem]",
          "placeh",
          l[leftIndex].id
        );
        for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
        b[2].classList.add("bg-gray-700");
        txt =
          "Since " +
          left[leftIndex] +
          " (left partition) <= " +
          right[rightIndex] +
          " (right partition), we take " +
          left[leftIndex] +
          ".";
        c.innerText = txt;
        if (left[leftIndex] === right[rightIndex]) {
          msg.text =
            "Since " +
            left[leftIndex] +
            " (left partition) equal to " +
            right[rightIndex] +
            " (right partition), we take " +
            left[leftIndex] +
            ".";
        } else {
          msg.text =
            "Since " +
            left[leftIndex] +
            " (left partition) less than " +
            right[rightIndex] +
            " (right partition), we take " +
            left[leftIndex] +
            ".";
        }
        let count = 0,
          z;
        for (let k = aa.children.length - 1; k >= 0; k--) {
          if (aa.children[k].classList.contains("new")) break;
          count--;
        }
        if (count != -aa.children.length)
          z = aa.children[aa.children.length + count].getBoundingClientRect();
        else {
          if (l.concat(r).length == a.length) {
            z = aa.children[0].getBoundingClientRect();
          } else {
            z = aa.children[parseInt(l[0].id[3])].getBoundingClientRect();
          }
        }
        h = l[leftIndex].getBoundingClientRect();
        l[leftIndex].style.transform = `translate(${z.left - h.x}px,${
          ex.bottom - h.bottom - 2.5
        }px)`;
        speech.speak(msg);
        tr.push(l[leftIndex]);
        result.push(left[leftIndex]);
        await new Promise((resolve) => {
          msg.addEventListener("end", () => {
            resolve();
          });
        });
        let nw = l[leftIndex];
        bb.replaceChild(placeholderDiv, l[leftIndex]);
        count = 0;
        for (let k = aa.children.length - 1; k >= 0; k--) {
          if (aa.children[k].classList.contains("new")) break;
          count--;
        }
        if (count != -aa.children.length)
          aa.replaceChild(nw, aa.children[aa.children.length + count]);
        else {
          if (l.concat(r).length == a.length) {
            aa.replaceChild(nw, aa.children[0]);
          } else {
            aa.replaceChild(nw, aa.children[parseInt(l[0].id[3])]);
          }
        }
        nw.style.transition = "";
        nw.style.transform = "translate(0px,0px)";
        nw.style.transition = "all 2s ease-out";
        leftIndex++;
      } else {
        const placeholderDiv = document.createElement("div");
        placeholderDiv.classList.add(
          "w-[3rem]",
          "m-[0.2rem]",
          "placeh",
          r[rightIndex].id
        );
        for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
        b[3].classList.add("bg-gray-700");
        txt =
          "Since " +
          left[leftIndex] +
          " (left partition) > " +
          right[rightIndex] +
          " (right partition), we take " +
          right[rightIndex] +
          ".";
        c.innerText = txt;
        msg.text =
          "Since " +
          left[leftIndex] +
          " (left partition) greater than " +
          right[rightIndex] +
          " (right partition), we take " +
          right[rightIndex] +
          ".";
        let count = 0,
          z;
        for (let k = aa.children.length - 1; k >= 0; k--) {
          if (aa.children[k].classList.contains("new")) break;
          count--;
        }
        if (count != -aa.children.length)
          z = aa.children[aa.children.length + count].getBoundingClientRect();
        else {
          if (l.concat(r).length == a.length) {
            z = aa.children[0].getBoundingClientRect();
          } else {
            z = aa.children[parseInt(l[0].id[3])].getBoundingClientRect();
          }
        }
        h = r[rightIndex].getBoundingClientRect();
        r[rightIndex].style.transform = `translate(${z.left - h.x}px,${
          ex.bottom - h.bottom - 2.5
        }px)`;
        speech.speak(msg);
        tr.push(r[rightIndex]);
        result.push(right[rightIndex]);
        await new Promise((resolve) => {
          msg.addEventListener("end", () => {
            resolve();
          });
        });
        let nw = r[rightIndex];
        bb.replaceChild(placeholderDiv, r[rightIndex]);
        count = 0;
        for (let k = aa.children.length - 1; k >= 0; k--) {
          if (aa.children[k].classList.contains("new")) break;
          count--;
        }
        if (count != -aa.children.length)
          aa.replaceChild(nw, aa.children[aa.children.length + count]);
        else {
          if (l.concat(r).length == a.length) {
            aa.replaceChild(nw, aa.children[0]);
          } else {
            aa.replaceChild(nw, aa.children[parseInt(l[0].id[3])]);
          }
        }
        nw.style.transition = "";
        nw.style.transform = "translate(0px,0px)";
        nw.style.transition = "all 2s ease-out";
        rightIndex++;
      }
    }
    let nw = r.slice(rightIndex);
    if (nw == "") {
      nw = l.slice(leftIndex);
    }
    nw = nw[0];
    for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
    txt =
      "Now we take last remaining element " +
      nw.children[0].innerText +
      " index(" +
      nw.id[3] +
      ").";
    c.innerText = txt;
    msg.text = txt;
    speech.speak(msg);
    const placeholderDiv = document.createElement("div");
    placeholderDiv.classList.add("w-[3rem]", "m-[0.2rem]", "placeh", nw.id);
    let count = 0,
      za;
    for (let k = aa.children.length - 1; k >= 0; k--) {
      if (aa.children[k].classList.contains("new")) break;
      count--;
    }
    za = aa.children[aa.children.length + count].getBoundingClientRect();
    h = nw.getBoundingClientRect();
    nw.style.transform = `translate(${za.left - h.x}px,${
      ex.bottom - h.bottom - 2.5
    }px)`;
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });
    bb.replaceChild(placeholderDiv, nw);
    count = 0;
    for (let k = aa.children.length - 1; k >= 0; k--) {
      if (aa.children[k].classList.contains("new")) break;
      count--;
    }
    aa.replaceChild(nw, aa.children[aa.children.length + count]);
    nw.style.transition = "";
    nw.style.transform = "translate(0px,0px)";
    nw.style.transition = "all 2s ease-out";
    for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
    b[4].classList.add("bg-gray-700");
    txt =
      "We copy the elements from the new array back into the original array.";
    c.innerText = txt;
    msg.text = txt;
    speech.speak(msg);
    let zi = bb.getBoundingClientRect();
    h = aa.getBoundingClientRect();
    aa.style.transition = "all 2s ease-out";
    aa.style.transform = `translateY(${zi.bottom - h.bottom}px)`;
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });
    for (let k = 0; k < bb.children.length; k++) {
      if (bb.children[k].classList.contains("placeh")) {
        const placeholderDiv = document.createElement("div");
        placeholderDiv.classList.add("w-[3rem]", "m-[0.2rem]", "bar" + k);
        bb.replaceChild(aa.children[k], bb.children[k]);
        aa.insertBefore(placeholderDiv, aa.children[k]);
      }
    }
    aa.style.transition = "";
    aa.style.transform = `translateY(0px)`;
    lColor.map((val, ind) => {
      l[ind].style.backgroundColor = val;
    });
    rColor.map((val, ind) => {
      r[ind].style.backgroundColor = val;
    });
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
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
              onClick={async (e) => {
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
                let c = document.getElementById("textContainer");
                if (!(arr.length == 1)) {
                  let m;
                  m = await mergeSort();
                  newArr(m);
                  let b = [
                    document.getElementById("br1"),
                    document.getElementById("br2"),
                    document.getElementById("br3"),
                    document.getElementById("br4"),
                    document.getElementById("br5"),
                  ];
                  for (k = 0; k < b.length; k++)
                    b[k].classList.remove("bg-gray-700");
                  c.innerHTML = "Finally, our array is sorted";
                  msg.text = "Finally, our array is sorted";
                } else {
                  c.innerHTML =
                    "As the list only contains one element so no sorting is require";
                  msg.text =
                    "As the list only contains one element so no sorting is require";
                }
                speech.speak(msg);
                await new Promise((resolve) => {
                  msg.addEventListener("end", () => {
                    resolve();
                  });
                });
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
                  array[i] = parseInt(Math.random() * 50);
                }
                let o = document.getElementById("barContainer");
                let po = document.getElementById("extra");
                o.innerHTML = ``;
                array.map((val, ind) => {
                  o.innerHTML += `<div class="w-[3rem] relative bg-blue-300 m-[0.2rem] text-center" id=${
                    "bar" + ind
                  }><span class="relative bottom-6">${val}</span></div>`;
                  document.getElementById("bar" + ind).style.height = val + "%";
                });
                po.innerHTML = ``;
                array.map((val, ind) => {
                  po.innerHTML += `<div class="w-[3rem] h-12 m-[0.2rem] bar${ind}"></div>`;
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
                    let po = document.getElementById("extra");
                    o.innerHTML = ``;
                    n.map((val, ind) => {
                      o.innerHTML += `<div class="w-[3rem] bg-blue-300 m-[0.2rem] text-center" id=${
                        "bar" + ind
                      }><span class="relative bottom-6">${val}</span></div>`;
                      document.getElementById("bar" + ind).style.height =
                        val + "%";
                    });
                    po.innerHTML = ``;
                    n.map((val, ind) => {
                      po.innerHTML += `<div class="w-[3rem] h-12 m-[0.2rem] bar${ind}"></div>`;
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
