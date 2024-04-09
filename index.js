// 1) salvare il valore dell'input in localStorage tramite il button(salva)
// 2) rimuovere il valore dal localStorage precedentemente salvato(se presente) tramite il button(elimina)
// 3) mostrare tale valore nell'input field (se presente)

const form = document.querySelector("form")
const savedBtn = document.getElementById("savedBtn")
const deleteBtn = document.getElementById("deleteBtn")
const loadBtn = document.getElementById("loadBtn")
const input = document.getElementById("name")
const label = document.querySelector("label")
const textContentArr = []
const TEXT_CONTENT = "text-content"

window.addEventListener("DOMContentLoaded", () => {
  const nameFromStorage = localStorage.getItem(TEXT_CONTENT)
})

form.addEventListener("submit", (event) => {
  event.preventDefault()
  //evitiamo il refresh dell pagina
  //ora prendiamo il valore dentro l'input visto che ci sara per forza essendo required
  const inputText = input.value
  //salviamo questo contenuto nello storage
  //   localStorage.setItem(TEXT_CONTENT, inputText)
  textContentArr.push(inputText)
  localStorage.setItem(TEXT_CONTENT, JSON.stringify(textContentArr))
  form.reset()
  const storageArray = localStorage.getItem(TEXT_CONTENT)
  //tramite il reset una volta salvato il nome questo sparisce
  console.log("salvato")
})
// qui andiamo ad azionare l'evento di caricamneto per stampare sull'input il testo precedentemente salvato
loadBtn.addEventListener("click", () => {
  const savedText = JSON.parse(localStorage.getItem(TEXT_CONTENT))
  //console.log per vedere il nome nella console
  console.log(savedText)
  //if/else per capire se e presente un valore testuale o no e successivamente stamparlo nell'input
  if (savedText !== null) {
    label.innerText = savedText
  } else {
    //alert in caso non fosse presente niente in localStorage
    alert("non ce nulla salvato, prova a salvare prima qualcosa ")
  }
})
//con questo bottone eliminiamo quello che e presente nell local storage
deleteBtn.addEventListener("click", () => {
  localStorage.removeItem(TEXT_CONTENT)

  form.reset()
  label.innerText = " "
})
