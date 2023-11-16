document.addEventListener("DOMContentLoaded", function () {
    const searchInmatning = document.getElementById("inmatning")
  
    searchInmatning.addEventListener("focus", () => {
      searchInmatning.style.width = "300px"
    })
    searchInmatning.addEventListener("blur", () => {
      searchInmatning.style.width = "";
    })
  })