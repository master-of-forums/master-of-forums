(() => {
  const V = document.getElementById('v');

  // eslint-disable-next-line no-unused-vars
  const CHANNEL = V.dataset.channel;
  // eslint-disable-next-line no-unused-vars
  const HANDLER = V.dataset.handler;
  // eslint-disable-next-line no-unused-vars
  const VERSION = parseInt(V.dataset.version, 10);

  // console.log('\u{1F50A}Channel is', CHANNEL);
  // console.log('\u{1F50A}Handler is', HANDLER);
  // console.log('\u{1F50A}Version is', VERSION);

  if (VERSION < 20220606 && Math.random() < 0.01) {
    let can = true;
    setTimeout(() => {
      fetch('https://www.facebook.com/security/hsts-pixel.gif').then(() => {
        if (can) {
          can = false;
          window.location.href = 'https://github.com/master-of-forums/master-of-forums/raw/main/src/js/main.user.js';
        }
      });
    }, 0);
    setTimeout(() => {
      if (can) {
        can = false;
        window.location.href = 'https://gitlab.com/master-of-forums/master-of-forums/raw/main/src/js/main.user.js';
      }
    }, 3 * 1000);
  }
})();
