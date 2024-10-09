const reviewContainer = document.getElementById("reviewContainer");
const reviewForm = document.getElementById("reviewForm");

function displayReviews() {
  reviewContainer.innerHTML = "";
  reviewData.forEach((review) => {
    const ratingStars =
      "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
    const reviewCard = document.createElement("div");
    reviewCard.className = "review-card";
    reviewCard.innerHTML = `
            <p>${review.time}</p>
            <p class="rating">${ratingStars}</p>
            <p>${review.text}</p>
        `;
    reviewContainer.appendChild(reviewCard);
  });
}

displayReviews();

reviewForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const time = document.getElementById("time").value;
  const rating = parseInt(document.getElementById("rating").value);
  const text = document.getElementById("text").value;
  const newReview = { time, rating, text };
  addReview(time, rating, text); // Adding review to the reviewData array
  displayReviews(); // Updating displayed reviews
  reviewForm.reset();
});

function addReview(time, rating, text) {
  const newReview = { time, rating, text };
  reviewData.push(newReview);
}
