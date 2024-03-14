import React, { createElement } from "react";
import { useState, useEffect, createContext } from "react";
import { defaultlist } from "./list";
import ListR from "./ListRep";
import Codesider from "./codesider";
import Text from "./text";
import { msg } from "../../Footer";
import play from "../../../img&other/play.png";
import pause from "../../../img&other/pause.png";

export const listContext = createContext([]);

export default function LinkedList(props) {
  let e;
  const [list, newList] = useState(defaultlist);
  const speech = window.speechSynthesis;
  let a = [],
    b = [];
  useEffect(() => {
    if (list.length != 0) {
      let n =
        document.getElementById("barContainer").children[list.length - 1]
          .children[0];
      if (!n.children[1].classList.contains("hidden"))
        n.children[1].classList.add("hidden");
      if (!n.children[2].classList.contains("hidden"))
        n.children[2].classList.add("hidden");
      if (!n.children[3].classList.contains("hidden"))
        n.children[3].classList.add("hidden");
      document.getElementById("newList").value = list;
      if (list.length > 1) {
        let ao = document.getElementById("title0");
        ao.innerHTML = "<b>head/0</b>";
        let bo = document.getElementById(`title${list.length - 1}`);
        bo.innerHTML = "<b>tail/" + (list.length - 1) + "</b>";
      } else {
        let bo = document.getElementById(`title${list.length - 1}`);
        bo.innerHTML = "<b>head/tail/" + (list.length - 1) + "</b>";
      }
      n = document.getElementById("barContainer");
      n.children[0].children[0].children[0].classList.remove("bg-green-500");
      n.children[0].children[0].children[0].classList.remove(
        "border-green-500"
      );
      n.children[0].children[0].children[0].classList.remove("text-white");
      list.map((val, ind) => {
        if (ind != 0 && ind != list.length - 1) {
          let bo = document.getElementById(`title${ind}`);
          bo.innerHTML = "";
        }
        a.push(document.getElementById("bar" + ind));
        a[ind].style.transition = "all 3s ease-out";
        a[ind].style.height = "1rem";
        a[ind].classList.remove("bg-green-500");
        a[ind].classList.remove("bg-yellow-500");
        a[ind].classList.remove("bg-blue-500");
        a[ind].classList.remove("border-green-500");
        a[ind].classList.remove("border-yellow-500");
        a[ind].classList.remove("border-blue-500");
        a[ind].classList.remove("text-white");
        a[ind].classList.remove("text-yellow-500");
        document
          .getElementsByClassName("arrow-" + ind)[0]
          .classList.remove("bg-yellow-500");
        document
          .getElementsByClassName("arrow-" + ind)[0]
          .classList.remove("bg-green-500");
        document
          .getElementsByClassName("arrow-" + ind)[0]
          .classList.remove("bg-blue-500");
      });
    }
  }, [list]);

  async function searchF() {
    document.getElementById("codeContainer").innerHTML = `
    <div class="px-2" id="br1">
      if empty, return NOT_FOUND
    </div>
    <div class="px-2" id="br2">
    return head.item
    </div>`;
    let txt,
      c = document.getElementById("textContainer"),
      k;
    let count = 0;
    b = [
      document.getElementById("br1"),
      document.getElementById("br2"),
    ];
    if (list.length == 0) {
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[0].classList.add("bg-gray-700");
      txt = "The current Linked List is empty, we return NOT_FOUND.";
      c.innerText = txt;
      msg.text = "The current Linked List is empty, we return not found.";
      speech.speak(msg);
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
    } else {
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[1].classList.add("bg-gray-700");
      txt ="Return the value stored at the head: "+list[0]+".";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      a[0].classList.add("border-yellow-500");
      a[0].classList.add("bg-yellow-500");
      a[0].classList.add("text-white");
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
    }
  }
  async function searchB() {
    document.getElementById("codeContainer").innerHTML = `
    <div class="px-2" id="br1">
      if empty, return NOT_FOUND
    </div>
    <div class="px-2" id="br2">
    return tai.item
    </div>`;
    let txt,
      c = document.getElementById("textContainer"),
      k;
    let count = 0;
    b = [
      document.getElementById("br1"),
      document.getElementById("br2"),
    ];
    if (list.length == 0) {
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[0].classList.add("bg-gray-700");
      txt = "The current Linked List is empty, we return NOT_FOUND.";
      c.innerText = txt;
      msg.text = "The current Linked List is empty, we return not found.";
      speech.speak(msg);
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
    } else {
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[1].classList.add("bg-gray-700");
      txt ="Return the value stored at the tail: "+list[list.length-1]+".";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      a[list.length-1].classList.add("border-yellow-500");
      a[list.length-1].classList.add("bg-yellow-500");
      a[list.length-1].classList.add("text-white");
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
    }
  }
  async function insertA(m) {
    let txt,
      c = document.getElementById("textContainer"),
      k;
    let n = document.getElementById("barContainer");
    document.getElementById("codeContainer").innerHTML = `
      <div class="px-2" id="br1">
      Vertex vtx = new Vertex(v)
      </div>
      <div class="px-2" id="br2">
      tail.next = vtx
      </div>
      <div class="px-2" id="br3">
      tail = vtx
      </div>`;
    b = [
      document.getElementById("br1"),
      document.getElementById("br2"),
      document.getElementById("br3"),
    ];
    const newE = document.createElement("div");
    newE.style.transition = "all 3s ease-out";
    newE.id = `bar${list.length}`;
    newE.innerHTML = `<div><div class="flex">
      <div>
        <hr
          class="w-5 h-1 relative top-3 transition ease-in-out duration-[3s] arrow-${list.length}"
        />
      </div>
      <div
      class="w-[4rem] h-[2rem] max-lg:w-[5rem] pb-[1.4rem] max-lg:pb-[2.1rem] text-center border-4 border-yellow-500 bg-yellow-500 rounded-[50%] z-10 font-extrabold text-white"
      id="bar${list.length}"
      >
      ${m}
      </div>
      </div>
      <div
        class="w-[4rem] relative left-5 max-lg:w-[5rem] text-center text-red-700"
        id="title${list.length}"
      ><b>vtx</b></div>
    </div>`;
    for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
    b[0].classList.add("bg-gray-700");
    txt = "Create new vertex to store value " + m + ".";
    c.innerText = txt;
    msg.text = txt;
    speech.speak(msg);
    n.appendChild(newE);
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });
    for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
    b[1].classList.add("bg-gray-700");
    txt = "Current tail.next points to vtx.";
    c.innerText = txt;
    msg.text = txt;
    speech.speak(msg);
    let np;
    if (list.length > 0) {
      np =
        document.getElementById("barContainer").children[n.children.length - 2]
          .children[0];
      np.children[1].classList.remove("hidden");
      np.children[1].children[0].classList.add("bg-yellow-500");
      np.children[2].classList.remove("hidden");
      np.children[3].classList.remove("hidden");
    }
    n.children[n.children.length - 1].innerHTML = `<div><div class="flex">
      <div
      class="w-[4rem] h-[2rem] max-lg:w-[5rem] pb-[1.4rem] max-lg:pb-[2.1rem] text-center border-4 border-black border-yellow-500 bg-yellow-500 rounded-[50%] z-10 font-extrabold text-white"
        id="bar${list.length}"
      >
        ${m}
      </div>
      </div>
      <div
        class="w-[4rem] max-lg:w-[5rem] text-center text-red-700"
        id="title${list.length}"
        ><b>vtx</b></div>
        </div>`;
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });
    for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
    b[2].classList.add("bg-gray-700");
    txt = "tail points to vtx.";
    c.innerText = txt;
    msg.text = txt;
    speech.speak(msg);
    const newE1 = document.createElement("div");
    newE1.innerHTML = `<div class="flex">
      <div
      class="w-[4rem] h-[2rem] max-lg:w-[5rem] pb-[1.4rem] max-lg:pb-[2.1rem] text-center border-4 border-black border-green-500 bg-green-500 rounded-[50%] z-10 font-extrabold text-white"
      id="bar${list.length}"
      >
      ${m}
      </div>
      <div>
        <hr
          class="w-5 h-1 relative bg-black top-3 transition ease-in-out duration-[3s] arrow-${list.length}"
        />
      </div>
      <div class="absolute">
      <hr
        class="w-3 h-1 bg-black relative top-2 left-[4.65rem] rotate-45 arrow-${list.length}"
        />
      </div>
      <div class="absolute">
        <hr
        class="w-3 h-1 bg-black relative top-4 left-[4.65rem] rotate-[140deg] arrow-${list.length}"
        />
      </div>
      </div>
      <div
        class="w-[4rem] max-lg:w-[5rem] text-center text-red-700"
        id="title${list.length}"
        ><b>tail/${list.length}</b></div>`;
    n.replaceChild(newE1, n.children[n.children.length - 1]);
    if (list.length > 0) {
      np.children[1].children[0].classList.remove("bg-yellow-500");
      n.children[n.children.length - 2].children[1].innerHTML = "";
    }
    let nx =
      document.getElementById("barContainer").children[n.children.length - 1]
        .children[0];
    nx.children[1].classList.add("hidden");
    nx.children[2].classList.add("hidden");
    nx.children[3].classList.add("hidden");
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });
    newList([...list, parseInt(m)]);
  }
  async function removeB() {
    let txt,
      c = document.getElementById("textContainer"),
      k;
    let n = document.getElementById("barContainer");
    document.getElementById("codeContainer").innerHTML = `
    <div class="px-2" id="br1">
    if empty, do nothing
    </div>
    <div class="px-2" id="br2">
    tmp = head
    </div>
    <div class="px-2" id="br3">
    head = head.next
    </div>
    <div class="px-2" id="br4">
    delete tmp
    </div>
    `;
    b = [
      document.getElementById("br1"),
      document.getElementById("br2"),
      document.getElementById("br3"),
      document.getElementById("br4"),
    ];
    if (list.length == 0) {
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[0].classList.add("bg-gray-700");
      txt = "The Linked List is already empty. No action is performed.";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
    } else if (list.length == 1) {
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[1].classList.add("bg-gray-700");
      txt = "The head is the only vertex in this List.";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      a[0].classList.add("border-yellow-500");
      a[0].classList.add("text-white");
      a[0].classList.add("bg-yellow-500");
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[2].classList.add("bg-gray-700");
      txt = "Head points to next (which is null).";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[3].classList.add("bg-gray-700");
      txt = "Remove head vertex. We now have an empty List.";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      let m = document.getElementById("barContainer");
      m.removeChild(m.children[0]);
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      newList([]);
    } else {
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[1].classList.add("bg-gray-700");
      txt = "The head has a next vertex.";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      a[0].classList.add("border-yellow-500");
      a[0].classList.add("text-white");
      a[0].classList.add("bg-yellow-500");
      document.getElementById("title0").innerHTML = "<b>h/t/0</b>";
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[2].classList.add("bg-gray-700");
      txt = "head points to the next vertex.";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      document
        .getElementsByClassName("arrow-0")[0]
        .classList.add("bg-yellow-500");
      document.getElementById("title0").innerHTML = "<b>tmp</b>";
      a[1].classList.add("border-green-500");
      a[1].classList.add("text-white");
      a[1].classList.add("bg-green-500");
      document.getElementById("title1").innerHTML = "<b>head/0</b>";
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[3].classList.add("bg-gray-700");
      txt = "Delete tmp, which was the (previous) head.";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      let m = document.getElementById("barContainer");
      m.removeChild(m.children[0]);
      for (k = 0; k < m.children.length; k++) {
        m = document.getElementById("barContainer");
        m.children[k].children[0].children[0].id = "bar" + k;
        m.children[k].children[1].id = "title" + k;
        for (let j = 1; j < 4; j++) {
          m.children[k].children[0].children[j].children[0].classList.remove(
            "arrow-" + (k + 1)
          );
          m.children[k].children[0].children[j].children[0].classList.add(
            "arrow-" + k
          );
        }
      }
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      newList(list.slice(1, list.length));
    }
  }

  return (
    <listContext.Provider value={{ list: list }}>
      <div class="w-[100%] h-[87vh] bg-gray-900" id="main">
        <ListR />
        <Codesider />
        <Text />
        <div class="w-[57rem] absolute bottom-[10%] h-[30.5%] flex max-h-option max-sm:hidden">
          <button
            class="bg-yellow-600 w-[3rem] h-[100%] text-[3rem] max-h-option-button"
            onClick={(e) => {
              if (e.currentTarget.innerText == ">") {
                e.currentTarget.innerText = "<";
                document.getElementById("sort").classList.remove("hidden");
              } else {
                document
                  .getElementById("newListContainer")
                  .classList.add("hidden");
                document.getElementById("sort").classList.add("hidden");
                e.currentTarget.innerText = ">";
                document.getElementById("subUserInp").classList.add("hidden");
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
              class="w-[100%] h-10 mt-4 bg-yellow-600 text-center max-h-newList"
              onClick={(e) => {
                let m = document.getElementById("newListContainer");
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
                document
                  .getElementById("newSearchContainer")
                  .classList.add("hidden");
              }}
            >
              Create(A)
            </button>
            <button
              class="w-[100%] h-10 mt-1 bg-yellow-600 text-center max-h-sort"
              onClick={(e) => {
                let m = document.getElementById("newSearchContainer");
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
                document
                  .getElementById("newListContainer")
                  .classList.add("hidden");
              }}
            >
              Peek
            </button>
            <button
              class="w-[100%] h-10 mt-1 bg-yellow-600 text-center max-h-newList"
              onClick={(e) => {
                let m = document.getElementById("newEnQueueContainer");
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
                document
                  .getElementById("newSearchContainer")
                  .classList.add("hidden");
                document
                  .getElementById("newListContainer")
                  .classList.add("hidden");
              }}
            >
              Enqueue
            </button>
            <button
              class="w-[100%] h-10 mt-1 bg-yellow-600 text-center max-h-newList"
              onClick={(e) => {
                e.preventDefault();
                a[0].classList.remove("border-yellow-500");
                a[0].classList.remove("bg-yellow-500");
                a[0].classList.remove("text-white");
                a[list.length-1].classList.remove("border-yellow-500");
                a[list.length-1].classList.remove("bg-yellow-500");
                a[list.length-1].classList.remove("text-white");
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
                  .getElementById("newListContainer")
                  .classList.add("hidden");
                speech.cancel();
                document.getElementById("ppcont").disabled = false;
                document.getElementById("play/pause").src = pause;
                document.getElementById("subUserInp").classList.add("hidden");
                 removeB();
                }}
            >
              Dequeue
            </button>
          </div>
          <div
            class="ml-[0.5rem] pl-[0.5rem] mt-4 h-8 bg-yellow-300 flex items-center hidden max-h-newList-ins"
            id="newListContainer"
          >
            <button
              class="bg-green-500 px-[0.5rem] mr-4"
              onClick={(e) => {
                e.preventDefault();
                newList([]);
                let o = document.getElementById("barContainer");
                o.innerHTML = ``;
              }}
            >
              Empty
            </button>
            <button
              class="bg-green-500 px-[0.5rem] mr-4"
              onClick={(e) => {
                e.preventDefault();
                speech.cancel();
                document.getElementById("play/pause").src = play;
                let list = [];
                let i,
                  a = parseInt(Math.random() * 10);
                let b = a >= 3 ? a : 5;
                for (i = 0; i < b; i++) {
                  list[i] = parseInt(Math.floor(Math.random() * 199) - 99);
                }
                let o = document.getElementById("barContainer");
                o.innerHTML = ``;
                list.map((val, ind) => {
                  o.innerHTML += `
                  <div>
                  <div class="flex">
                    <div
                    class="w-[4rem] max-lg:w-[5rem] pb-[1.4rem] max-lg:pb-[2.1rem] text-center border-4 border-black rounded-[50%] z-10 font-extrabold"
                      id="bar${ind}"
                    >
                      ${val}
                    </div>
                    <div>
                      <hr class="w-5 h-1 bg-black relative top-3 transition ease-in-out duration-[3s] arrow-${ind}" />
                    </div>
                    <div class="absolute">
                      <hr class="w-3 h-1 bg-black relative top-2 left-[4.65rem] rotate-45 arrow-${ind}" />
                    </div>
                    <div class="absolute">
                      <hr class="w-3 h-1 bg-black relative top-4 left-[4.65rem] rotate-[140deg] arrow-${ind}" />
                    </div>
                  </div>
                    <div
                      class="w-[4rem] max-lg:w-[5rem] text-center text-red-700"
                      id="title${ind}"
                    >
                    </div>
                  </div>`;
                });
                newList(
                  list.map((val) => {
                    return val;
                  })
                );
              }}
            >
              Random
            </button>
            <form>
              <div class="flex flex-col h-[25px]" id="userInp">
                <button
                  class="bg-green-500 px-[0.5rem] mr-2"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("subUserInp")
                      .classList.remove("hidden");
                    document.getElementById("newList").focus();
                  }}
                >
                  User Defined List
                </button>
                <div
                  className="hidden px-[0.5rem] pb-1 bg-green-500 mr-2"
                  id="subUserInp"
                >
                  <label>A = </label>
                  <input
                    class="mr-[0.5rem] max-h-newList-input"
                    defaultValue={list}
                    size={13}
                    id="newList"
                  />
                  <button
                    class="bg-green-700 px-[0.5rem]"
                    onClick={(e) => {
                      e.preventDefault();
                      speech.cancel();
                      document.getElementById("play/pause").src = play;
                      let m = document.getElementById("newList");
                      let regex = /^(-?\d{1,2},){0,10}-?\d{1,2}$/;
                      if (regex.test(m.value)) {
                        let n = m.value.split(",");
                        let o = document.getElementById("barContainer");
                        o.innerHTML = ``;
                        n.map((val, ind) => {
                          o.innerHTML += `
                      <div>
                      <div class="flex">
                        <div
                        class="w-[4rem] max-lg:w-[5rem] pb-[1.4rem] max-lg:pb-[2.1rem] text-center border-4 border-black rounded-[50%] z-10 font-extrabold"
                          id="bar${ind}"
                        >
                          ${val}
                        </div>
                        <div>
                          <hr class="w-5 h-1 bg-black relative top-3 transition ease-in-out duration-[3s] arrow-${ind}" />
                        </div>
                        <div class="absolute">
                          <hr class="w-3 h-1 bg-black relative top-2 left-[4.65rem] rotate-45 arrow-${ind}" />
                        </div>
                        <div class="absolute">
                          <hr class="w-3 h-1 bg-black relative top-4 left-[4.65rem] rotate-[140deg] arrow-${ind}" />
                        </div>
                      </div>
                        <div
                          class="w-[4rem] max-lg:w-[5rem] text-center text-red-700"
                          id="title${ind}"
                        >
                        </div>
                      </div>`;
                        });
                        newList(
                          n.map((val, ind) => {
                            return parseInt(val);
                          })
                        );
                      } else {
                        alert(
                          "!! Invalid list !! Please provide a valid list which consist of only numbers between -99 and 99 and comma (,) and upto 10 elements/numbers are allowed"
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
            class="ml-[0.5rem] pl-[0.5rem] mt-16 h-8 bg-yellow-300 flex items-center hidden max-h-newList-ins hide"
            id="newSearchContainer"
          >
            <button
              class="bg-green-500 px-[0.5rem] mr-4"
              onClick={(e) => {
                e.preventDefault();
                a[0].classList.remove("border-yellow-500");
                a[0].classList.remove("bg-yellow-500");
                a[0].classList.remove("text-white");
                a[list.length-1].classList.remove("border-yellow-500");
                a[list.length-1].classList.remove("bg-yellow-500");
                a[list.length-1].classList.remove("text-white");
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
                  .getElementById("newListContainer")
                  .classList.add("hidden");
                speech.cancel();
                document.getElementById("ppcont").disabled = false;
                document.getElementById("play/pause").src = pause;
                document.getElementById("subUserInp").classList.add("hidden");
                searchF();
              }}
            >
              Front
            </button>
            <button
              class="bg-green-500 px-[0.5rem] mr-4"
              onClick={(e) => {
                e.preventDefault();
                a[0].classList.remove("border-yellow-500");
                a[0].classList.remove("bg-yellow-500");
                a[0].classList.remove("text-white");
                a[list.length-1].classList.remove("border-yellow-500");
                a[list.length-1].classList.remove("bg-yellow-500");
                a[list.length-1].classList.remove("text-white");
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
                  .getElementById("newListContainer")
                  .classList.add("hidden");
                speech.cancel();
                document.getElementById("ppcont").disabled = false;
                document.getElementById("play/pause").src = pause;
                document.getElementById("subUserInp").classList.add("hidden");
                searchB();
              }}
            >
              Back
            </button>
          </div>
          <div
            class="ml-[0.5rem] pl-[0.5rem] mt-[11.7%] h-8 bg-yellow-300 flex items-center hidden max-h-newList-ins hide"
            id="newEnQueueContainer"
          >
            <form>
              <label>v = </label>
              <input
                class="mr-[0.5rem] max-h-newList-input"
                defaultValue={parseInt(Math.floor(Math.random() * 199) - 99)}
                size={10}
                id="newEnQueue"
              />
              <button
                class="bg-green-700 px-[0.5rem]"
                onClick={(e) => {
                  e.preventDefault();
                  a[0].classList.remove("border-yellow-500");
                  a[0].classList.remove("bg-yellow-500");
                  a[0].classList.remove("text-white");
                  a[list.length-1].classList.remove("border-yellow-500");
                  a[list.length-1].classList.remove("bg-yellow-500");
                  a[list.length-1].classList.remove("text-white");
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
                    .getElementById("newListContainer")
                    .classList.add("hidden");
                  speech.cancel();
                  document.getElementById("ppcont").disabled = false;
                  document.getElementById("play/pause").src = pause;
                  document.getElementById("subUserInp").classList.add("hidden");
                  let enq=document.getElementById('newEnQueue').value;
                  insertA(parseInt(enq));
                  document.getElementById('newEnQueue').value=parseInt(Math.floor(Math.random() * 199) - 99)
                }}
              >
                Go
              </button>
            </form>
          </div>
        </div>
      </div>
    </listContext.Provider>
  );
}
