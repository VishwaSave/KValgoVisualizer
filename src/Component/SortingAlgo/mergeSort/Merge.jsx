import React from "react";
import { useState, useEffect, createContext } from "react";
import { defaultarr } from "./array";
import ArrInGraph from "./ArrayInGraph";
import Codesider from "./codesider";
import Text from "./text";
import Footer, { msg } from "../../Footer";

export const arrContext = createContext([]);

export default function Merge(props) {
  let e;
  const [arr, newArr] = useState(defaultarr);
  const speech = window.speechSynthesis;
  let a = [];
  useEffect(() => {
    document.getElementById("newArray").value=arr
    arr.map((val, ind) => {
      a.push(document.getElementById("bar" + ind));
    });
  }, [arr]);
  
  let 
  k,
  temparr=arr;
  async function mergeSort(arr,resp){
    let c = document.getElementById("textContainer"),
    txt;
    let b = [
      document.getElementById("br1"),
      document.getElementById("br2"),
      document.getElementById("br3"),
      document.getElementById("br4"),
      document.getElementById("br5"),
    ];
    let left,right,middle,l,r;
    if(arr){
      if (arr.length <= 1) {
        return arr;
      }
      middle = Math.floor(arr.length / 2);
      l= resp.slice(0, middle);
      r= resp.slice(middle)
      left = arr.slice(0, middle);
      right = arr.slice(middle);
    }
    else{
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[0].classList.add("bg-gray-700");
      txt =
        "We split the array into partitions of 1 (each partition takes on a distinct color).";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      a.map((val,ind)=>{
        let m=a.slice(0,ind)
        let n="rgb("+(parseInt(Math.random()*128)+1)+" "+(parseInt(Math.random()*128)+1)+" "+(parseInt(Math.random()*128)+1)+")"
        if(ind==0){
          val.style.backgroundColor=n
        }
        else{
          let z=false;
          do{
            m.map((v,i)=>{
              if(n===v.style.backgroundColor){
                n="rgb("+(parseInt(Math.random()*128)+1)+" "+(parseInt(Math.random()*128)+1)+" "+(parseInt(Math.random()*128)+1)+")"
                z=true
              }
            })
          }while(z)
          val.style.backgroundColor=n
        }
      })
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      if (temparr.length <= 1) {
        return arr;
      }
      middle = Math.floor(temparr.length / 2);
      l= a.slice(0, middle);
      r= a.slice(middle)
      left = temparr.slice(0, middle);
      right = temparr.slice(middle);     
    }
    return merge( await mergeSort(left,l), l, r, await mergeSort(right,r));
  }

  async function merge(left, l, r, right){
    let c = document.getElementById("textContainer"),
    txt;
    let b = [
      document.getElementById("br1"),
      document.getElementById("br2"),
      document.getElementById("br3"),
      document.getElementById("br4"),
      document.getElementById("br5"),
    ];
    let result = [],temp,temp1,tr=[];
    let leftIndex = 0;
    let rightIndex = 0;
    let lColor=[],rColor=[]
    l.map((val,ind)=>{
      lColor[ind]=val.style.backgroundColor
    })
    r.map((val,ind)=>{
      rColor[ind]=val.style.backgroundColor
    })
    while (leftIndex < left.length && rightIndex < right.length) {
        l[leftIndex].classList.add("top-[70%]")
        r[rightIndex].classList.add("top-[70%]")
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[1].classList.add("bg-gray-700");
      txt =
        "Merge partitions "+left+" (index 0 to "+(left.length-1)+") and "+right+" (index "+(left.length)+" to "+((left.length+right.length)-1)+").";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      l[leftIndex].style.backgroundColor=""
      r[rightIndex].style.backgroundColor=""
      l[leftIndex].classList.add("bg-green-400")
      r[rightIndex].classList.add("bg-green-400")
      l[leftIndex].classList.remove("bg-green-400")
      r[rightIndex].classList.remove("bg-green-400")
      l[leftIndex].classList.add("bg-red-600")
      r[rightIndex].classList.add("bg-red-600")
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      if (left[leftIndex] <= right[rightIndex]) {
        for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
        b[2].classList.add("bg-gray-700");
        txt =
          "Since "+left[leftIndex]+" (left partition) <= "+right[rightIndex]+" (right partition), we take "+left[leftIndex]+".";
        c.innerText = txt;
        if(left[leftIndex]===right[rightIndex]){
          msg.text = "Since "+left[leftIndex]+" (left partition) equal to "+right[rightIndex]+" (right partition), we take "+left[leftIndex]+".";
        }
        else{
          msg.text = "Since "+left[leftIndex]+" (left partition) less than "+right[rightIndex]+" (right partition), we take "+left[leftIndex]+".";
        }
        speech.speak(msg);
        tr.push(left[leftIndex]);
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
        b[3].classList.add("bg-gray-700");
        txt =
          "Since "+left[leftIndex]+" (left partition) > "+right[rightIndex]+" (right partition), we take "+right[rightIndex]+".";
        c.innerText = txt;
        msg.text = "Since "+left[leftIndex]+" (left partition) greater than "+right[rightIndex]+" (right partition), we take "+right[rightIndex]+".";
        speech.speak(msg);
        tr.push(right[rightIndex]);
        result.push(right[rightIndex]);
        rightIndex++;
      }
      temp=tr.concat(left.slice(leftIndex), right.slice(rightIndex))
      temp1=l.concat(r);
      temp.map((val,ind)=>{
        temp1[ind].style.height=val+"%"
        temp1[ind].children[0].innerText=val
      })
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
    }
    for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
    b[4].classList.add("bg-gray-700")
    txt =
      "We copy the elements from the new array back into the original array.";
    c.innerText = txt;
    msg.text = txt;
    speech.speak(msg);
    l.concat(r).map((val)=>{
      val.classList.remove("top-[70%]")
      val.classList.remove("bg-green-400")
      val.classList.remove("bg-red-600")
    })
    lColor.map((val,ind)=>{
      l[ind].style.backgroundColor=val
    })
    rColor.map((val,ind)=>{
      r[ind].style.backgroundColor=val
    })
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  };

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
              onClick={async(e) => {
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
                  let m;
                m=await mergeSort();
                newArr(m)
                let c = document.getElementById("textContainer")
                let b = [
                  document.getElementById("br1"),
                  document.getElementById("br2"),
                  document.getElementById("br3"),
                  document.getElementById("br4"),
                  document.getElementById("br5"),
                ];
                for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
                c.innerHTML="Finally, our array is sorted"
                msg.text = "Finally, our array is sorted";
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
                      array[i]=parseInt(Math.random()*50)
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
                    if(val<=50){
                      o.innerHTML += `<div class="w-[7%] relative bg-blue-300 m-1 text-center" id=${
                        "bar" + ind
                      }><span class="relative bottom-6">${val}</span></div>`;
                      document.getElementById("bar" + ind).style.height =
                        val + "%";
                    }
                    else
                    alert('Value above 50 are not allowed')
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
