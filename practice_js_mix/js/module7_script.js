//============================================
// клик
// document.onclick = function(e){
//     console.log('click', e)
// }
//============================================
// function onDocClicked(e) {
//   console.log("click", e);
// }
// document.addEventListener("click", onDocClicked);
//============================================
{
  /* <div class="container">
<input id="ipt-1" type="text" class="input">
<button id="btn-1" class="button">load</button>
</div> */
}

//============================================
// window.onload = function(event) {
//   window.document.title = "Я загрузился";
//   console.log("Документ загружен", event);
//   const btn = this.document.getElementById("btn-1");
//   const input = document.getElementById("ipt-1");
//   this.console.dir(btn);
//   btn.innerText = "Загрузи меня";
//   btn.onclick = mouseEvent => {
//     this.console.log(input.value);
//     window.document.title = input.value;
//   };
// };
// console.log("ipt-1");
//============================================
// const pip = [
//   {
//     name: "Mango_1",
//     surname: "Bananovitch_1",
//     phone: "+380987238801",
//     age: 17
//   },
//   {
//     name: "Mango_2",
//     surname: "Bananovitch_2",
//     phone: "+380987238802",
//     age: 19
//   },
//   {
//     name: "Mango_3",
//     surname: "Bananovitch_3",
//     phone: "+380987238803",
//     age: 17
//   },
//   {
//     name: "Mango_4",
//     surname: "Bananovitch_4",
//     phone: "+380987238804",
//     age: 12
//   },
//   { name: "Mango_5", surname: "Bananovitch_5", phone: "+380987238805", age: 21 }
// ];

// window.onload = function(event) {
//   window.document.title = "Я загрузился";
//   console.log("Документ загружен", event);
//   const btn = document.getElementById("btn-1");
//   const ipt = document.getElementById("ipt-1");
//   this.console.dir(ipt);
//   this.console.dir(btn);
//   btn.innerText = "Загрузи меня";
//   ipt.oninput = mouseEvent => {
//     this.console.log(ipt.value);
//     window.document.title = ipt.value;
//   };
//   const li = this.document.querySelector;
// };
// console.log("ipt-1");

// const becomeRed = function(event) {
//     event.target.style.color === "red" ?
//     event.target.style.color = "black" :
//     event.target.style.color = "red";
// };

// const liAdd = function(arr) {
//   arr.forEach(element => {
//     const ul = document.querySelector("ul");
//     let li = document.createElement("li");
//     ul.appendChild(li);
//     li.innerHTML = element.name;
//     li.addEventListener("click", becomeRed);
//   });
// };
// liAdd(pip);
//============================================

// const paragraphs = document.getElementsByTagName("P");
// // paragraphs[0] это первый <p> элемент
// // paragraphs[1] это второй <p> элемент и т.д.
// // alert(paragraphs[1].nodeName);
// console.log(document);
