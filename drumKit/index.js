window.addEventListener('keydown', playAudio);

      function playAudio(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

        if (!audio) return;

        audio.currentTime = 0; // reset audio time to 0
        audio.play();

        key.classList.add('playing'); // adds a style class playing to the key pressed
      }

      function removeTransition(e) {
        if (e.propertyName !== 'transform') return;

        this.classList.remove('playing'); // remove style class playing
      }

      const keys = document.querySelectorAll('.key');
      keys.forEach(
        key => key.addEventListener('transitionend', removeTransition) // remove transition from element
      );