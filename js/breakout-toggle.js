 
  document.addEventListener("DOMContentLoaded", function () {
    
    var saturdayContainers = document.querySelectorAll(
      ".container-fluid.saturday"
    );
    saturdayContainers.forEach(function (saturdayContainer) {
      saturdayContainer.classList.add("hidden");
    });

    // Function to toggle display based on selected day and add outline
    var filterButtons = document.querySelectorAll(".filter-button");
    filterButtons.forEach(function (filterButton) {
      filterButton.addEventListener("click", function (e) {
        e.preventDefault();

        // Check if the clicked day is already showing
        var targetDay = this.dataset.target;
        var targetContainers = document.querySelectorAll(
          `.container-fluid.${targetDay}`
        );
        var isAlreadyShowing =
          !targetContainers[0].classList.contains("hidden");

        if (!isAlreadyShowing) {
          // Hide opposite day
          var oppositeDay = targetDay === "friday" ? "saturday" : "friday";
          var oppositeContainers = document.querySelectorAll(
            `.container-fluid.${oppositeDay}`
          );
          oppositeContainers.forEach(function (oppositeContainer) {
            oppositeContainer.classList.add("hidden");
          });

          // Toggle visibility of the clicked day
          targetContainers.forEach(function (targetContainer) {
            targetContainer.classList.toggle("hidden");
          });

          // Add outline to the clicked day
          filterButtons.forEach(function (btn) {
            btn.classList.remove("selected-day");
          });
          this.classList.add("selected-day");
        }
      });
    });

    // Start with Friday showing
    var fridayContainers = document.querySelectorAll(
      ".container-fluid.friday"
    );
    fridayContainers.forEach(function (fridayContainer) {
      fridayContainer.classList.remove("hidden");
    });

    // Add initial outline to Friday
    filterButtons.forEach(function (btn) {
      btn.classList.remove("selected-day");
    });
    document
      .querySelector('.filter-button[data-target="friday"]')
      .classList.add("selected-day");
  });
 
 