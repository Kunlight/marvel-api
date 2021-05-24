
const fetchChar = async() => {
  const headers = {
    "Access-Control-Allow-Origin": "*", 
    "Access-Control-Allow-Headers": "Authorizaiton",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Content-Type": "application/json; charset=UTF-8"
  }
  
  const offset = 20
  const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e368d680e7707dad85ac9e89f0ed930f&hash=8a73cf9abd046783d7ed22d5c9623c3e&offset=${offset}`, headers).then((response) => response.json())
  console.log()

  const data = response.data.results

  const getCharUrl = `https://gateway.marvel.com:443/v1/public/characters/?ts=1&apikey=e368d680e7707dad85ac9e89f0ed930f&hash=8a73cf9abd046783d7ed22d5c9623c3e`
    
  const mainDiv = document.getElementById('room')

  data.forEach((character) => {
    const card = document.createElement("DIV")    
    const container = document.createElement("DIV")
    const title = document.createElement("H4")

    container.className = "container"
    card.className = "card"

    title.innerHTML = character.name
    title.className = "title"

    card.appendChild(container)
    card.appendChild(title)
    mainDiv.appendChild(card)

    console.log(card)
  })

}

fetchChar()
