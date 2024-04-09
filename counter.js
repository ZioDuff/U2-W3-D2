const p = document.querySelector("p")

const TIME_STORAGE = "time-storage"

let i = 0

setInterval(() => {
  sessionStorage.setItem(TIME_STORAGE, i)
  i++
  p.innerText = i
}, 1000)
window.addEventListener("DOMContentLoaded", () => {
  const counterStorage = sessionStorage.getItem(TIME_STORAGE)

  i = counterStorage
  p.innerText = i
})
