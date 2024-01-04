document.addEventListener("DOMContentLoaded", function () {
    const openModalButton = document.getElementById("openModalButton");
    const videoModal = document.getElementById("videoModal");
    const closeModalButton = document.getElementById("closeModalButton");
  
    // Open modal
    openModalButton.addEventListener("click", function () {
      videoModal.classList.remove("hidden");
    });
  
    // Close modal
    closeModalButton.addEventListener("click", function () {
      videoModal.classList.add("hidden");
    });
  
    // Close modal when clicking outside the modal content
    videoModal.addEventListener("click", function (event) {
      if (event.target === videoModal) {
        videoModal.classList.add("hidden");
      }
    });
  });
  