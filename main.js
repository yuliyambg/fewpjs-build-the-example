// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


// document.addEventListener("DOMContentLoaded", function() {
  const modal = document.querySelector('#modal')
  modal.classList.add("hidden");
// console.log(modal)

  // modal.hidden = false;
  // modal.hidden = "";

  // const hearts = document.querySelectorAll("span.like-glyph")
  const hearts = document.getElementsByClassName("like-glyph")
  // have a collection of hearts
  // add an event listener to each heart
  for (const heart of hearts) {
    heart.addEventListener("click", function (e){
      mimicServerCall() // make a server call// will return a promise
       //   .then(resp => console.log(typeof resp)) we see resp is a string
          .then(() => {
            // promises have the .then() functions
            //2 of them that we can use
            //1. is to take the response, jsonify it.(becasue resp is a string, we dont need this step)
            //2. take the jsonifified response, do something with it
if (heart.innerHTML == EMPTY_HEART) {
  heart.innerHTML = FULL_HEART
  heart.className = "activated-heart"
} else {
  heart.innerHTML = EMPTY_HEART
  heart.className = "like-glyph"
// when successful, change the heart
// if its empty, make it full, add new class
// else if its full, make it empty
}
          })
          .catch(error => {
            // modal.hidden = false
            modal.classList.remove("hidden");
            const modalMessage = document.querySelector("#modal-message")
            modalMessage.innerText = error
            setTimeout(() => {
              //do this during timeout
              modal.hidden = true
            }, 5000)
          })
    })
  }
  // console.log(hearts)

// })

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
