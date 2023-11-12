import React from "react";
import { useState, useEffect, createContext } from "react";
import { defaultarr } from "./array";
import ArrInGraph from "./ArrayInGraph";
import Codesider from "./codesider";
import Text from "./text";
import Footer, { msg } from "../../Footer";

export const arrContext = createContext([]);

export default function Insertion(props) {
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
    let sorted,unsorted;
    for (j = 0; j < arr.length - 1; j++) {
      sorted=j
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      txt =
        "Mark the first element ("+temparr[j]+") as sorted.";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      b[0].classList.add("bg-gray-700");
      a[j].classList.remove("bg-green-600")
      a[j].classList.remove("bg-red-600")
      a[j].classList.add("bg-orange-600")
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      for (i = j + 1; i < arr.length; i++) {
        unsorted=i
        for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
        txt =
          "Extract the first unsorted element ("+temparr[i]+")";
        c.innerText = txt;
        msg.text = txt;
        speech.speak(msg);
        b[1].classList.add("bg-gray-700");
        a[i].classList.remove("bg-green-600")
        a[i].classList.add("bg-red-600")
        a[i].style.transform = "translateY(250px)"
        await new Promise((resolve) => {
          msg.addEventListener("end", () => {
            resolve();
          });
        });
        for(l=sorted; l>=0; l--){
          for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
          txt =
            "Figure where to insert extracted element; comparing with sorted element "+temparr[l]+".";
          c.innerText = txt;
          msg.text = txt;
          speech.speak(msg);
          b[2].classList.add("bg-gray-700");
          a[l].classList.remove("bg-orange-600")
          a[l].classList.add("bg-green-600")
          await new Promise((resolve) => {
            msg.addEventListener("end", () => {
              resolve();
            });
          });
          if(temparr[l]>temparr[unsorted]){
            for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
            txt =
              temparr[l]+" > "+temparr[unsorted]+" is true, hence move current sorted element ("+temparr[l]+") to the right by 1.";
            c.innerText = txt;
            msg.text = temparr[l]+" greater than "+temparr[unsorted]+" is true, hence move current sorted element ("+temparr[l]+") to the right by 1.";
            speech.speak(msg);
            b[3].classList.add("bg-gray-700");
            let temp= temparr[l];
            temparr[l]=temparr[unsorted];
            temparr[unsorted]=temp;
            a[l].classList.remove("bg-green-600")
            a[l].classList.add("bg-red-600")
            a[unsorted].classList.remove("bg-red-600")
            a[unsorted].classList.add("bg-green-600")
            a[l].style.transform="translate(57px,0px)"
            a[unsorted].style.transform="translate(-57px, 250px)"
            await new Promise((res)=>{setTimeout(res,3000)});
            a[l].classList.remove("transition-all")
            a[l].classList.remove("duration-[3s]")
            a[l].classList.remove("ease-out")
            a[unsorted].classList.remove("transition-all")
            a[unsorted].classList.remove("duration-[3s]")
            a[unsorted].classList.remove("ease-out")
            temp=a[l].style.height;
            a[l].style.height=a[unsorted].style.height
            a[unsorted].style.height=temp
            let temp1=a[l].children[0].innerText
            a[l].children[0].innerText = a[unsorted].children[0].innerText;
            a[unsorted].children[0].innerText=temp1
            a[l].style.transform="translate(0px,250px)"
            a[unsorted].style.transform="translate(0px,0px)"
            await new Promise((res)=>{setTimeout(res,100)});
            a[l].classList.add("transition-all")
            a[l].classList.add("duration-[3s]")
            a[l].classList.add("ease-out")
            a[unsorted].classList.add("transition-all")
            a[unsorted].classList.add("duration-[3s]")
            a[unsorted].classList.add("ease-out")
            a[unsorted].classList.remove("bg-green-600")
            unsorted=l
          }
          else{
            for (k = 0; k < b.length; k++){ b[k].classList.remove("bg-gray-700")};
            txt = temparr[l]+" > "+temparr[unsorted]+" is false, insert element at current position.";
            c.innerText = txt;
            msg.text = temparr[l]+" greater than "+temparr[unsorted]+" is false, insert element at current position.";;
            speech.speak(msg);
            b[4].classList.add("bg-gray-700");
            a[l].classList.remove("bg-green-600")
            for(k=sorted; k>=0; k--) a[k].classList.add("bg-orange-600")
            await new Promise((resolve) => {
          msg.addEventListener("end", () => {
            resolve();
          });
        });
        break;
      }
      a[l].classList.remove("bg-green-600")
      for(k=sorted; k>=0; k--) a[k].classList.add("bg-orange-600")
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
    }   
  for(l=sorted; l>=0; l--){
    a[l].style.transform = "translateY(0px)"
        }
        a[unsorted].classList.remove("bg-red-600")
        a[i].style.transform = "translateY(0px)"
        a[i].classList.remove("bg-red-600")
        a[i].classList.add("bg-orange-600")
        break;
      }
    }
    arr.map((val,ind)=>{
      a[ind].classList.add("bg-orange-600")
    })
    newArr(temparr)
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
