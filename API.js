class API {
  static WORDS_URL = "http://localhost:3000/books"
  
  static fetchBooks() {
    return fetch(this.WORDS_URL)
      .then(resp => resp.json())
  }
}