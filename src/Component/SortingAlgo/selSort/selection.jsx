import React from "react";
import { useState, useEffect, createContext } from "react";
import { defaultarr } from "./array";
import ArrInGraph from "../selSort/ArrayInGraph";
import Codesider from "./codesider";
import Text from "./text";
import Footer, { msg } from "../../Footer";

export const arrContext = createContext([]);

export default function Selection(props) {
  let e;
  const [arr, newArr] = useState(defaultarr);
  const speech = window.speechSynthesis;
  let a = [],
    b = [];

  useEffect(() => {
    document.getElementById("newArray").value=arr
    arr.map((val, ind) => {
      a.push(document.getElementById("bar" + ind));
    });
  }, [arr]);

  async function sorting() {
    let i,
      j,
      k,
      temparr = arr,
      txt;
    let c = document.getElementById("textContainer");
    b = [
      document.getElementById("br1"),
      document.getElementById("br2"),
      document.getElementById("br3"),
      document.getElementById("br4"),
    ];
    let min = { val: 0, pos: 0 };
    for (j = 0; j < arr.length - 1; j++) {
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[0].classList.add("bg-gray-700");
      min.val = temparr[j];
      min.pos = j;
      a[j].classList.add("bg-red-600");
      txt =
        "Iteration " +
        (j + 1) +
        ": Set " +
        min.val +
        " as the current minimum, then iterate through the remaining unsorted elements to find the true minimum.";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      for (i = j + 1; i < arr.length; i++) {
        for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
        b[1].classList.add("bg-gray-700");
        a[i].classList.add("bg-green-600");
        txt =
          "Check if " +
          temparr[i] +
          " is smaller than the current minimum (" +
          min.val +
          ")";
        c.innerText = txt;
        msg.text = txt;
        speech.speak(msg);
        await new Promise((resolve) => {
          msg.addEventListener("end", () => {
            resolve();
          });
        });
        if (min.val > temparr[i]) {
          a[min.pos].classList.remove("bg-red-600");
          min.val = temparr[i];
          min.pos = i;
          a[i].classList.add("bg-red-600");
          for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
          b[2].classList.add("bg-gray-700");
          txt = "Set " + min.val + " as the new minimum.";
          c.innerText = txt;
          msg.text = txt;
          speech.speak(msg);
          await new Promise((resolve) => {
            msg.addEventListener("end", () => {
              resolve();
            });
          });
        }
        a[i].classList.remove("bg-green-600");
      }
      a[j].classList.add("bg-red-600");
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[3].classList.add("bg-gray-700");
      if (j === min.pos) {
        txt =
          "As the minimum is the first unsorted element, no swap is necessary.";
      } else {
        txt =
          "Swap the minimum (" +
          min.val +
          ") with the first unsorted element (" +
          temparr[j] +
          ").";
      }
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      let temp = temparr[j];
      temparr[j] = min.val;
      temparr[min.pos] = temp;
      console.log(temparr);
      let temp1;
      temp = a[j].style.height;
      temp1 = a[j].children[0].innerText;
      a[j].style.height = a[min.pos].style.height;
      a[j].children[0].innerText = a[min.pos].children[0].innerText;
      a[min.pos].style.height = temp;
      a[min.pos].children[0].innerText = temp1;
      a[j].classList.remove("bg-red-600");
      a[min.pos].classList.remove("bg-red-600");
      a[j].classList.add("bg-orange-600");
      txt = min.val + " is now considered sorted.";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
    }
    newArr(temparr);
    txt =
      "array is sorted! (After all iterations, the last element will naturally be sorted.)";
    c.innerText = txt;
    msg.text = txt;
    speech.speak(msg);
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });
    arr.map((val, ind) => {
      a[ind].classList.remove("bg-green-600");
      a[ind].classList.remove("bg-red-600");
      a[ind].classList.add("bg-orange-600");
    });
  }
  
  return (
    <arrContext.Provider value={{ array: arr }}>
      <div className="w-[100vw] h-[100vh] bg-gray-900">
        <br />
        <br />
        <Footer />
        <ArrInGraph />
        <Codesider />
        <Text />
        <div className="w-[60%] absolute bottom-[10%] h-[17%] flex">
          <button
            className="bg-yellow-600 w-12 h-[100%] text-[3rem]"
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
          <div className="w-[175px] bg-gray-300 ml-2" id="sort">
            <button
              className="w-[100%] h-10 mt-4 bg-yellow-600 text-center text-lg"
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
              className="w-[100%] h-10 mt-2 bg-yellow-600 text-center text-lg"
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
                sorting();
              }}
            >
              Sort
            </button>
          </div>
          <div
            className="w-[42%] ml-2 pl-2 mt-[20px] h-8 bg-yellow-300 flex items-center hidden"
            id="newArrContainer"
          >
          <button
              className="bg-green-700 px-2"
              onClick={(e) => {
                e.preventDefault();
                let array=[]
                let i,a=parseInt(Math.random()*10);
                let b=(a>=3)? a:5
                for(i=0;i<b;i++){
                    array[i]=parseInt(Math.random()*100)
                }
                let o = document.getElementById("barContainer");
                o.innerHTML = ``;
                array.map((val, ind) => {
                    o.innerHTML += `<div class="w-[7%] relative bg-blue-300 m-1 text-center" id=${
                      "bar" + ind
                    }><span class="relative bottom-6">${val}</span></div>`;
                    document.getElementById("bar" + ind).style.height =
                      val + "%";
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
              <label><b className="mx-2">OR</b>A = </label>
              <input
                type="text"
                className="mr-2"
                defaultValue={arr}
                id="newArray"
              />
              <button
                className="bg-green-700 px-2"
                onClick={(e) => {
                  e.preventDefault();
                  let m = document.getElementById("newArray");
                  let n = m.value.split(",");
                  let o = document.getElementById("barContainer");
                  o.innerHTML = ``;
                  n.map((val, ind) => {
                    if(val<=100){
                      o.innerHTML += `<div class="w-[7%] bg-blue-300 m-1 text-center" id=${
                        "bar" + ind
                      }><span class="relative bottom-6">${val}</span></div>`;
                      document.getElementById("bar" + ind).style.height =
                        val + "%";
                    }
                    else
                    alert("value above 100 are not allowed")
                  });
                  newArr(
                    n.map((val, ind) => {
                      return parseInt(val);
                    })
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
