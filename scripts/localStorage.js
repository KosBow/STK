function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value)
  }

  function getFromLocalStorage(key) {
    return localStorage.getItem(key)
  }

  function setLocalStorage() {
    document.addEventListener("DOMContentLoaded", function () {
      const form = document.querySelector(".login-box form")

      form.addEventListener("submit", function (event) {
        event.preventDefault()

        const inputs = form.querySelectorAll("input")

        inputs.forEach((input) => {
          const label = input.getAttribute("label")
          const value = input.value

          if (label === "Tv-Titel") {
            saveToLocalStorage("Tv-Titel", value)
          } else if (label === "Åldersrekommendation") {
            saveToLocalStorage("Åldersrekommendation", value)
          } else if (label === "Beskrivning") {
            saveToLocalStorage("Beskrivning", value)
          }
        })
        showStorage()
      })
      showStorage()
    })
  }

function showStorage(){
    const localTracker = document.querySelector(".localShower")
    const localButton = document.querySelector(".showLocal")
    localButton.addEventListener("click", ()=>{
        const TvTitel = getFromLocalStorage("Tv-Titel")
        const Åldersrekommendation = getFromLocalStorage("Åldersrekommendation")
        const Beskrivning = getFromLocalStorage("Beskrivning")
        if(localTracker){
            localTracker.innerHTML = `
            <p>Tv Titel:${TvTitel}</p>
            `
        }
    })
}

setLocalStorage()
