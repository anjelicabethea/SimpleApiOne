
let btn =document.getElementById("btn");

btn.addEventListener("click", function(){
console.log('leap')
  fetch("https://api.adviceslip.com/advice")
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        let p = response.slip.advice
        document.querySelector('p').innerHTML= p;

      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });

})
