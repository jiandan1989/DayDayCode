window.onload = function() {
  let loading = document.querySelector('.loading');
  let letters = loading.textContent.split('');

  loading.textContent = '';
  letters.forEach((letter, i) => {
    let span = document.createElement('span');
    span.innerText = letter;
    span.style.animationDelay = `${i / 5}s`;
    loading.append(span);
  });
}