const button = document.querySelector( ".container button" );
const joketext = document.querySelector( ".container p" );

button.addEventListener( "click", getjoke );
document.addEventListener( "DOMContentLoaded", getjoke );

async function getjoke() {
    const jokedata = await fetch( 'https://icanhazdadjoke.com/', {
        headers: {
            'accept': 'application/json'
        }
    } );
    const jokeObj = await jokedata.json();
    document.getElementById( "joketext" ).innerHTML = jokeObj.joke;
}