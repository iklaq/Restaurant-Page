export function loadContactPage() {
  const contentDiv = document.querySelector("#content");
  contentDiv.replaceChildren();
  const heading = document.createElement("h1");
  heading.textContent = "Contact :)";
  heading.classList.add("landing-title");
  contentDiv.appendChild(heading);

  const topImage = document.createElement("img");
  topImage.classList.add("menu-img");
  topImage.src = "../src/assests/contact-img.jpg";
  topImage.alt = "Image of Menu";
  contentDiv.appendChild(topImage);

  const para1 = document.createElement("p");
  para1.classList.add("intro");
  para1.textContent = "1. Location ( Kanpur )";
  contentDiv.appendChild(para1);

  const contactImage1 = document.createElement("img");
  contactImage1.classList.add("menu-img");
  contactImage1.src = "../src/assests/map-img.jpg";
  contactImage1.alt = "Image of Menu";
  contentDiv.appendChild(contactImage1);

  const para2 = document.createElement("p");
  para2.classList.add("intro");
  para2.textContent = "2. Email ( ahmadiklaq3@gmail.com)";
  contentDiv.appendChild(para2);

  const contactImage2 = document.createElement("img");
  contactImage2.classList.add("menu-img");
  contactImage2.src = "../src/assests/email-img.png";
  contactImage2.alt = "Image of Menu";
  contentDiv.appendChild(contactImage2);

  const para3 = document.createElement("p");
  para3.classList.add("intro");
  para3.textContent = "3. Phone ( +916307329321 )";
  contentDiv.appendChild(para3);

  const contactImage3 = document.createElement("img");
  contactImage3.classList.add("menu-img");
  contactImage3.src = "../src/assests/phone-img.png";
  contactImage3.alt = "Image of Menu";
  contentDiv.appendChild(contactImage3);
}
