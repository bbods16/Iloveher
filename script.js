function createFloatingEmojis() {
  const emojis = ['❤️', '🥰', '✨', '💖', '😊', '🌟'];
  setInterval(() => {
    const emoji = document.createElement('div');
    emoji.classList.add('floating-emoji');
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.top = Math.random() * 100 + 'vh';
    emoji.style.fontSize = (20 + Math.random() * 20) + 'px';
    document.body.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, 8000);
  }, 500);
}

document.addEventListener('DOMContentLoaded', () => {
  createFloatingEmojis();
});
