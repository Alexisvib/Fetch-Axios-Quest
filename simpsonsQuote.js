const button = document.getElementById('button-quote');
const quote = document.getElementById('quote');
const name = document.getElementById('name');
const picture = document.getElementById('picture');

function fetchSimpsonsQuote() {
    const url = 'https://simpsons-quotes-api.herokuapp.com/quotes';
    axios.get(url)
        .then(function(response){
            return response.data;
        })
        .then(function(simpsons){
            quote.innerHTML = simpsons[0].quote;
            name.innerHTML = simpsons[0].character;
            picture.setAttribute("src", simpsons[0].image);
        })
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    fetchSimpsonsQuote();
})

