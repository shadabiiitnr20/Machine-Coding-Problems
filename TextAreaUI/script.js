console.log('Hello');

const textArea = document.querySelector('.text-area');
const charCount = document.querySelector('.char-count');

let maxChar = 20;

textArea.addEventListener('input', () => {
  const textLength = textArea.value.length;
  charCount.textContent = textLength;

  if (textLength >= maxChar) {
    textArea.value = textArea.value.substring(0, maxChar);
    charCount.style.color = 'red';
  } else {
    charCount.style.color = 'black';
  }
});
