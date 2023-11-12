import React from "react";
import { useState, useEffect, createContext } from "react";
import { defaultarr } from "./array";
import ArrInGraph from "./ArrayInGraph";
import Codesider from "./codesider";
import Text from "./text";
import Footer, { msg } from "../../Footer";

export const arrContext = createContext([]);

export default function Quick(props) {
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

    let temparr = arr
    function sorting() {
      if (temparr.length <= 1) {
        return temparr;
      }
    
      const stack = [];
      stack.push(0);
      stack.push(temparr.length - 1);
    
      while (stack.length > 0) {
        const end = stack.pop();
        const start = stack.pop();
        
        if (start < end) {
          const pivotIndex = partition(temparr, start, end);
          
          stack.push(start);
          stack.push(pivotIndex - 1);
    
          stack.push(pivotIndex + 1);
          stack.push(end);
        }
      }
    
      return stack;
    }
    
    function partition(arr, start, end) {
      const pivotValue = arr[end];
      let pivotIndex = start;
      a[start].classList.add('bg-orange-600');
      for (let i = start+1; i < end; i++) {
        a[i].classList.add('bg-red-600')
        if (arr[i] < pivotValue) {
          [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
          [a[i], a[pivotIndex]] = [a[pivotIndex], a[i]];
          pivotIndex++;
        }
      }
    
      [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
      return pivotIndex;
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
                const m=sorting();
                console.log(m)
                newArr(m)
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
