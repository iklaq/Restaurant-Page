export function loadInitialPage() {
  const contentDiv = document.querySelector("#content");
  contentDiv.replaceChildren();
  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Iklaq Restaurant :)";
  heading.classList.add("landing-title");
  contentDiv.appendChild(heading);

  const topImage = document.createElement("img");
  topImage.classList.add("top-img");
  topImage.src = "../src/assests/homepage-img.jpg";
  topImage.alt = "Image of Restaurant";
  contentDiv.appendChild(topImage);

  const para1 = document.createElement("p");
  para1.classList.add("intro");
  para1.textContent =
    "Invariably the food is tasty and well prepared. The fare is appropriate for the price point and market it’s aimed at. It’s essential that patrons feel they’ve had a good, enjoyable meal.";
  contentDiv.appendChild(para1);

  const para2 = document.createElement("p");
  para2.classList.add("intro");
  para2.textContent =
    "Waitrons know their jobs, are efficient and able to advise customers on the best choices. Food is served with minimal delay, and after the meal patrons don’t have to struggle to get their bill.";
  contentDiv.appendChild(para2);

  const para3 = document.createElement("p");
  para3.classList.add("intro");
  para3.textContent =
    "The atmosphere is relaxed and friendly. If music is played, it’s appropriate and the volume not so loud that customers cannot talk. Staff is trained to avoid distracting behaviour and making unnecessary noise.";
  contentDiv.appendChild(para3);
}
