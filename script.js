function loadAdvice() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let advice = JSON.parse(this.responseText);
      document.getElementById("advice").innerHTML = advice.slip.advice;
    }
  };
  xhttp.open("GET", "https://api.adviceslip.com/advice", true);
  xhttp.send();
}

loadAdvice();


//jquery way

// function loadAdvice(){
//   $.get("https://api.adviceslip.com/advice")
//   .done(function(data){
//     console.log(JSON.parse(data).slip.advice);
//     $("#advice").text(JSON.parse(data).slip.advice);
//   })
//   .fail(function(data){});
// }

// loadAdvice();