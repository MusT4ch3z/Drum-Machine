import { useEffect } from "react";

const AnimatedBackground = () => {

  useEffect(() => {
    animate()
  }, []);

  const animate = () => {
    let amount = 20;
    let body = document.getElementById('body');
    let i = 0;
    while (i < amount) {
      let drop = document.createElement('img');

      let posX = Math.floor(Math.random() * window.innerWidth)
      let delay = Math.random() * -30;
      let duration = Math.random() * 5;

      let size = Math.random() * 0.04 * 100
      drop.id = "image-drop";
      drop.src = "/img/music_notes_PNG61.png"
      drop.style.width = 1 + size + '%';
      drop.style.height = 'auto';
      drop.style.left = posX + 'px';
      drop.style.animationDelay = delay + 's';
      drop.style.animationDuration = 3 + duration + 's';
      body.appendChild(drop);
      i++
    }
  }
}

export default AnimatedBackground;