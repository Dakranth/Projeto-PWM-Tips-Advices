const btGerarFrase = document.getElementById("btGerarFrase");
const frase = document.getElementById("frase");

const fetchRandomAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.slip.advice);
      let newfrase = `" ${data.slip.advice}"`;
      console.log(newfrase.length);
      frase.innerHTML = newfrase;
    });

  document.getElementById("btGerarFrase").disabled = true;

  setTimeout(btEnabled, 2500);
};

function btEnabled() {
  document.getElementById("btGerarFrase").disabled = false;
}
btGerarFrase.onclick = fetchRandomAdvice;
