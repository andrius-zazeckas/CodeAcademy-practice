// 1. Susikuriame h1 elementą, jame įrašome savo vardą, pastilizuojame, kad elementas būtų raudonas ir pridedame jį prie <body>.

// const header = document.createElement("h1");
// header.textContent = "Andrius";
// header.style.color = "red";
// document.body.append(header);

// 2. Sukuriame <ul> elementą, o jame - tris <li> elementus su mašinų brand'ais. <body> turi atsirasti <ul>, kuriame trys <li>

// const unsortedList = document.createElement("ul");
// document.body.append(unsortedList);
// const listItem1 = document.createElement("li");
// const listItem2 = document.createElement("li");
// const listItem3 = document.createElement("li");
// listItem1.innerText = "Audi";
// listItem2.innerText = "VW";
// listItem3.innerText = "BMW";
// unsortedList.append(listItem1, listItem2, listItem3);

// // KITAS VARIANTAS:

// // const ul = document.createElement("ul");
// // document.body.append(ul);

// function createMenuItem(name) {
//   let li = document.createElement("li");
//   li.textContent = name;
//   return li;
// }
// // get the ul#userprofile
// const userprofile = document.querySelector("ul");
// // add the user profile items
// userprofile.append(createMenuItem("Profile"));
// userprofile.append(createMenuItem("Settings"));
// userprofile.append(createMenuItem("Log out"));

// 3. Sukurti atvaizduota puslapi

document.body.style.background = "#e1eef4";
const wrapper = document.createElement("div");
// const container = document.createElement("div");
const img = document.createElement("img");
img.src =
  "https://images.unsplash.com/photo-1663757777013-f35ed4995a44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3388&q=80";
const text1 = document.createElement("h1");
const text2 = document.createElement("p");
text1.innerText = "Trent Walton";
text2.innerText = "Founder & 1/3 of @paravelinc Austin, TX";

wrapper.style.cssText =
  "padding: 20px; background-color: white; width: 50%; margin: 0 auto; border-radius: 7px; margin-top: 20vh; text-align: center";

// container.style.cssText =
//   "position: relative; border-radius: 50px; width: 100px; height: 100px; margin: 0 auto; top: -70px;";

img.style.cssText =
  "margin-top: -70px; margin-bottom: 10px; width: 100px; height: 100px; object-fit: cover; border-radius: 50%; border: 2px solid white; box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.48);";

text1.style.cssText = "margin: 0; font-size: 30px; font-weight: 800;";
text2.style.cssText = "font-size: 17px";

document.body.append(wrapper);
// wrapper.append(container);
wrapper.appendChild(img);
wrapper.append(text1);
wrapper.append(text2);
