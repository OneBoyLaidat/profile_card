document.addEventListener("DOMContentLoaded", () => {
  // Select the time element by its exact test ID
  const timeElement = document.querySelector('[data-testid="test-user-time"]');

  // Function to update the time
  const updateEpochTime = () => {
    // Date.now() returns the number of milliseconds since January 1, 1970
    timeElement.textContent = Date.now();
  };

  // Run once immediately on render
  updateEpochTime();

  // Update every 500ms to keep the milliseconds relatively fresh
  // Note: setInterval isn't perfect down to the exact millisecond, 
  // but 500ms is a safe, performant polling rate for this UI requirement.
  setInterval(updateEpochTime, 500);
});