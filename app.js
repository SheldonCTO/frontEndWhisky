/**
 * WEB222 – final assessment
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Ngai Man Szeto
 *      Student ID: <180094211>
 *      Date:       <14 Aug 2023>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
// Define the showRegionDetails function
document.addEventListener("DOMContentLoaded", function () {
  const regionButtonsContainer = document.getElementById("regionButtons");
  const mainContainer = document.querySelector(".main-container");
  const regionDetails = document.getElementById("regionDetails");

  // Create region buttons
  window.region.forEach((region) => {
    const button = createRegionButton(region);
    regionButtonsContainer.appendChild(button);

    button.addEventListener("click", () => {
      showRegionDetails(region);
    });
  });

  // Function to create region button
  function createRegionButton(region) {
    const button = document.createElement("button");
    button.classList.add("region-button");
    button.setAttribute("data-region", region.id);
    button.textContent = region.name;
    return button;
  }

  // Function to show region details
  function showRegionDetails(region) {
    mainContainer.innerHTML = `
      <h2 class="region-name">${region.name}</h2>
      <a href="${region.link[0].url}" target="_blank">
      Visit the website
      </a>
    `;

    // Display distillery cards related to the region
    const distilleriesInRegion = window.distillery.filter((distillery) =>
      distillery.region.includes(region.id)
    );

    distilleriesInRegion.forEach((distillery) => {
      const distilleryCard = createDistilleryCard(distillery);
      mainContainer.appendChild(distilleryCard);
    });
  }

  // Function to create distillery card
  function createDistilleryCard(distillery) {
    const card = document.createElement("div");
    card.classList.add("distillery-card");
    card.innerHTML = `
      <div><h3>${distillery.title}</h3></div>
      <img src="${distillery.imageUrl}" alt="${distillery.title}">
     <p>${distillery.info}</p>
      <a href="${distillery.link[0].url}" target="_blank">
        <img src="${distillery.link[0].imageUrl}" alt="Visit Website">
      </a>
    `;
    return card;
  }
});
