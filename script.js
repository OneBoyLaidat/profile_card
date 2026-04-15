document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');

  // Function to update the time
  const updateEpochTime = () => {
    timeElement.textContent = Date.now();
  };

  // Run once immediately on render
  updateEpochTime();

  // Update every 500ms to keep the milliseconds relatively fresh
  setInterval(updateEpochTime, 500);
});
