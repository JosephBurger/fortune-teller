import { pick } from "../utils.js";

/**
 * Handles the randomization process when the "Randomize" button is clicked.
 * Logs the action, selects a random card container, and triggers its animation.
 */
function randomize() {
  console.log("Randomize button clicked.");

  // Retrieve a random card container element
  const randomCardContainer = pick(cardContainers);
  console.log("Random card container selected:", randomCardContainer);

  // Trigger animation for the selected random card container
  animateCardContainer(randomCardContainer);
}

/**
 * Handles the click event on a card container.
 * Prevents the default link behavior, logs the action, and triggers the card container's animation.
 *
 * @param {Event} event - The click event object.
 */
function handleCardContainerClick(event) {
  event.preventDefault(); // Prevent default link behavior
  console.log("Card container clicked:", event.currentTarget);

  // Trigger animation for the clicked card container
  animateCardContainer(event.currentTarget);
}

/**
 * Animates the specified card container element.
 * Applies various animation effects and navigates to the card's link after the animation completes.
 *
 * @param {HTMLElement} cardContainer - The card container element to animate.
 */
function animateCardContainer(cardContainer) {
  // Define animation properties
  gsap.to(cardContainer, {
    opacity: 0, // Fade out the card
    scale: 0.8, // Shrink the card slightly
    y: 50, // Move the card downwards
    skewX: 15, // Skew the card horizontally
    skewY: 15, // Skew the card vertically
    blur: 10, // Apply a blur effect to the card
    duration: 0.5, // Duration of the animation
    ease: "power2.out", // Easing function for a smoother transition
    onComplete: function () {
      // Animation complete callback function
      console.log("Animation complete!");
      // After animation, navigate to the next page
      window.location.href = cardContainer.href;
    },
  });
}

// Get the "Randomize" button element
const randomizeButton = document.querySelector(".randomize-button");

// Get all card container elements
const cardContainers = document.querySelectorAll(".card-container");

// Add click event listener to the "Randomize" button
randomizeButton.addEventListener("click", randomize);

// Add click event listeners to each card container
cardContainers.forEach((container) => {
  container.addEventListener("click", handleCardContainerClick);
});
