export function loadMenuPage() {
  const contentDiv = document.querySelector("#content");
  contentDiv.replaceChildren();
  const heading = document.createElement("h1");
  heading.textContent = "Menu :)";
  heading.classList.add("landing-title");
  contentDiv.appendChild(heading);

  const topImage = document.createElement("img");
  topImage.classList.add("menu-img");
  topImage.src = "../src/assests/menu-img.jpg";
  topImage.alt = "Image of Menu";
  contentDiv.appendChild(topImage);

  const para1 = document.createElement("p");
  para1.classList.add("intro");
  para1.textContent = "1. Pizza";
  contentDiv.appendChild(para1);

  const menuImage1 = document.createElement("img");
  menuImage1.classList.add("menu-img");
  menuImage1.src = "../src/assests/pizza-img.jpg";
  menuImage1.alt = "Image of Menu";
  contentDiv.appendChild(menuImage1);

  const para2 = document.createElement("p");
  para2.classList.add("intro");
  para2.textContent = "2. Burger";
  contentDiv.appendChild(para2);

  const menuImage2 = document.createElement("img");
  menuImage2.classList.add("menu-img");
  menuImage2.src = "../src/assests/burger-img.jpg";
  menuImage2.alt = "Image of Menu";
  contentDiv.appendChild(menuImage2);

  const para3 = document.createElement("p");
  para3.classList.add("intro");
  para3.textContent = "3. Pasta";
  contentDiv.appendChild(para3);

  const menuImage3 = document.createElement("img");
  menuImage3.classList.add("menu-img");
  menuImage3.src = "../src/assests/pasta-img.jpg";
  menuImage3.alt = "Image of Menu";
  contentDiv.appendChild(menuImage3);
}
