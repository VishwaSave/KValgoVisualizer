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
      if (!n.children[4].classList.contains("hidden"))
        n.children[4].classList.add("hidden");
      if (!n.children[5].classList.contains("hidden"))
        n.children[5].classList.add("hidden");
      if (!n.children[6].classList.contains("hidden"))
        n.children[6].classList.add("hidden");
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
          .getElementsByClassName("arrow-" + ind)[3]
          .classList.remove("bg-yellow-500");
        document
          .getElementsByClassName("arrow-" + ind)[0]
          .classList.remove("bg-green-500");
        document
          .getElementsByClassName("arrow-" + ind)[3]
          .classList.remove("bg-green-500");
        document
          .getElementsByClassName("arrow-" + ind)[0]
          .classList.remove("bg-blue-500");
        document
          .getElementsByClassName("arrow-" + ind)[3]
          .classList.remove("bg-blue-500");
      });
    }
  }, [list]);

  async function search() {
    document.getElementById("codeContainer").innerHTML = `
    <div class="px-2" id="br1">
      if empty, return NOT_FOUND
    </div>
    <div class="px-2" id="br2">
      index = 0, tmp = head
    </div>
    <div class="px-2" id="br3">
      while (tmp.item != v)
    </div>
    <div class="px-2 pl-5" id="br4">
      index++, tmp = tmp.next
    </div>
    <div class="px-2 pl-5" id="br5">
      if tmp == null
    </div>
    <div class="px-2 pl-8" id="br6">
      return NOT_FOUND
    </div>
    <div class="px-2" id="br7">
      return index
    </div>`;
    let txt,
      c = document.getElementById("textContainer"),
      k;
    let m = document.getElementById("newSearch").value;
    let n = document.getElementById("barContainer");
    let count = 0;
    b = [
      document.getElementById("br1"),
      document.getElementById("br2"),
      document.getElementById("br3"),
      document.getElementById("br4"),
      document.getElementById("br5"),
      document.getElementById("br6"),
      document.getElementById("br7"),
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
      txt =
        "This is the current Linked List. We want to search for value v = " +
        m +
        " starting from the head (index 0).";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[1].classList.add("bg-gray-700");
      a[0].classList.add("border-yellow-500");
      a[0].classList.add("bg-yellow-500");
      a[0].classList.add("text-white");
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      for (let i = 0; i < list.length; i++) {
        if (m == list[i]) {
          for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
          b[6].classList.add("bg-gray-700");
          txt =
            "Found value v = " +
            m +
            " at this highlighted vertex so we return index " +
            i;
          c.innerText = txt;
          msg.text = txt;
          speech.speak(msg);
          await new Promise((resolve) => {
            msg.addEventListener("end", () => {
              resolve();
            });
          });
          break;
        } else {
          for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
          b[2].classList.add("bg-gray-700");
          txt =
            "Comparing " +
            list[i] +
            " (index = " +
            i +
            ") with v = " +
            m +
            ". " +
            list[i] +
            " is not equal to " +
            m +
            " so we have to continue.";
          c.innerText = txt;
          msg.text = txt;
          speech.speak(msg);
          a[i].classList.remove("border-yellow-500");
          a[i].classList.remove("bg-yellow-500");
          a[i].classList.remove("text-white");
          a[i].classList.add("border-yellow-500");
          a[i].classList.add("text-yellow-500");
          await new Promise((resolve) => {
            msg.addEventListener("end", () => {
              resolve();
            });
          });
          count++;
        }
        if (count != list.length) {
          n.children[i].children[0].children[1].children[0].classList.add(
            "bg-yellow-500"
          );
          for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
          b[3].classList.add("bg-gray-700");
          b[4].classList.add("bg-gray-700");
          txt = "So pointer advances to the next vertex, continue searching.";
          c.innerText = txt;
          msg.text = txt;
          speech.speak(msg);
          a[i + 1].classList.add("border-yellow-500");
          a[i + 1].classList.add("bg-yellow-500");
          a[i + 1].classList.add("text-white");
          await new Promise((resolve) => {
            msg.addEventListener("end", () => {
              resolve();
            });
          });
        } else {
          for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
          b[4].classList.add("bg-gray-700");
          b[5].classList.add("bg-gray-700");
          txt =
            "Pointer have gone past the tail. We conclude that value v = " +
            m +
            " is NOT_FOUND in the Linked List.";
          c.innerText = txt;
          msg.text =
            "Pointer have gone past the tail. We conclude that value v = " +
            m +
            " is not found in the Linked List.";
          speech.speak(msg);
          await new Promise((resolve) => {
            msg.addEventListener("end", () => {
              resolve();
            });
          });
        }
      }
    }
    a.map((v, ind) => {
      v.classList.remove("bg-yellow-500");
      v.classList.remove("border-yellow-500");
      v.classList.remove("text-yellow-500");
      v.classList.remove("text-white");
      document
        .getElementsByClassName("arrow-" + ind)[0]
        .classList.remove("bg-yellow-500");
    });
  }
  async function insertB(m) {
    let txt,
      c = document.getElementById("textContainer"),
      k;
    let n = document.getElementById("barContainer");
    let count = 0;
    if (list.length == 0) {
      document.getElementById("codeContainer").innerHTML = `
      <div class="px-2" id="br1">
      Vertex vtx = new Vertex(v)
      </div>
      <div class="px-2" id="br2">
      vtx.next = head
      </div>
      <div class="px-2" id="br3">
      if (head != null) head.prev = vtx
      </div>
      <div class="px-2" id="br4">
      head = vtx, tail = head
      </div>`;
      b = [
        document.getElementById("br1"),
        document.getElementById("br2"),
        document.getElementById("br3"),
        document.getElementById("br4"),
      ];
      const newE = document.createElement("div");
      newE.style.transition = "all 3s ease-out";
      newE.id = "bar0";
      newE.innerHTML = `<div><div class="flex">
      <div
      class="w-[4rem] h-[2rem] max-lg:w-[5rem] pb-[1.4rem] max-lg:pb-[2.1rem] text-center border-4 border-yellow-500 bg-yellow-500 rounded-[50%] z-10 font-extrabold text-white"
        id="bar0"
      >
        ${m}
      </div>
    </div>
    </div>`;
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[0].classList.add("bg-gray-700");
      txt = "Create new vertex to store value " + m + ".";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      n.insertBefore(newE, n.children[0]);
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[1].classList.add("bg-gray-700");
      txt = "Head is currently null.";
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
      txt = "head points to vtx.";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      n.children[0].innerHTML = `<div class="flex">
      <div
      class="w-[4rem] h-[2rem] max-lg:w-[5rem] pb-[1.4rem] max-lg:pb-[2.1rem] text-center border-4 border-black border-green-500 bg-green-500 rounded-[50%] z-10 font-extrabold text-white"
        id="bar0"
      >
        ${m}
      </div>
      </div>
      <div
        class="w-[4rem] max-lg:w-[5rem] text-center text-red-700"
        id="title0"
        ><b>head/0</b></div>`;
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      txt = "Tail points to head.";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      n.children[0].innerHTML = `<div class="flex">
      <div
      class="w-[4rem] h-[2rem] max-lg:w-[5rem] pb-[1.4rem] max-lg:pb-[2.1rem] text-center border-4 border-black border-green-500 bg-green-500 rounded-[50%] z-10 font-extrabold text-white"
        id="bar0"
      >
        ${m}
      </div>
      <div class="relative w-5">
      <hr class="w-7 h-1 bg-black absolute top-1.5 left-[-0.5rem] transition ease-in-out duration-[3s] arrow-0" />
      </div>
      <div class="absolute">
      <hr class="w-2 h-1 bg-black relative top-1 left-[5.05rem] rotate-45 arrow-0" />
      </div>
      <div class="absolute">
      <hr class="w-2 h-1 bg-black relative top-2 left-[5.05rem] rotate-[140deg] arrow-0" />
      </div>
      <div class="absolute">
      <hr class="w-7 h-1 bg-black relative right-[-3.8rem] top-5 transition ease-in-out duration-[3s] arrow-0"  />
      </div>
      <div class="absolute">
      <hr class="w-2 h-1 bg-black border-0 relative top-[23px] left-[3.75rem] rotate-45 arrow-0" />
      </div>
      <div class="absolute">
      <hr class="w-2 h-1 bg-black border-0 relative top-[19px] left-[3.8rem] rotate-[140deg] arrow-0" />
      </div>
      </div>
      <div
        class="w-[4rem] max-lg:w-[5rem] text-center text-red-700"
        id="title0"
        ><b>head/tail/0</b></div>`;
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
    } else {
      document.getElementById("codeContainer").innerHTML = `
      <div class="px-2" id="br1">
      Vertex vtx = new Vertex(v)
      </div>
      <div class="px-2" id="br2">
      vtx.next = head
      </div>
      <div class="px-2" id="br3">
      if (head != null) head.prev = vtx
      </div>
      <div class="px-2" id="br4">
      head = vtx
      </div>`;
      b = [
        document.getElementById("br1"),
        document.getElementById("br2"),
        document.getElementById("br3"),
        document.getElementById("br4"),
      ];
      n.children[0].children[1].innerHTML = `<b>head/0</b>`;
      for (let i = 0; i < list.length; i++) {
        n = document.getElementById("barContainer");
        a[i].id = "bar" + (i + 1);
        for (let j = 1; j < 7; j++) {
          n.children[i].children[0].children[j].children[0].classList.remove(
            "arrow-" + i
          );
          n.children[i].children[0].children[j].children[0].classList.add(
            "arrow-" + (i + 1)
          );
        }
        n.children[i].children[1].id = "title" + (i + 1);
      }
      const newE = document.createElement("div");
      newE.style.transition = "all 3s ease-out";
      newE.id = "bar0";
      newE.innerHTML = `<div><div class="flex">
      <div
      class="w-[4rem] h-[2rem] max-lg:w-[5rem] pb-[1.4rem] max-lg:pb-[2.1rem] text-center border-4 border-yellow-500 bg-yellow-500 rounded-[50%] z-10 font-extrabold text-white"
        id="bar0"
      >
        ${m}
      </div>
      <div class="relative w-5">
      </div>
      </div>
      <div
        class="w-[4rem] max-lg:w-[5rem] text-center text-red-700"
        id="title0"
      ><b>vtx</b></div>
    </div>`;
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[0].classList.add("bg-gray-700");
      txt = "Create new vertex to store value " + m + ".";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      n.insertBefore(newE, n.children[0]);
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[1].classList.add("bg-gray-700");
      txt = "vtx.next points to the current head.";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      n.children[0].innerHTML = `<div><div class="flex">
      <div
      class="w-[4rem] h-[2rem] max-lg:w-[5rem] pb-[1.4rem] max-lg:pb-[2.1rem] text-center border-4 border-yellow-500 bg-yellow-500 rounded-[50%] z-10 font-extrabold text-white"
        id="bar0"
      >
        ${m}
      </div>
      <div class="relative w-5">
      <hr class="w-7 h-1 bg-black bg-yellow-500 absolute top-1.5 left-[-0.5rem] transition ease-in-out duration-[3s] arrow-0" />
      </div>
      <div class="absolute">
      <hr class="w-2 h-1 bg-black relative top-1 left-[5.05rem] rotate-45 arrow-0" />
      </div>
      <div class="absolute">
      <hr class="w-2 h-1 bg-black relative top-2 left-[5.05rem] rotate-[140deg] arrow-0" />
      </div>
      </div>
      <div
        class="w-[4rem] max-lg:w-[5rem] text-center text-red-700"
        id="title0"
        ><b>vtx</b></div>
        </div>`;
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[2].classList.add("bg-gray-700");
      txt = "Current head.prev points to vtx.";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      n.children[0].innerHTML = `<div class="flex">
      <div
      class="w-[4rem] h-[2rem] max-lg:w-[5rem] pb-[1.4rem] max-lg:pb-[2.1rem] text-center border-4 border-black border-green-500 bg-green-500 rounded-[50%] z-10 font-extrabold text-white"
        id="bar0"
      >
        ${m}
      </div>
      <div class="relative w-5">
      <hr class="w-7 h-1 bg-black absolute top-1.5 left-[-0.5rem] transition ease-in-out duration-[3s] arrow-0" />
      </div>
      <div class="absolute">
      <hr class="w-2 h-1 bg-black relative top-1 left-[5.05rem] rotate-45 arrow-0" />
      </div>
      <div class="absolute">
      <hr class="w-2 h-1 bg-black relative top-2 left-[5.05rem] rotate-[140deg] arrow-0" />
      </div>
      <div class="absolute">
      <hr class="w-7 h-1 bg-black bg-yellow-500 relative right-[-3.8rem] top-5 transition ease-in-out duration-[3s] arrow-0"  />
      </div>
      <div class="absolute">
      <hr class="w-2 h-1 bg-black border-0 relative top-[23px] left-[3.75rem] rotate-45 arrow-0" />
      </div>
      <div class="absolute">
      <hr class="w-2 h-1 bg-black border-0 relative top-[19px] left-[3.8rem] rotate-[140deg] arrow-0" />
      </div>
      </div>
      <div
        class="w-[4rem] max-lg:w-[5rem] text-center text-red-700"
        id="title0"
        ><b>vtx</b></div>`;
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[3].classList.add("bg-gray-700");
      txt = "head points to vtx.";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      n.children[0].innerHTML = `<div class="flex">
      <div
      class="w-[4rem] h-[2rem] max-lg:w-[5rem] pb-[1.4rem] max-lg:pb-[2.1rem] text-center border-4 border-black border-green-500 bg-green-500 rounded-[50%] z-10 font-extrabold text-white"
        id="bar0"
      >
        ${m}
      </div>
      <div class="relative w-5">
      <hr class="w-7 h-1 bg-black absolute top-1.5 left-[-0.5rem] transition ease-in-out duration-[3s] arrow-0" />
      </div>
      <div class="absolute">
      <hr class="w-2 h-1 bg-black relative top-1 left-[5.05rem] rotate-45 arrow-0" />
      </div>
      <div class="absolute">
      <hr class="w-2 h-1 bg-black relative top-2 left-[5.05rem] rotate-[140deg] arrow-0" />
      </div>
      <div class="absolute">
      <hr class="w-7 h-1 bg-black relative right-[-3.8rem] top-5 transition ease-in-out duration-[3s] arrow-0"  />
      </div>
      <div class="absolute">
      <hr class="w-2 h-1 bg-black border-0 relative top-[23px] left-[3.75rem] rotate-45 arrow-0" />
      </div>
      <div class="absolute">
      <hr class="w-2 h-1 bg-black border-0 relative top-[19px] left-[3.8rem] rotate-[140deg] arrow-0" />
      </div>
      </div>
      <div
        class="w-[4rem] max-lg:w-[5rem] text-center text-red-700"
        id="title0"
        ><b>head/0</b></div>`;
      n.children[1].children[1].innerHTML = "";
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
    }
    newList([parseInt(m), ...list]);
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
      tail.next = vtx, vtx.prev = tail
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
    if (list.length > 0)
      txt =
        "Current tail.next points to vtx. vtx.prev points back to the current tail.";
    else txt = "Current tail.next points to vtx.";
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
      np.children[4].classList.remove("hidden");
      np.children[4].children[0].classList.add("bg-yellow-500");
      np.children[5].classList.remove("hidden");
      np.children[6].classList.remove("hidden");
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
      </div><div class="relative w-5">
      <hr class="w-7 h-1 bg-black absolute top-1.5 left-[-0.5rem] transition ease-in-out duration-[3s] arrow-${list.length}" />
      </div>
      <div class="absolute">
      <hr class="w-2 h-1 bg-black relative top-1 left-[5.05rem] rotate-45 arrow-${list.length}" />
      </div>
      <div class="absolute">
      <hr class="w-2 h-1 bg-black relative top-2 left-[5.05rem] rotate-[140deg] arrow-${list.length}" />
      </div>
      <div class="absolute">
      <hr class="w-7 h-1 bg-black relative right-[-3.8rem] top-5 transition ease-in-out duration-[3s] arrow-${list.length}"  />
      </div>
      <div class="absolute">
      <hr class="w-2 h-1 bg-black border-0 relative top-[23px] left-[3.75rem] rotate-45 arrow-${list.length}" />
      </div>
      <div class="absolute">
      <hr class="w-2 h-1 bg-black border-0 relative top-[19px] left-[3.8rem] rotate-[140deg] arrow-${list.length}" />
      </div>
      </div>
      <div
        class="w-[4rem] max-lg:w-[5rem] text-center text-red-700"
        id="title${list.length}"
        ><b>tail/${list.length}</b></div>`;
    n.replaceChild(newE1, n.children[n.children.length - 1]);
    if (list.length > 0) {
      np =
        document.getElementById("barContainer").children[n.children.length - 2]
          .children[0];
      np.children[1].children[0].classList.remove("bg-yellow-500");
      np.children[4].children[0].classList.remove("bg-yellow-500");
      n.children[n.children.length - 2].children[1].innerHTML = "";
    }
    let nx =
      document.getElementById("barContainer").children[n.children.length - 1]
        .children[0];
    nx.children[1].classList.add("hidden");
    nx.children[2].classList.add("hidden");
    nx.children[3].classList.add("hidden");
    nx.children[4].classList.add("hidden");
    nx.children[5].classList.add("hidden");
    nx.children[6].classList.add("hidden");
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });
    newList([...list, parseInt(m)]);
  }
  async function insertS(m, m1) {
    document.getElementById("codeContainer").innerHTML = `
    <div class="px-2" id="br1">
    Vertex pre = head
    </div>
    <div class="px-2" id="br2">
    for (k = 0; k < i-1; k++)
    </div>
    <div class="px-2 pl-5" id="br3">
    pre = pre.next
    </div>
    <div class="px-2" id="br4">
    Vertex aft = pre.next
    </div>
    <div class="px-2" id="br5">
    Vertex vtx = new Vertex(v)
    </div>
    <div class="px-2" id="br6">
    vtx.next = aft, aft.prev = vtx
    </div>
    <div class="px-2" id="br7">
    pre.next = vtx, vtx.prev = pre
    </div>`;
    let txt,
      c = document.getElementById("textContainer"),
      k;
    let n = document.getElementById("barContainer");
    let count = 0;
    b = [
      document.getElementById("br1"),
      document.getElementById("br2"),
      document.getElementById("br3"),
      document.getElementById("br4"),
      document.getElementById("br5"),
      document.getElementById("br6"),
      document.getElementById("br7"),
    ];
    for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
    b[0].classList.add("bg-gray-700");
    txt = "Set pre to head.";
    c.innerText = txt;
    msg.text = txt;
    speech.speak(msg);
    let p = a[0];
    let ar;
    p.classList.add("border-yellow-500");
    p.classList.add("bg-yellow-500");
    p.classList.add("text-white");
    let tr1 = document.getElementById("title0");
    tr1.innerHTML = "<b>h/p/0</b>";
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });
    p.classList.remove("border-yellow-500");
    p.classList.remove("bg-yellow-500");
    p.classList.remove("text-white");
    for (let i = 0; i < m - 1; i++) {
      p = a[i];
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[1].classList.add("bg-gray-700");
      txt =
        "Decrement k, index specified has not been reached. k is now: " +
        i +
        ".";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      p.classList.add("border-yellow-500");
      p.classList.add("bg-yellow-500");
      p.classList.add("text-white");
      if (i != 0) {
        let tmp = document.getElementById("title" + (i - 1));
        if (i - 1 == 0) tmp.innerHTML = "<b>head/0</b>";
        else tmp.innerHTML = "";
        tr1 = document.getElementById("title" + i);
        tr1.innerHTML = "<b>p/" + i + "</b>";
      }
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[2].classList.add("bg-gray-700");
      txt = "We set pre to the next vertex.";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      p.classList.add("border-yellow-500");
      p.classList.remove("bg-yellow-500");
      p.classList.remove("text-white");
      p.classList.add("text-yellow-500");
      ar = document.getElementsByClassName("arrow-" + i);
      ar[0].classList.add("bg-yellow-500");
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
    }
    for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
    b[1].classList.add("bg-gray-700");
    txt =
      "We have found the insertion point. We continue the next insertion step.";
    c.innerText = txt;
    msg.text = txt;
    speech.speak(msg);
    p = a[m - 1];
    p.classList.add("border-yellow-500");
    p.classList.add("bg-yellow-500");
    p.classList.add("text-white");
    if (m - 2 == 0)
      document.getElementById("title" + (m - 2)).innerHTML = "<b>head/0</b>";
    if (m - 2 > 0) document.getElementById("title" + (m - 2)).innerHTML = "";
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });
    for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
    b[3].classList.add("bg-gray-700");
    txt =
      "The index before insertion point is found. pre is before the insertion point and aft is the insertion point.";
    c.innerText = txt;
    msg.text = txt;
    speech.speak(msg);
    ar = document.getElementsByClassName("arrow-" + (m - 1));
    ar[0].classList.add("bg-yellow-500");
    let ai = a[m];
    let tr2 = document.getElementById("title" + m);
    ai.classList.add("border-blue-500");
    ai.classList.add("bg-blue-500");
    ai.classList.add("text-white");
    tr2.innerHTML = "<b>a/" + m + "</b>";
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });
    for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
    b[4].classList.add("bg-gray-700");
    txt = "Create new vertex to store value " + m1 + ".";
    c.innerText = txt;
    msg.text = txt;
    speech.speak(msg);
    const newE = document.createElement("div");
    newE.style.transition = "all 3s ease-out";
    newE.id = `bar`;
    newE.innerHTML = `<div><div class="flex">
        <div
        class="w-[4rem] h-[2rem] max-lg:w-[5rem] pb-[1.4rem] max-lg:pb-[2.1rem] text-center border-4 border-green-500 bg-green-500 rounded-[50%] z-10 font-extrabold text-white"
        id="bar"
        >
        ${m1}
        </div>
        </div>
        <div
        class="w-[4rem] max-lg:w-[5rem] text-center text-red-700"
        id="title"
        ><b>vtx</b></div>
        </div>`;
    n.children[m].appendChild(newE);
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });
    for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
    b[5].classList.add("bg-gray-700");
    txt = "vtx.next points to aft. aft.prev points to vtx.";
    c.innerText = txt;
    msg.text = txt;
    speech.speak(msg);
    newE.innerHTML = `<div>
    <div class="absolute">
    <hr class="w-1 h-7 bg-black bg-yellow-500 z-10 relative left-[1.5rem] bottom-[24px] transition ease-in-out duration-[3s] arrow-" />
    </div>
    <div class="absolute">
    <hr class="w-1 h-2 bg-black relative  bottom-[24.2px] left-[1.4rem] z-10 rotate-45 arrow-" />
    </div>
    <div class="absolute">
    <hr class="w-1 h-2 bg-black relative  bottom-[24.2px] left-[1.6rem] z-10 rotate-[140deg] arrow-" />
    </div>
    <div class="absolute">
    <hr class="w-1 h-7 bg-black bg-yellow-500 z-10 relative left-[2.5rem] bottom-[24px] z-10 transition ease-in-out duration-[3s] arrow-"  />
    </div>
    <div class="absolute">
    <hr class="w-1 h-2 bg-black border-0 relative  bottom-[7px] left-[2.6rem] z-10 rotate-45 arrow-" />
    </div>
    <div class="absolute">
    <hr class="w-1 h-2 bg-black border-0 relative  bottom-[7px] left-[2.4rem] rotate-[140deg] z-10 arrow-" />
    </div>
      <div class="flex">
      <div
      class="w-[4rem] h-[2rem] max-lg:w-[5rem] pb-[1.4rem] max-lg:pb-[2.1rem] text-center border-4 border-green-500 bg-green-500 rounded-[50%] z-10 font-extrabold text-white"
      id="bar"
      >
      ${m1}
      </div>
      </div>
      <div
      class="w-[4rem] max-lg:w-[5rem] text-center text-red-700"
      id="title"
      ><b>vtx</b></div>
      </div>`;
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });
    for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
    b[6].classList.add("bg-gray-700");
    txt = "pre.next points to vtx. vtx.prev points to pre.";
    c.innerText = txt;
    msg.text = txt;
    speech.speak(msg);
    n.children[m].removeChild(newE);
    newE.innerHTML = `<div>
      <div class="flex">
      <div
      class="w-[4rem] h-[2rem] max-lg:w-[5rem] pb-[1.4rem] max-lg:pb-[2.1rem] text-center border-4 border-black border-green-500 bg-green-500 rounded-[50%] z-10 font-extrabold text-white"
      id="bar${m}"
      >
      ${m1}
      </div>
      <div class="relative w-5">
      <hr class="w-7 h-1 bg-black bg-yellow-500 absolute top-1.5 left-[-0.5rem] transition ease-in-out duration-[3s] arrow-${m}" />
      </div>
      <div class="absolute">
      <hr class="w-2 h-1 bg-black relative top-1 left-[5.05rem] rotate-45 arrow-${m}" />
      </div>
      <div class="absolute">
      <hr class="w-2 h-1 bg-black relative top-2 left-[5.05rem] rotate-[140deg] arrow-${m}" />
      </div>
      <div class="absolute">
      <hr class="w-7 h-1 bg-black bg-yellow-500 relative right-[-3.8rem] top-5 transition ease-in-out duration-[3s] arrow-${m}"  />
      </div>
      <div class="absolute">
      <hr class="w-2 h-1 bg-black border-0 relative top-[23px] left-[3.75rem] rotate-45 arrow-${m}" />
      </div>
      <div class="absolute">
      <hr class="w-2 h-1 bg-black border-0 relative top-[19px] left-[3.8rem] rotate-[140deg] arrow-${m}" />
      </div>
      </div>
      <div
      class="w-[4rem] max-lg:w-[5rem] text-center text-red-700"
      id="title${m}"
      ><b>vtx</b></div>
      </div>`;

    let am = [];
    ar = document.getElementsByClassName("arrow-" + (m - 1));
    ar[3].classList.add("bg-yellow-500");
    for (k = 0; k < parseInt(m); k++) am.push(n.children[k]);
    am.push(newE);
    for (k = parseInt(m); k < list.length; k++) {
      n = document.getElementById("barContainer");
      n.children[k].children[0].children[0].id = "bar" + (k + 1);
      n.children[k].children[1].id = "title" + (k + 1);
      for (let j = 1; j < 7; j++) {
        n.children[k].children[0].children[j].children[0].classList.remove(
          "arrow-" + k
        );
        n.children[k].children[0].children[j].children[0].classList.add(
          "arrow-" + (k + 1)
        );
      }
      am.push(n.children[k]);
    }
    n.innerHTML = "";
    am.map((v) => {
      n.appendChild(v);
    });
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });
    newList([...list.slice(0, m), parseInt(m1), ...list.slice(m, list.length)]);
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
    <div class="px-2" id="br5">
    if (head != null) head.prev = null
    </div>
    `;
    b = [
      document.getElementById("br1"),
      document.getElementById("br2"),
      document.getElementById("br3"),
      document.getElementById("br5"),
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
        for (let j = 1; j < 7; j++) {
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
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[4].classList.add("bg-gray-700");
      txt = "Set head.prev to null for consistency purpose.";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      newList(list.slice(1, list.length));
    }
  }
  async function removeA() {
    document.getElementById("codeContainer").innerHTML = `
    <div class="px-2" id="br1">
    if empty, do nothing
    </div>
    <div class="px-2" id="br2">
    tmp = tail
    </div>
    <div class="px-2" id="br3">
    tail = tail.prev
    </div>
    <div class="px-2" id="br4">
    tail.next = null
    </div>
    <div class="px-2" id="br5">
    delete tmp
    </div>`;
    let txt,
      c = document.getElementById("textContainer"),
      k;
    let n = document.getElementById("barContainer");
    let count = 0;
    b = [
      document.getElementById("br1"),
      document.getElementById("br2"),
      document.getElementById("br3"),
      document.getElementById("br4"),
      document.getElementById("br5"),
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
      removeB();
    } else {
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[1].classList.add("bg-gray-700");
      txt =
        "Set tmp to (old) tail.";
      c.innerText = txt;
      msg.text = "Set temp to (old) tail.";
      speech.speak(msg);
      let p = a[list.length-1];
      p.classList.add("border-yellow-500");
      p.classList.add("bg-yellow-500");
      p.classList.add("text-white");
      let tr1 = document.getElementById("title"+(list.length-1));
      tr1.innerHTML = "<b>tail/tmp</b>";
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[2].classList.add("bg-gray-700");
      txt =
        "Set tail to tail.prev";
      c.innerText = txt;
      msg.text =txt;
      speech.speak(msg);
      let ar = document.getElementsByClassName("arrow-"+(list.length-2));
      ar[3].classList.add("bg-yellow-500");
      let t = a[list.length-2];
      t.classList.add("border-green-500");
      t.classList.add("bg-green-500");
      t.classList.add("text-white");
      tr1.innerHTML = "<b>tmp</b>";
      let tr2 = document.getElementById("title"+(list.length-2));
      tr2.innerHTML = "<b>temp</b>";
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
        for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
        b[3].classList.add("bg-gray-700");
        b[4].classList.add("bg-gray-700");
        txt = "Set the next of (new) tail to null; Delete tmp.";
        c.innerText = txt;
        msg.text = "Set the next of (new) tail to null; Delete temp.";
        speech.speak(msg);
          n.removeChild(n.children[n.children.length - 1]);
          ar[0].classList.add("hidden");
          ar[1].classList.add("hidden");
          ar[2].classList.add("hidden");
          ar[3].classList.add("hidden");
          ar[4].classList.add("hidden");
          ar[5].classList.add("hidden");
          await new Promise((resolve) => {
            msg.addEventListener("end", () => {
              resolve();
            });
          });
      newList(list.slice(0, list.length - 1));
    }
  }
  async function removeS(m) {
    document.getElementById("codeContainer").innerHTML = `
    <div class="px-2" id="br7">
    if empty, do nothing
    </div>
    <div class="px-2" id="br1">
    Vertex pre = head
    </div>
    <div class="px-2" id="br2">
    for (k = 0; k < i-1; k++)
    </div>
    <div class="px-2 pl-5" id="br3">
    pre = pre.next
    </div>
    <div class="px-2" id="br4">
    Vertex del = pre.next, aft = del.next
    </div>
    <div class="px-2" id="br5">
    pre.next = aft, aft.prev = pre
    </div>
    <div class="px-2" id="br6">
    delete del
    </div>`;
    let txt,
      c = document.getElementById("textContainer"),
      k;
    let n = document.getElementById("barContainer");
    let count = 0;
    b = [
      document.getElementById("br1"),
      document.getElementById("br2"),
      document.getElementById("br3"),
      document.getElementById("br4"),
      document.getElementById("br5"),
      document.getElementById("br6"),
      document.getElementById("br7"),
    ];
    for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
    b[0].classList.add("bg-gray-700");
    txt =
      "Set prev to head. Pointer prev will stop at one vertex before the deleted vertex.";
    c.innerText = txt;
    msg.text = txt;
    speech.speak(msg);
    let p = a[0];
    let ar;
    p.classList.add("border-yellow-500");
    p.classList.add("bg-yellow-500");
    p.classList.add("text-white");
    let tr1 = document.getElementById("title0");
    tr1.innerHTML = "<b>h/p/0</b>";
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });
    p.classList.remove("border-yellow-500");
    p.classList.remove("bg-yellow-500");
    p.classList.remove("text-white");
    for (let i = 0; i < m - 1; i++) {
      p = a[i];
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[1].classList.add("bg-gray-700");
      txt = "Index specified has not been reached. k = {i}.";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      p.classList.add("border-yellow-500");
      p.classList.add("bg-yellow-500");
      p.classList.add("text-white");
      if (i != 0) {
        let tmp = document.getElementById("title" + (i - 1));
        if (i - 1 == 0) tmp.innerHTML = "<b>head/0</b>";
        else tmp.innerHTML = "";
        tr1 = document.getElementById("title" + i);
        tr1.innerHTML = "<b>p/" + i + "</b>";
      }
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
      for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
      b[2].classList.add("bg-gray-700");
      txt = "Pointer prev advances to the next vertex.";
      c.innerText = txt;
      msg.text = txt;
      speech.speak(msg);
      p.classList.add("border-yellow-500");
      p.classList.remove("bg-yellow-500");
      p.classList.remove("text-white");
      p.classList.add("text-yellow-500");
      ar = document.getElementsByClassName("arrow-" + i);
      ar[0].classList.add("bg-yellow-500");
      await new Promise((resolve) => {
        msg.addEventListener("end", () => {
          resolve();
        });
      });
    }
    for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
    b[1].classList.add("bg-gray-700");
    txt =
      "prev now points to one vertex behind the vertex to-be-deleted. We stop searching and continue with the removal.";
    c.innerText = txt;
    msg.text = txt;
    speech.speak(msg);
    p = a[m - 1];
    p.classList.add("border-yellow-500");
    p.classList.add("bg-yellow-500");
    p.classList.add("text-white");
    if (m - 2 == 0)
      document.getElementById("title" + (m - 2)).innerHTML = "<b>head/0</b>";
    if (m - 2 > 0) document.getElementById("title" + (m - 2)).innerHTML = "";
    if (m - 1 > 0) {
      tr1 = document.getElementById("title" + (m - 1));
      tr1.innerHTML = "<b>p/" + (m - 1) + "</b>";
    }
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });
    for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
    b[3].classList.add("bg-gray-700");
    txt =
      "We store reference to the vertex to-be-deleted. We also store reference to the vertex after the to-be-deleted vertex.";
    c.innerText = txt;
    msg.text = txt;
    speech.speak(msg);
    ar = document.getElementsByClassName("arrow-" + (m - 1));
    ar[0].classList.add("bg-yellow-500");
    ar[3].classList.add("bg-yellow-500");
    let ar1 = document.getElementsByClassName("arrow-" + m);
    ar1[0].classList.add("bg-yellow-500");
    ar1[3].classList.add("bg-yellow-500");
    let ai = a[m];
    ai.classList.add("border-red-500");
    ai.classList.add("bg-red-500");
    ai.classList.add("text-white");
    let tr2 = document.getElementById("title" + m);
    tr2.innerHTML = "<b>del/" + m + "</b>";
    let al = a[m + 1];
    let tr3 = document.getElementById("title" + (m + 1));
    al.classList.add("border-green-500");
    al.classList.add("bg-green-500");
    al.classList.add("text-white");
    tr3.innerHTML = "<b>a/" + (m + 1) + "</b>";
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });
    for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
    b[4].classList.add("bg-gray-700");
    txt =
      "We connect the vertex behind the vertex to-be-deleted (pointer prev) with the next vertex after the vertex to-be-deleted (pointer after).";
    c.innerText = txt;
    msg.text = txt;
    speech.speak(msg);
    n.children[m].style.transform = `translateY(-5rem)`;
    ar1[0].parentElement.classList.add("absolute");
    ar1[0].style.transition = "all 0s ease-out";
    ar1[3].style.transition = "all 0s ease-out";
    ar1[3].classList.add("hidden");
    ar1[4].classList.add("hidden");
    ar1[5].classList.add("hidden");
    ar1[0].classList.add("w-[69px]");
    ar1[0].classList.add("left-[-1.5rem]");
    ar1[0].classList.add("top-[50px]");
    ar1[0].classList.add("rotate-[55deg]");
    ar1[1].classList.add("top-[79.5px]");
    ar1[1].classList.add("rotate-[15deg]");
    ar1[1].classList.add("left-[5.5rem]");
    ar1[2].classList.add("top-[78px]");
    ar1[2].classList.add("rotate-[130deg]");
    ar1[2].classList.add("left-[5.75rem]");
    const newE = document.createElement("div");
    newE.classList.add("absolute");
    newE.innerHTML = `<hr
    class="w-[6rem] h-1 bg-yellow-500 relative left-[1rem] top-1.5"
    />`;
    ar[0].parentElement.appendChild(newE);
    ar[1].classList.add("left-[10.3rem]");
    ar[2].classList.add("left-[10.3rem]");
    ar[3].classList.add("w-[7rem]");
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });
    ar1[0].style.transition = "all 3s ease-out";
    ar1[3].style.transition = "all 3s ease-out";
    for (k = 0; k < b.length; k++) b[k].classList.remove("bg-gray-700");
    b[5].classList.add("bg-gray-700");
    txt = "Now we delete this vertex.";
    c.innerText = txt;
    msg.text = txt;
    speech.speak(msg);
    n.removeChild(n.children[m]);
    for (k = 0; k < list.length; k++) {
      n = document.getElementById("barContainer");
      if (k != 0 && k != m && k != list.length - 1) {
        document.getElementById("title" + k).innerHTML = "";
      }
    }
    for (k = m + 1; k < list.length; k++) {
      a[k].id = "bar" + (k - 1);
      document.getElementById("title" + k).id = "title" + (k - 1);
      n.children[k - 1].children[0].children[1].children[0].classList.remove(
        "arrow-" + k
      );
      n.children[k - 1].children[0].children[1].children[0].classList.add(
        "arrow-" + (k - 1)
      );
      n.children[k - 1].children[0].children[2].children[0].classList.remove(
        "arrow-" + k
      );
      n.children[k - 1].children[0].children[2].children[0].classList.add(
        "arrow-" + (k - 1)
      );
      n.children[k - 1].children[0].children[3].children[0].classList.remove(
        "arrow-" + k
      );
      n.children[k - 1].children[0].children[3].children[0].classList.add(
        "arrow-" + (k - 1)
      );
      n.children[k - 1].children[0].children[4].children[0].classList.remove(
        "arrow-" + k
      );
      n.children[k - 1].children[0].children[4].children[0].classList.add(
        "arrow-" + (k - 1)
      );
      n.children[k - 1].children[0].children[5].children[0].classList.remove(
        "arrow-" + k
      );
      n.children[k - 1].children[0].children[5].children[0].classList.add(
        "arrow-" + (k - 1)
      );
      n.children[k - 1].children[0].children[6].children[0].classList.remove(
        "arrow-" + k
      );
      n.children[k - 1].children[0].children[6].children[0].classList.add(
        "arrow-" + (k - 1)
      );
    }
    ar[0].parentElement.removeChild(ar[0].parentElement.children[1]);
    ar[0].classList.remove("bg-yellow-500");
    ar[3].classList.remove("w-[7rem]");
    ar[3].classList.remove("bg-yellow-500");
    ar[1].classList.remove("left-[10.3rem]");
    ar[2].classList.remove("left-[10.3rem]");
    await new Promise((resolve) => {
      msg.addEventListener("end", () => {
        resolve();
      });
    });
    newList([...list.slice(0, m), ...list.slice(m + 1, list.length)]);
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
              Search
            </button>
            <button
              class="w-[100%] h-10 mt-1 bg-yellow-600 text-center max-h-newList"
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
                document
                  .getElementById("newSearchContainer")
                  .classList.add("hidden");
                document
                  .getElementById("newListContainer")
                  .classList.add("hidden");
              }}
            >
              Insert
            </button>
            <button
              class="w-[100%] h-10 mt-1 bg-yellow-600 text-center max-h-newList"
              onClick={(e) => {
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
                document
                  .getElementById("newSearchContainer")
                  .classList.add("hidden");
                document
                  .getElementById("newListContainer")
                  .classList.add("hidden");
              }}
            >
              Remove
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
                    <div class="relative w-5">
                      <hr class="w-7 h-1 bg-black absolute top-1.5 left-[-0.5rem] transition ease-in-out duration-[3s] arrow-${ind}" />
                    </div>
                    <div class="absolute">
                      <hr class="w-2 h-1 bg-black relative top-1 left-[5.05rem] rotate-45 arrow-${ind}" />
                    </div>
                    <div class="absolute">
                      <hr class="w-2 h-1 bg-black relative top-2 left-[5.05rem] rotate-[140deg] arrow-${ind}" />
                    </div>
                    <div class="absolute">
                      <hr class="w-7 h-1 bg-black relative right-[-3.8rem] top-5 transition ease-in-out duration-[3s] arrow-${ind}"  />
                    </div>
                    <div class="absolute">
                      <hr class="w-2 h-1 bg-black border-0 relative top-[23px] left-[3.75rem] rotate-45 arrow-${ind}" />
                    </div>
                    <div class="absolute">
                      <hr class="w-2 h-1 bg-black border-0 relative top-[19px] left-[3.8rem] rotate-[140deg] arrow-${ind}" />
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
                        <div class="relative w-5">
                          <hr class="w-7 h-1 bg-black absolute top-1.5 left-[-0.5rem] transition ease-in-out duration-[3s] arrow-${ind}" />
                        </div>
                        <div class="absolute">
                          <hr class="w-2 h-1 bg-black relative top-1 left-[5.05rem] rotate-45 arrow-${ind}" />
                        </div>
                        <div class="absolute">
                          <hr class="w-2 h-1 bg-black relative top-2 left-[5.05rem] rotate-[140deg] arrow-${ind}" />
                        </div>
                        <div class="absolute">
                          <hr class="w-7 h-1 bg-black relative right-[-3.8rem] top-5 transition ease-in-out duration-[3s] arrow-${ind}"  />
                        </div>
                        <div class="absolute">
                          <hr class="w-2 h-1 bg-black border-0 relative top-[23px] left-[3.75rem] rotate-45 arrow-${ind}" />
                        </div>
                        <div class="absolute">
                          <hr class="w-2 h-1 bg-black border-0 relative top-[19px] left-[3.8rem] rotate-[140deg] arrow-${ind}" />
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
            <form>
              <label>v = </label>
              <input
                class="mr-[0.5rem] max-h-newList-input"
                defaultValue={parseInt(Math.floor(Math.random() * 199) - 99)}
                size={3}
                id="newSearch"
              />
              <button
                class="bg-green-700 px-[0.5rem]"
                onClick={(e) => {
                  e.preventDefault();
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
                  search();
                }}
              >
                Go
              </button>
            </form>
          </div>
          <div className="flex flex-col hidden hide" id="newInsertContainer">
            <div class="ml-[0.5rem] pl-[0.5rem] mt-[19.7%] h-8 bg-yellow-300 flex items-center max-h-newList-ins text-[0.85rem]">
              <button
                class="bg-green-500 px-[0.1rem] mr-2 font-bold"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("insertB").classList.remove("hidden");
                  document.getElementById("newInsert1").focus();
                  document.getElementById("insertA").classList.add("hidden");
                  document.getElementById("insertS").classList.add("hidden");
                }}
              >
                i=0(head), specify v=
              </button>
              <button
                class="bg-green-500 px-[0.1rem] mr-2 font-bold"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("insertA").classList.remove("hidden");
                  document.getElementById("newInsert2").focus();
                  document.getElementById("insertB").classList.add("hidden");
                  document.getElementById("insertS").classList.add("hidden");
                }}
              >
                i=N(After Tail), specify v=
              </button>
              <button
                class="bg-green-500 px-[0.1rem] mr-2 font-bold"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("insertS").classList.remove("hidden");
                  document.getElementById("newInserti").focus();
                  document.getElementById("insertA").classList.add("hidden");
                  document.getElementById("insertB").classList.add("hidden");
                }}
              >
                specify both i in [1..N-1] and v=
              </button>
            </div>
            <form
              className="ml-[1rem] relative bottom-2 pl-[0.5rem] pt-1 w-[8.67rem] h-7 bg-green-500 hidden text-[0.85rem] hide"
              id="insertB"
            >
              <label>v = </label>
              <input
                class="mr-[0.5rem] max-h-newList-input"
                defaultValue={parseInt(Math.floor(Math.random() * 199) - 99)}
                size={4}
                id="newInsert1"
              />
              <button
                class="bg-green-700 px-[0.5rem]"
                onClick={(e) => {
                  e.preventDefault();
                  let m = document.getElementById("newInsert1").value;
                  document.getElementById("newInsert1").value = parseInt(
                    Math.floor(Math.random() * 199) - 99
                  );
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
                  insertB(m);
                }}
              >
                Go
              </button>
            </form>
            <form
              className="ml-[10.15rem] relative bottom-2 pl-[0.5rem] pt-1 w-[10.6rem] h-7 bg-green-500 hidden text-[0.85rem] hide"
              id="insertA"
            >
              <label>v = </label>
              <input
                class="mr-[0.5rem] max-h-newList-input"
                defaultValue={parseInt(Math.floor(Math.random() * 199) - 99)}
                size={4}
                id="newInsert2"
              />
              <button
                class="bg-green-700 px-[0.5rem] ml-[2rem]"
                onClick={(e) => {
                  e.preventDefault();
                  let m = document.getElementById("newInsert2").value;
                  document.getElementById("newInsert2").value = parseInt(
                    Math.floor(Math.random() * 199) - 99
                  );
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
                  insertA(m);
                }}
              >
                Go
              </button>
            </form>
            <form
              className="ml-[21.25rem] relative bottom-2 pl-[0.4rem] pt-1 w-[12.95rem] h-7 bg-green-500 hidden text-[0.85rem] hide"
              id="insertS"
            >
              <label>i = </label>
              <input
                class="mr-[0.3rem] max-h-newList-input"
                defaultValue={parseInt(
                  Math.floor(Math.random() * (list.length - 1)) + 1
                )}
                size={3}
                id="newInserti"
              />
              <label>v = </label>
              <input
                class="mr-[0.3rem] max-h-newList-input"
                defaultValue={parseInt(Math.floor(Math.random() * 199) - 99)}
                size={4}
                id="newInsert3"
              />
              <button
                class="bg-green-700 px-[0.5rem]"
                onClick={(e) => {
                  e.preventDefault();
                  let m = parseInt(document.getElementById("newInserti").value);
                  document.getElementById("newInserti").value = parseInt(
                    Math.floor(Math.random() * (list.length - 1)) + 1
                  );
                  let m1 = parseInt(
                    document.getElementById("newInsert3").value
                  );
                  document.getElementById("newInsert3").value = parseInt(
                    Math.floor(Math.random() * 199) - 99
                  );
                  if (list.length == 0) {
                    alert(`Please enter a valid index between [1..1].`);
                  } else if (list.length == 1) {
                    if (m != 1) {
                      alert(`Please enter a valid index between [1..1].`);
                    } else {
                      insertA(m1);
                    }
                  } else if (m == 0) {
                    alert(
                      `Please enter a valid index between [1..${
                        list.length - 1
                      }].`
                    );
                  } else if (m >= list.length) {
                    if (m == list.length) insertA(m1);
                    else {
                      alert(
                        `Please enter a valid index between [1..${
                          list.length - 1
                        }].`
                      );
                    }
                  } else {
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
                    document
                      .getElementById("subUserInp")
                      .classList.add("hidden");
                    insertS(m, m1);
                  }
                }}
              >
                Go
              </button>
            </form>
          </div>
          <div className="flex flex-col hidden hide" id="newRemoveContainer">
            <div class="ml-[0.5rem] pl-[0.5rem] mt-[34.7%] h-8 bg-yellow-300 flex items-center max-h-newList-ins text-[0.85rem]">
              <button
                class="bg-green-500 px-[0.1rem] mr-2 font-bold"
                onClick={(e) => {
                  e.preventDefault();
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
                Remove i = 0 (Head)
              </button>
              <button
                class="bg-green-500 px-[0.1rem] mr-2 font-bold"
                onClick={(e) => {
                  e.preventDefault();
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
                  removeA();
                }}
              >
                Remove i = N-1 (Tail)
              </button>
              <button
                class="bg-green-500 px-[0.1rem] mr-2 font-bold"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("remove").classList.remove("hidden");
                  document.getElementById("newRemove").focus();
                }}
              >
                specify i in [1..N-2]
              </button>
            </div>
            <form
              className="ml-[19.1rem] relative bottom-2 pl-[0.5rem] pt-1 w-[7.75rem] h-7 bg-green-500 hidden text-[0.85rem] hide"
              id="remove"
            >
              <label>i = </label>
              <input
                class="mr-[0.5rem] max-h-newList-input"
                defaultValue={parseInt(
                  Math.floor(Math.random() * (list.length - 2)) + 1
                )}
                size={3}
                id="newRemove"
              />
              <button
                class="bg-green-700 px-[0.5rem]"
                onClick={(e) => {
                  e.preventDefault();
                  let m = parseInt(document.getElementById("newRemove").value);
                  if (list.length == 0)
                    alert("This operation only works for N bigger than 2");
                  else if (m > 0 && m < list.length - 1) {
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
                    document
                      .getElementById("subUserInp")
                      .classList.add("hidden");
                    removeS(m);
                  } else {
                    alert(
                      `Please enter a valid index between [1..${
                        list.length - 2
                      }].`
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
    </listContext.Provider>
  );
}
