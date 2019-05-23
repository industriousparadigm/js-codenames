const boardDiv = document.querySelector('#game-board')

const state = {
  gameSquares: null
}

const renderBoard = () => {
  state.gameSquares.map(sq => sq.word).forEach(renderWord)
}

const renderWord = (word) => {
  const wordDiv = document.createElement('div')
  const wordText = document.createElement('h3')
  wordDiv.id = word
  wordDiv.className = "word-box"
  wordText.className = "word-text"
  wordText.innerText = word
  wordDiv.append(wordText)
  boardDiv.append(wordDiv)

  const colorKey = randomizeColor()

  wordDiv.addEventListener('click', () => {
    revealColor(colorKey)
  })

  const revealColor = (color) => {
    wordDiv.className += ` ${color}`
    wordText.innerText = ""
  }
}

const uniq = (array) => {
  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  return array.filter(onlyUnique)
}

const randomizeWords = () => {
  return uniq(words({exactly: 100, maxLength: 10})).filter(word => word.length > 3).splice(0,25)
}

const randomizeColor = () => {
  let result = Math.floor(Math.random() * 4)
  switch (result) {
    case 0: return "black"
    case 1: return "red"
    case 2: return "blue"
    case 3: return "white"
  }
}

init = () => {
  const gameWords = randomizeWords()
  state.gameSquares = gameWords.map(word => ({ word: word, color: randomizeColor() }) )
  
  renderBoard()
}

init()