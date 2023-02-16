const contentInfo = {
  srcLink1: "../src/assests/contact-img.jpg",
  srcLink2: "../src/assests/map-img.jpg",
  srcLink3: "../src/assests/email-img.png",
  srcLink4: "../src/assests/phone-img.png",
  paraText1: "1. Location ( Kanpur )",
  paraText2: "2. Email ( ahmadiklaq3@gmail.com)",
  paraText3: "3. Phone ( +916307329321 )",
};

function addImageElement(contentDiv, srcLink) {
  const contactImage = document.createElement("img");
  contactImage.classList.add("menu-img");
  contactImage.src = srcLink;
  contactImage.alt = "Image of Menu";
  contentDiv.appendChild(contactImage);
}

function addParaElement(contentDiv, paraText) {
  const para = document.createElement("p");
  para.classList.add("intro");
  para.textContent = paraText;
  contentDiv.appendChild(para);
}

export function loadContactPage() {
  const contentDiv = document.querySelector("#content");
  contentDiv.replaceChildren();
  const heading = document.createElement("h1");
  heading.textContent = "Contact :)";
  heading.classList.add("landing-title");
  contentDiv.appendChild(heading);
  addImageElement(contentDiv, contentInfo.srcLink1);
  addParaElement(contentDiv, contentInfo.paraText1);
  addImageElement(contentDiv, contentInfo.srcLink2);
  addParaElement(contentDiv, contentInfo.paraText2);
  addImageElement(contentDiv, contentInfo.srcLink3);
  addParaElement(contentDiv, contentInfo.paraText3);
  addImageElement(contentDiv, contentInfo.srcLink4);
}
