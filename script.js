const cartMakeButton = document.getElementById('criar-carta');
const cartInput = document.getElementById('carta-texto');
const cartOutput = document.getElementById('carta-gerada');
const wordCounter = document.getElementById('carta-contador');
const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright'];
const inclinationGroup = ['skewleft', 'skewright'];

function randomClass() {
  const randomStyle = styleGroup[Math.floor(Math.random() * styleGroup.length)];
  const randomSize = sizeGroup[Math.floor(Math.random() * sizeGroup.length)];
  const randomRotation = rotationGroup[Math.floor(Math.random() * rotationGroup.length)];
  const randomInclination = inclinationGroup[Math.floor(Math.random() * inclinationGroup.length)];
  return (`${randomStyle} ${randomSize} ${randomRotation} ${randomInclination}`);
}

function clickRandomClasses(word) {
  const palavra = word;
  palavra.target.className = randomClass();
}

function addClickEventListener() {
  const spans = document.querySelectorAll('#carta-gerada span');
  for (let index = 0; index < spans.length; index += 1) {
    spans[index].addEventListener('click', clickRandomClasses);
  }
}

function cartMaker() {
  cartOutput.innerHTML = '';
  const cartText = cartInput.value.split(' ');
  for (let index = 0; index < cartText.length; index += 1) {
    const word = document.createElement('span');
    word.innerText = cartText[index];
    word.className = randomClass();
    cartOutput.appendChild(word);
    cartOutput.innerHTML += '&nbsp';
  }
  wordCounter.innerText = cartText.length;
  addClickEventListener();
}

function inputVerifier() {
  const inputText = cartInput.value.replace(/\s/g, '');
  if (inputText.length > 0) {
    cartMaker();
  } else {
    cartOutput.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

cartMakeButton.addEventListener('click', inputVerifier);
