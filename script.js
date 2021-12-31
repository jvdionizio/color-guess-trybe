window.onload = function pgCarregada() {
  const colorBoard = document.getElementById('color-board');
  const random = Math.round(Math.random() * 6);
  const rgbColor = document.getElementById('rgb-color');
  const answer = document.getElementById('answer');
  const resetGame = document.getElementById('reset-game');

  function generateColor() {
    let color = [];
    for (let i = 0; i < 3; i += 1) {
      color.push(Math.round(Math.random() * 256));
    }
    return `rgb(${color[0]},${color[1]}, ${color[2]} )`;
  }

  function createDiv(className) {
    const div = document.createElement('div');
    div.className = className;
    div.addEventListener('click',answering);
    return div;
  }

  function createColors(){
    for (let i = 0; i < 6; i += 1) {
      colorBoard.appendChild(createDiv('ball'));
    }
  }

  createColors();

  function aplingColor(){
    for (let i = colorBoard.childNodes.length - 1; i >= 0; i -= 1) {
      colorBoard.childNodes[i].style.backgroundColor = generateColor();
    }
  }
  aplingColor();

  function selectingColor(){
    colorBoard.childNodes[random].classList.add('selected');
    const selected = document.querySelector('.selected');
    const selectedCs = window.getComputedStyle(selected);
    const color = selectedCs.backgroundColor;
    // eslint-disable-next-line no-param-reassign
    rgbColor.innerText = color;
  }
  selectingColor();

  answer.innerText = 'Escolha uma cor';

  function answering(event) {
    if (event.target.classList.contains('selected')) {
      answer.innerText = 'Acertou!'
    } else {
      answer.innerText = 'Errou! Tente novamente!'
    }
  };

  function reset() {
    for (let i = colorBoard.childNodes.length - 1; i >= 0; i -= 1) {
      colorBoard.childNodes[i].remove();
    }
    answer.innerText = 'Escolha uma cor';
    createColors();
    aplingColor();
    selectingColor();
  }

  resetGame.addEventListener('click', reset);
};
