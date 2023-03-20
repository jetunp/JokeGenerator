//Selectors
const jokeElement = document.querySelector('#joke');
const jokeButton = document.querySelector('#joke-btn');


const jokeGenerator = () => {
    const xhr = new XMLHttpRequest();

    //specify method and the endpoint
    xhr.open('GET','https://api.chucknorris.io/jokes/random');

    // readyState has 5 possible values
    // - 0: request not initialized
    // - 1: server connection established
    // - 2: request received
    // - 3: processing request
    // - 4: request finished and response is ready

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
        jokeElement.innerHTML = JSON.parse(this.responseText).value;
        } else {

        }
    };

    //send the request
    xhr.send();
};

//on click button event
jokeButton.addEventListener('click',jokeGenerator);
//on page load event 
document.addEventListener('DOMContentLoaded',jokeGenerator);