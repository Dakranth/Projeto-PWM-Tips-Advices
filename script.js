const btGerarFrase = document.getElementById("btGerarFrase");
const frase = document.getElementById("frase");

const fetchRandomCatImage = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.slip.advice);
      let newfrase = `" ${data.slip.advice}"`;
      console.log(newfrase.length);
      if (newfrase.length < 93) {
        frase.innerHTML = `" ${data.slip.advice}"`;
      } else {
      }
    });
};
btGerarFrase.onclick = fetchRandomCatImage;
