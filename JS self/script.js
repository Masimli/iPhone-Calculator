let diplay = document.getElementById('display');

const clean = () => {
    display.value = '';
}

const show = (n) => {
    display.value += n;
}

const result = () => {
    diplay.value = eval(diplay.value);
}

document.getElementById('Perc').addEventListener('click', toggleNegative);
function getPerc() {
    const value = parseFloat(display.innerText.replace(',', ''));
    if (!isNaN(value)) {
      display.innerText = value * 0.01;
    }
  }