/* main.js — Pixel Researcher Site */

/* ── Typewriter Effect ── */
(function typewriterInit() {
  const roles = [
    "Topological Quantum Field Theorist",
    "Surveyor of Abstract Nonsense",

    /* "Computational Biologist",
    "Associate Professor",
    "GNN Researcher",
    "Open Science Advocate",
    "Protein Structure Nerd", */
  ];
  const el = document.getElementById("typewriter");
  if (!el) return;

  let roleIdx = 0, charIdx = 0, deleting = false;
  const SPEED_TYPE = 70, SPEED_DEL = 35, PAUSE = 1800;

  function tick() {
    const current = roles[roleIdx];
    if (!deleting) {
      el.textContent = current.slice(0, ++charIdx);
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(tick, PAUSE);
        return;
      }
    } else {
      el.textContent = current.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? SPEED_DEL : SPEED_TYPE);
  }

  tick();
})();

/* ── Pixel Avatar Generator ── */
(function pixelAvatarInit() {
  const container = document.getElementById("pixelFace");
  if (!container) return;
  const size = 24;
  const pixels = [["#edffff","#f4ffff","#fdffff","#ffdcc7","#ffe1c5","#ffe0bd","#ffe3c2","#ffeccc","#ffe7c7","#ffd8b8","#f7d4b8","#fad6b7","#f9d8c0","#f1d3bc","#eecaae","#fff1de","#ffe1c9","#ffe5ca","#fff1dc","#fff0df","#fcece2","#ffffff","#ffffff","#ffffff"],["#eaffff","#eeffff","#f5ffff","#fcd9c3","#ffddc2","#ffe2c1","#ffdeb9","#ffe1c5","#e7c4b3","#a75d5d","#c0858c","#c59191","#cd9b95","#cc9893","#ce9c97","#caa1a0","#ac8298","#b395a0","#e9cdba","#ffefdd","#faebda","#fffeff","#ffffff","#ffffff"],["#eaffff","#eaffff","#edffff","#fcd9c5","#ffe2c9","#ffe1c2","#f5d2ba","#573548","#9b4466","#a45368","#d09580","#eab19f","#f7beaa","#f4baa6","#e0a89c","#9e4767","#814160","#8e4e7c","#453f53","#e8d6cc","#ffecdc","#f8f8f7","#ffffff","#ffffff"],["#e8ffff","#e9ffff","#e9ffff","#ffe0cb","#ffe3cc","#f3ceb1","#773b5b","#d69e9a","#db9e8e","#c78270","#c88680","#d7988b","#f2b49d","#edb6a2","#d49e93","#cc978d","#cd9991","#dbaea2","#d4bbb6","#c2acb3","#fbede1","#fbffff","#f8ffff","#ffffff"],["#ebffff","#e9ffff","#ebffff","#ffe0cb","#ffe0c6","#e5c4b2","#d39d9b","#edab93","#f4b59a","#e9ac96","#d08879","#da9985","#f6ba9e","#e4b6a2","#d39b8c","#d09385","#af5759","#cd9c96","#dabcb5","#595185","#e5dacf","#faffff","#f1ffff","#f8ffff"],["#ecffff","#ebffff","#ebffff","#ffe3d2","#f9d5be","#c8a1a7","#e5ac9c","#b95066","#c58f93","#351e27","#9e2e3a","#f4b697","#ffcea9","#f1c8ae","#e2ad97","#b47f8b","#492a3c","#b17e8b","#c79da0","#5c4b65","#c4b9bd","#f8ffff","#f0ffff","#efffff"],["#f1ffff","#f0ffff","#f1ffff","#faded0","#f0cebd","#986498","#f8ba9a","#f5b594","#eaa68c","#d17d6c","#f1b194","#ffc296","#ffd0af","#ffd1b3","#f5c6a4","#e8ae96","#da9c8f","#e1af9e","#efcbba","#dcc3bb","#aa9db3","#f0f9ff","#f3ffff","#f2ffff"],["#f3ffff","#ffffff","#f4ffff","#f3f0f9","#d6bdb6","#eebdab","#f7bc98","#fbbc99","#f6b695","#f3b38e","#fbba97","#febc90","#ffcbab","#ffd0b1","#f6ccad","#f9c5a5","#f5c1a3","#f7c5a8","#f4c8ae","#efd8d0","#8d7da5","#ffffff","#f7ffff","#f7ffff"],["#f7ffff","#f6ffff","#f7ffff","#faffff","#bb9fae","#e9c1b4","#fabe9c","#fcbc97","#fdbd94","#fdbf98","#fcba93","#fab289","#ffc29f","#ffc8af","#f0c8af","#f9c3a4","#fac09d","#fbc8a8","#f6cab2","#ecd4ca","#9a88a6","#ffffff","#ffffff","#fcffff"],["#f6ffff","#f8ffff","#f8ffff","#fbffff","#ad8ea9","#4d405b","#f6bfa1","#fabd99","#ffc49e","#ffc29c","#eda480","#fcb58a","#ffbe9b","#fdc4aa","#f6cab4","#f5b99d","#fcc1a0","#fbc8ac","#f0cbb7","#e2cfca","#c0bfc9","#ffffff","#ffffff","#ffffff"],["#fcffff","#fcffff","#feffff","#f9ffff","#a8a5bb","#784b8d","#e9b8a9","#f9be9c","#fabe9a","#f1b599","#e89c7f","#d98d74","#e0907c","#db9d90","#d79a8d","#eaac96","#ecad94","#efbea4","#e4c5b6","#ffffff","#c9c2ce","#e7dede","#ffffff","#ffffff"],["#ffffff","#ffffff","#ffffff","#ffffff","#90a2c2","#a2a5c0","#e0bbb5","#eab39f","#e8ac96","#da977f","#eca086","#d5876e","#a33e45","#9f5559","#c3948b","#eab7a1","#d69278","#e1b5a3","#e1c6b9","#d5c9d3","#e3d6db","#fffdff","#ffffff","#ffffff"],["#ffffff","#ffffff","#ffffff","#ffffff","#b9cad9","#b2bdd2","#f6f9ff","#e0a895","#e1a68b","#c1836e","#e9a88a","#eba786","#e0a792","#bf807c","#e1b4a0","#e1b4a0","#be8c83","#dcae9a","#e6c9b5","#fff9fe","#fff9fe","#fffbfd","#ffffff","#ffffff"],["#ffffff","#ffffff","#ffffff","#ffffff","#e0f2fc","#c2d1e3","#d8e5ee","#e3ab9b","#e7aa90","#e3a98d","#ce776a","#b73440","#c33a4e","#b32c48","#bb617c","#c49693","#dca289","#e3bba7","#e2c9b5","#feffff","#f4f4f8","#faffff","#ffffff","#ffffff"],["#ffffff","#ffffff","#ffffff","#f8ffff","#f2fbff","#f3feff","#f8ffff","#dbada1","#e7ae93","#ebad8d","#f2b18c","#efaa8b","#ecaa8f","#ecaa8f","#e9b6a2","#ecc2a2","#e9ba9f","#d9b5a6","#c9b6b3","#ffffff","#fffdff","#ffffff","#c9cfdb","#ffffff"],["#ffffff","#feffff","#faffff","#f9fdff","#f1f7ff","#faffff","#ffffff","#f9ffff","#e5b196","#f2b48f","#eeab86","#efad8b","#f1b293","#f3b99c","#f2c1a2","#ecc1a4","#edc3a8","#e0c6b5","#b08a89","#e8dbcf","#e6eefd","#ffffff","#cdd4e0","#c3ccd9"],["#ffffff","#fcfdff","#fffcff","#fffdff","#fffeff","#fbffff","#faffff","#e2d8d8","#af726b","#efb58e","#f6b78f","#f9b790","#f8b893","#f3b794","#f7c8a9","#f1caab","#eac8af","#cdaca0","#c09e98","#bfa099","#e9d9d4","#e0d5dd","#e0d6dc","#dcd4db"],["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#eee5e2","#b67b5e","#b07353","#c48355","#e6a880","#ecb088","#e4ae93","#e3ae95","#e3ae95","#d1a694","#bf8f83","#a56e54","#dbc4b8","#edd5c3","#ead7ca","#e0c8bc","#f8eae4","#ded2d2"],["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#e5dad7","#f3d4c6","#a86351","#ddaf92","#c27e50","#c98850","#be8055","#be8055","#be8055","#c08f80","#be8d80","#b5846c","#7c2f2c","#e0c3b2","#ebd1be","#dabdad","#eacdb8","#ebceb9","#f9dfcd"],["#ffffff","#ffffff","#ffffff","#e8d1cb","#e5c0b0","#daaa9a","#f2cfbb","#c1856f","#e8bb9a","#421e17","#ce8b54","#c98450","#c47f4c","#be7f53","#ba8267","#b17655","#a2614b","#51201c","#e8c9b0","#e6c5a8","#fbe1ce","#e9c6ad","#f8d9c1","#edc8ae"],["#ffffff","#ffffff","#f6d6c9","#f6cdb9","#f6caad","#b76d4d","#f5ccae","#a1423c","#e5b491","#cd9672","#b76841","#cd8952","#c4804d","#be7f53","#b37553","#b17853","#933e3a","#552110","#e0baa2","#f5d3ba","#efceb3","#ddb198","#bc7d5e","#f7cfb1"],["#e5dfe7","#ebc6b5","#f3c7ad","#e6b196","#f6caab","#e7b99c","#f1c3a1","#bf8055","#edb990","#c2845a","#ffcfa8","#ffdfd0","#ffd4ac","#ffdab9","#963824","#964335","#673024","#c08550","#f5d2b6","#efc8aa","#f2cdb0","#f0cdb3","#efc9a9","#f9d2af"],["#ebc1ab","#f7ceb5","#fed4b7","#f7c7a4","#f8c9a5","#f1bd97","#e8bb9b","#b46f40","#fbc99d","#b9754e","#ffd6b8","#ffc89f","#ffcaa2","#ffd9b4","#ffdcb9","#ffdcb8","#ffd0a6","#fffbe6","#f6d5bb","#e1b18c","#e8bb9b","#e8c7aa","#dda574","#f5caa3"],["#fed5b6","#f4c6a1","#ffd6b8","#ffd5af","#d99868","#dd9859","#c98d66","#dc9d73","#ffce9f","#fec6a4","#f0a883","#d37150","#c7694d","#e59468","#fcb992","#ffcca4","#ffc499","#fff1d8","#fffae3","#fff9eb","#f0c8a4","#d3a58b","#e6b489","#f2c39b"]];
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  pixels.forEach(row => {
    row.forEach(color => {
      const px = document.createElement("div");
      px.className = "pa-pixel";
      px.style.background = color;
      container.appendChild(px);
    });
  });
})();

/* 48x48 
(function pixelAvatarInit() {
  const container = document.getElementById("pixelFace");
  if (!container) return;
  const size = 48;
  const pixels = [["#edffff","#f0ffff","#f6ffff","#f7ffff","#fdffff","#fbffff","#fddcc7","#ffdfc7","#ffe1c9","#ffdbbc","#ffe3c4","#ffe3c6","#ffe3bf","#ffe7c8","#ffeacb","#ffe8c7","#ffecc8","#ffe5c4","#ffe5c3","#ffe5c9","#ffedd2","#ffecd2","#ffdfbd","#ffe6ca","#fddec1","#fddbbb","#ffe1c5","#ffe2ce","#ffe7cc","#ffe0c1","#fadec5","#ffe4c6","#ffefd6","#ffebd1","#fff0d8","#fff3da","#fff1df","#fff6e0","#ffedda","#fdead9","#ffefe2","#fff3eb","#fffbf6","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],["#ecffff","#eeffff","#f0ffff","#f5ffff","#f9ffff","#f9ffff","#fbd7c2","#ffdfc6","#ffdcc7","#ffdfc0","#ffe6c9","#ffe5c9","#ffe2bc","#ffeacb","#ffebc8","#ffe8cb","#ffe1be","#ffeacc","#ffdfc1","#f0c9ab","#fddec6","#f4d4ba","#e8c4a9","#ebc5af","#e5bdad","#e5bfac","#e6c0b0","#eecbb9","#e7c2b1","#ebc9b8","#eacbb7","#edd0be","#f1d2c1","#f0d5bd","#ffe7d1","#ffe7d0","#ffeddb","#ffefda","#fff1e1","#fff1e4","#fff1e7","#fff5ea","#fdf5ed","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],["#e9ffff","#ecffff","#efffff","#f3ffff","#f5ffff","#fcffff","#f6d7c2","#fbd7c2","#ffdfc3","#ffdfbc","#ffe6ca","#ffe6cb","#ffe6c4","#ffe5c5","#ffe6cb","#ffe0c1","#f7d4bb","#f0cebb","#dcbdac","#af6064","#b55d6f","#ad5362","#ad6065","#b57574","#bc8185","#b87d7d","#bb8183","#c18b91","#c08991","#bb8189","#b88088","#a66770","#a74d6e","#bb969c","#d1b3ab","#ecd2c1","#f8e0cf","#ffead4","#fff2e3","#fff0e3","#fff1e5","#fcf0e6","#fef4ec","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],["#e8ffff","#e8ffff","#ecffff","#efffff","#f2ffff","#fbffff","#ffe6d6","#ffdac2","#ffd8b9","#ffdeb9","#ffe4c6","#ffe5ca","#ffe5c2","#ffdebb","#f9d4bb","#e1beab","#caa4a3","#a84b69","#b67d84","#d5a29c","#d29c94","#e5b1a3","#e3ab9c","#e6b0a0","#e8b3a1","#eab4a2","#ecb8a5","#efbfaa","#ebbaa4","#ecbda9","#e0b4a2","#d1a9a2","#ad8896","#a47b94","#8a4f7c","#61455c","#d9bfb6","#ecd5c6","#faeadf","#ffeedf","#fff2e5","#fcefe6","#fcf2eb","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],["#e7ffff","#e9ffff","#e9ffff","#edffff","#edffff","#f4ffff","#ffe0d6","#ffdabb","#ffdab5","#ffe2c7","#ffe2c4","#ffe0c2","#ffe1c2","#ebc3ac","#ddbbaf","#863f59","#964363","#994761","#9c475d","#c47f76","#d89c8a","#edb39f","#eeb5a3","#ecb2a0","#efb5a1","#f6bfab","#f1b9a4","#f2bca6","#f0bca7","#daa599","#b4767b","#8b3f5a","#924768","#733f59","#8c4c76","#6b455f","#4a3f51","#dac6be","#e8d6ca","#ffeee1","#fff3e6","#fef2e7","#f6efe5","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],["#e8ffff","#eaffff","#e7ffff","#e8ffff","#e8ffff","#ecffff","#f9d5c1","#ffdec3","#ffddbf","#ffe4ca","#ffe4c4","#ffdcc3","#ecc6b0","#dfc4b9","#583853","#833a59","#7a3249","#8a3950","#a44f66","#b26f85","#b66c66","#d4988c","#e0a695","#edb2a0","#f3b7a3","#f3bca6","#f5bca7","#f1b7a3","#e4af9f","#ce9993","#af747c","#a36c7d","#a8768e","#af8797","#ac8198","#ad899e","#7d5372","#4e4557","#d4bcb3","#f7e9e0","#fdeee5","#fff2e5","#f9efe6","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],["#e9ffff","#e9ffff","#e9ffff","#e8ffff","#e8ffff","#e8ffff","#f6d6c5","#ffe0c8","#ffe2cb","#ffe1c4","#ffdbbe","#f8d3b6","#e3c1b7","#553357","#a66185","#ba7d86","#ba7d79","#c1857b","#c1847b","#bd7970","#b97161","#bc7563","#ca897e","#e1a191","#f0b39c","#f3b8a4","#f1b7a3","#eab7a3","#d8a195","#d19c95","#cc9c94","#c99890","#c99893","#cd9c94","#d7ada1","#d9b4aa","#d0b3af","#50455b","#c8b5b9","#e1cec3","#f8eae3","#f8ebe0","#fcf4eb","#f9ffff","#fbffff","#ffffff","#ffffff","#ffffff"],["#ebffff","#e9ffff","#eaffff","#ebffff","#ebffff","#ebffff","#f8dbc7","#ffe1c8","#ffe3cc","#ffe3c4","#fdd8bd","#e8c5b3","#c5a3aa","#af6e8b","#e7b4a2","#eab19a","#e6aa98","#da9a8c","#ce8c7f","#c98378","#cf8c82","#cf8c82","#cc8672","#de9f8b","#ebac97","#eeb49d","#edb6a1","#dda799","#d5a194","#d5a498","#cf9b92","#cc968c","#dcaba1","#deae9f","#d4a297","#dcb0a3","#e0c3b8","#d1bec1","#4a495c","#cfbdb9","#f4e6de","#f5e8de","#faf2eb","#f3ffff","#f4ffff","#f8ffff","#fcffff","#ffffff"],["#e8ffff","#eaffff","#ebffff","#ebffff","#efffff","#ecffff","#f8daca","#ffdec9","#ffe4cb","#ffdcc0","#f9d3ba","#e5c5b6","#994363","#e2aa9d","#ecb298","#eead97","#f1b496","#f4b79c","#f1b49c","#d79987","#cd8472","#cf8d7f","#d49081","#df9d8b","#edb098","#eeb399","#e8b6a1","#d6a493","#d7a594","#d49c8f","#d19a8d","#d79f92","#e7b19e","#ecbda9","#eabead","#d7a89e","#d9b4ab","#e1cac3","#48455d","#a997a8","#e0d2c5","#f2e7db","#fbf5ee","#f2ffff","#f1ffff","#f6ffff","#f9ffff","#f9ffff"],["#e8ffff","#e8ffff","#e9ffff","#eaffff","#e9ffff","#eaffff","#fadacb","#ffdbc8","#ffe3cc","#fcd7c0","#ebc9b5","#ddbbb6","#b77285","#ebaf9a","#eaaa92","#f0b094","#f0b197","#e7aa95","#d18d7d","#d5948a","#cf8471","#d08673","#dd9e8f","#e7a790","#f6b99a","#f9c19c","#f0c2a8","#dfb39e","#d8a293","#d29788","#c08078","#9a3b53","#4c202f","#582b3a","#a85b7c","#aa7377","#d4afa9","#dfc7bf","#57465f","#4c4562","#b8a9ac","#eee1da","#fdf8f0","#edffff","#f2ffff","#f1ffff","#f2ffff","#f2ffff"],["#efffff","#ebffff","#eaffff","#eaffff","#ebffff","#e9ffff","#f2e1e1","#ffdec9","#ffe2c8","#ffdac2","#e6c2b3","#953f64","#d09898","#e7ab99","#e7a89b","#b25657","#642932","#552c3b","#3f2638","#41252c","#982b33","#d79081","#e6a693","#f5b597","#ffc29d","#ffcda9","#f8ccae","#e8bda6","#deb09a","#dcaa99","#9c445e","#512436","#37242e","#3a2837","#c8b1bc","#773751","#b67f87","#ddbeb7","#b29ab0","#664c85","#b4a5b1","#ebe0da","#f6efe7","#f0ffff","#efffff","#f0ffff","#edffff","#f1ffff"],["#ebffff","#eeffff","#ecffff","#ebffff","#edffff","#eaffff","#f5fbff","#ffdfca","#ffd9bf","#edcebe","#e0b9af","#a64875","#e1a89c","#dd9587","#be5959","#be5967","#da9d9a","#8c304a","#482033","#472227","#a23b5c","#efb6a1","#f6b79b","#ffc097","#ffc69a","#ffd4ae","#ffd5b3","#f2c6aa","#f1c5a9","#eebca3","#e0aa9a","#cb8d85","#ae697a","#cba39e","#d1a298","#e6c1b7","#e6c1b3","#e7c8b8","#dbc6c1","#4b437e","#8a78a0","#d6cdc8","#f5efe6","#efffff","#efffff","#edffff","#f1ffff","#efffff"],["#f0ffff","#f3ffff","#f1ffff","#ecffff","#f2ffff","#f0ffff","#ffffff","#ffddca","#ffdcc5","#e1beb0","#b994a6","#ba7e91","#f3b79b","#fab999","#f6b193","#f3b193","#f2b094","#efae99","#e4a08e","#dd947d","#e9a48f","#eda98a","#fdc099","#ffc094","#ffc99f","#ffd3ab","#ffd6b5","#faceb1","#f6c8aa","#f4c1a3","#e3a68f","#e4a594","#d89389","#d79a8c","#dea99c","#e9c1ae","#eec9b6","#f1d3c1","#ebd4cd","#4a4364","#786fa0","#ccc2c1","#f2ebe5","#f2ffff","#f6ffff","#f0ffff","#f1ffff","#f1ffff"],["#f1ffff","#f2ffff","#f2ffff","#f1ffff","#f1ffff","#f1ffff","#f2ffff","#ffdfcf","#f1d3c0","#ddbaaf","#3b3354","#e9b29e","#f9bf9e","#f8ba96","#f7b794","#f1ad8d","#de917a","#db907c","#d07c6b","#df9887","#f2b194","#fbba97","#ffc094","#ffb98e","#ffcaa2","#ffd4b2","#ffcca9","#f9ceb1","#fbd0b4","#f3bf9e","#f2bd9d","#ecb59d","#e2a996","#e7b39f","#e8b7a2","#eec3aa","#f0c7b0","#f0ccb8","#efd6ca","#9b85a5","#53477f","#cfc3c6","#eee8e2","#f9ffff","#f4ffff","#f1ffff","#f3ffff","#f6ffff"],["#f2ffff","#f3ffff","#f1ffff","#f3ffff","#f7ffff","#f4ffff","#f3ffff","#fedfc9","#e9c7b6","#b897a8","#413554","#f6bea1","#f7bd9d","#f8ba97","#f9ba98","#f8b997","#f6b796","#f1b092","#efad90","#f4b393","#f8b593","#fdbc95","#ffbf92","#ffba8e","#ffc9a4","#ffccab","#ffcfae","#fed6c0","#f7ceb2","#f7caab","#f7c1a0","#f5bea0","#f3c1a5","#f2c0a2","#f1bfa1","#f2c4a8","#f6cab0","#f3cdb5","#efd5c6","#c4b4bb","#736499","#a99bae","#ede7e1","#f8ffff","#faffff","#f6ffff","#f4ffff","#f6ffff"],["#f3ffff","#fcffff","#ffffff","#ffffff","#f6ffff","#f3ffff","#f4ffff","#f9ddcb","#ddbeb7","#9477a0","#814968","#f8c8af","#f8bd9b","#fbbf9b","#fec09d","#fbbc99","#f9ba98","#f6b893","#f7b893","#f9b796","#f8b691","#febd94","#ffbe95","#febc90","#ffc39a","#ffd1b1","#ffceae","#fdd6c2","#f2ccb7","#f6c9aa","#f5bea0","#f8c3a3","#fac5a2","#f7c1a1","#fac7a6","#f8c4a7","#f4c2a5","#f3cbb2","#edd3c3","#d8c4c1","#694b84","#887b97","#e7e6e4","#feffff","#faffff","#f8ffff","#f8ffff","#f8ffff"],["#f4ffff","#f4ffff","#f3ffff","#f8ffff","#f2ffff","#f6ffff","#f3ffff","#fae3db","#dcc1bc","#906fa0","#573c4f","#f6cbb6","#f8bf9c","#f8bc98","#f9ba96","#fcbd99","#febe99","#fcbd97","#fcbe98","#fec19b","#fcb993","#fcb990","#fdb890","#ffb991","#ffc198","#ffc2a1","#ffc2a1","#fcd0bd","#f2ccb7","#f4c8ab","#f6c3a6","#fac2a3","#fdc6a6","#fcc7a5","#f7c0a0","#f8c2a3","#fbcdb1","#f5ccb8","#eed2c3","#d8c7c7","#6d538b","#a295ab","#ffffff","#ffffff","#ffffff","#fcffff","#fcffff","#fcffff"],["#f1ffff","#f7ffff","#f6ffff","#f7ffff","#f7ffff","#f6ffff","#f6ffff","#f4e0d6","#d6bbb9","#8d699c","#3c364e","#f2c9b6","#f7be9e","#fabe9a","#ffc29e","#fec09a","#ffc39e","#febe99","#ffc19a","#fdbf95","#fab78e","#f7b28a","#f6ab85","#ffb994","#ffba92","#ffc9ab","#ffc5a8","#fecdb5","#f2cab3","#f0c1a5","#fbcaab","#f9bf9e","#fec6a6","#fec8a7","#fcc7a5","#fbcaad","#facdb5","#edc7b1","#ead0c2","#a58194","#5b466d","#b5b0bf","#eef6ff","#ffffff","#ffffff","#ffffff","#fcffff","#fcffff"],["#f7ffff","#f7ffff","#f8ffff","#f8ffff","#f7ffff","#f7ffff","#f8ffff","#eedfd9","#dcc1be","#845b97","#3a3759","#e8c2b3","#f2bc9e","#f8bd9b","#fcc19d","#ffc29c","#ffc19b","#ffc299","#ffc29b","#fdc096","#f7b48d","#f4a986","#fbb28a","#ffb992","#ffb791","#ffbe9f","#ffbda1","#fecdb4","#f2cbb8","#ebbb9f","#f1bfa0","#fbc2a1","#fdc5a5","#fcc5a3","#f7bf9f","#f5c3a6","#f0c5aa","#f0cfbe","#e7cec5","#7b4d7d","#5b476c","#ffffff","#f7f6fd","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],["#f8ffff","#f6ffff","#f8ffff","#f8ffff","#f8ffff","#f9ffff","#f8ffff","#e9f2fb","#dac4c0","#725895","#3e395a","#af798e","#f0bfa7","#f9c4a7","#fdc3a0","#ffc39e","#ffc39d","#ffc39c","#fec19a","#f8bc98","#eca583","#eda17b","#ffb992","#fbb38a","#ffb996","#ffb797","#fcbda1","#fbc8af","#f6d2bf","#f5c9b5","#edb69e","#f4b999","#f9c0a0","#fac2a2","#f6c0a2","#f5c4a9","#f1c9b2","#eccec0","#e2cec4","#64485f","#7d6494","#cac7ce","#faf6fa","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],["#faffff","#fbffff","#fcffff","#f9ffff","#f9ffff","#feffff","#f4ffff","#fcffff","#d7c7c1","#7b6fa5","#3f3c5e","#935486","#e7b7aa","#f2bea4","#fcbe9e","#fabf9b","#fdc09c","#fabe99","#f7bd9a","#f1b396","#e99f83","#f0a989","#f3a884","#efa07a","#f1a688","#f5ac97","#eda894","#eab29f","#e4b5a3","#ebbfab","#e6aa98","#eaab8f","#ecb093","#f4bca0","#f4c2a5","#f2c4aa","#e9c1ad","#e9cec1","#dac9c1","#816491","#d5c9cf","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],["#fcffff","#fbffff","#fcffff","#fbffff","#fcffff","#fcffff","#faffff","#feffff","#edffff","#8d89b1","#4d4168","#9e6d99","#ddb4ac","#ebbfac","#f5be9e","#f6bd9a","#f7bc9a","#f5bb9a","#eeb499","#e3a18b","#e89c82","#e59275","#d37f69","#761f26","#cb897f","#d38271","#d28d7c","#c8918f","#a03543","#d59b8e","#ecb6a4","#e9a893","#e9a48d","#ebb099","#eebca3","#e6b6a0","#e5c2b3","#e3cabf","#decec6","#7b4a6f","#efe5ed","#dbd2d7","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],["#ffffff","#fcffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#fcffff","#e7faff","#dee8f3","#6e5794","#a1afcd","#fcfaff","#e5b6a5","#edb8a7","#eab093","#eaaf92","#eaad93","#e5a792","#db927a","#e69a7e","#ec9f84","#ce7154","#b94d4d","#aa4348","#bb6551","#b56858","#b17573","#af7570","#d7a69a","#e9b6a3","#e8ab95","#de9880","#e0a48b","#e6b39f","#e0b4a2","#dec1b2","#e3cabc","#e0d0d0","#fff9fa","#e6dbdd","#fffbff","#e2d6db","#fbf2f5","#ffffff","#ffffff","#ffffff","#ffffff"],["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#f9ffff","#f1ffff","#e6f1fc","#67639f","#ecf7ff","#ffffff","#e7b7a8","#e8b7a3","#e1a893","#e7aa91","#e8af97","#e2a48d","#dc957f","#eaa489","#f1a688","#eca284","#d69070","#b6624e","#b05c69","#a1475c","#c39390","#c39390","#e1b4a0","#e8baa4","#e9b6a0","#d49880","#c7836a","#d9a490","#e5c1ae","#dfc4b4","#e3cabb","#ffffff","#f9edef","#d7cbcf","#fef3f3","#fff7fa","#faeeee","#ffffff","#ffffff","#ffffff","#ffffff"],["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#f8ffff","#f4ffff","#e5f3fc","#404660","#c0ccdf","#deecfb","#e5b3a0","#e8b5a2","#dba18c","#e7ac90","#e4a890","#d79986","#da9988","#e6a689","#eaa685","#eca886","#eca886","#db9d8d","#bf807c","#bf807c","#c39390","#e1b4a0","#e1b4a0","#e1b4a0","#e1b4a0","#dca993","#c18d81","#cc917a","#e4c0ae","#e1c4b4","#e4cbbb","#ffffff","#fceef2","#e2d5d6","#fff6f7","#ffffff","#fff8f9","#fff6f7","#ffffff","#ffffff","#ffffff"],["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#feffff","#f5ffff","#ddecf7","#ecf9ff","#a2a6c0","#f4ffff","#f3feff","#e1bdb9","#e5b29f","#e0a792","#e0a487","#ce8d75","#c08073","#da9988","#e5a78e","#edac90","#e7a68a","#e4a185","#e5a488","#e8b098","#dea291","#eab7a2","#e6baa3","#e1b5a0","#d8ac9d","#c89890","#a55f58","#bc817d","#d7a18c","#e2beac","#e3c7b5","#e9d0be","#e1dae2","#fff8fb","#f1e6e8","#eedfe1","#fffeff","#fdf1f4","#fff9f8","#ffffff","#ffffff","#ffffff"],["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#e3f4fc","#e4f6fc","#5679aa","#eefeff","#dcebf6","#e6e6e9","#e5b09e","#e8b098","#eab096","#e5aa90","#c98a7b","#a33b4a","#921c1c","#c45160","#c54d61","#c64e62","#c74f64","#c74e65","#c8526a","#c25a69","#bf5a6b","#c07582","#a13c4e","#aa696f","#cd988c","#d99f85","#e7b69f","#e2c0ae","#e2c7b5","#dfd0c3","#ffffff","#ffffff","#ebe7ef","#ffffff","#fffdff","#fffeff","#fef6f8","#ffffff","#ffffff","#ffffff"],["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#faffff","#f2ffff","#edfaff","#95a6c7","#f0f9ff","#fbffff","#ffffff","#e2b6a5","#eab49f","#eab199","#e7ac90","#e6aa8b","#f2b593","#f3b591","#f3a88b","#f2a38a","#f0a288","#f7ae95","#f2ad98","#e99f93","#e39c96","#d6908c","#d39991","#d8aa9b","#cf9d89","#dea88c","#e1a890","#ddab97","#debeac","#e1c5b3","#ffffff","#feffff","#ffffff","#f8fcff","#ffffff","#ffffff","#fdffff","#f7ffff","#ffffff","#ffffff","#ffffff"],["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#e0edf8","#fcffff","#f7ffff","#dae1ea","#f3ffff","#ffffff","#d4e1ed","#dec5c0","#e6b298","#e9b299","#e6a88c","#e9ac8e","#f1b18d","#f4b590","#f0ab88","#f4b390","#f2ae8c","#eda88e","#ecaa92","#e9ab95","#ecaa8f","#e9b6a2","#e9b6a2","#e9bea4","#e8ba9d","#e2ad91","#e5b196","#deb6a3","#dbb9a9","#dfc5b8","#e2d8d8","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#e9f3fa","#ebf0f6","#eff7ff","#f8ffff","#ffffff","#fcffff","#e4b39f","#e5af97","#e7ac8f","#eaab8b","#eba882","#eeab8a","#efaa85","#eeac8a","#ebac90","#ebac91","#ebab90","#ebab90","#e9b6a2","#e3b39a","#e7b99b","#ecc1a4","#eabea0","#ebbc9f","#e8bca1","#e0bdaa","#ddbcad","#ddc9be","#c9b7b7","#ebe8e5","#ffffff","#ffffff","#fffffe","#f9f5fb","#d4d5df","#ccd4e5","#d5ddea","#cfd8e4","#ced9e1"],["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#fcffff","#ffffff","#eff4fb","#e1e9ee","#e5edf6","#f7ffff","#ffffff","#f9ffff","#d2c0c4","#e6b29a","#e5a78d","#f1b28f","#efad89","#eba680","#edaa85","#efad8c","#eeac8a","#f0b291","#edab8c","#ebad91","#efb79a","#f0bc9f","#eabc9d","#eec3a6","#ecc0a2","#e8bb9e","#ecc5aa","#e6c9b5","#e1c5b5","#d5bfb6","#c9b2ac","#cfbeba","#fbf4f4","#ffffff","#e8edfe","#d4e4ee","#939ac3","#c9d2e2","#c6d2e2","#c9d3e0","#bbcbe3"],["#fbffff","#fbffff","#fdffff","#fbffff","#fbffff","#feffff","#f8fdff","#ffffff","#f6ffff","#f1f7ff","#eaeef5","#eef4fd","#feffff","#ffffff","#f2f8ff","#c1b8c9","#dfb3a6","#ebb59a","#efb28d","#f5b691","#eeab86","#efab86","#f0ad89","#f2b18c","#f2b18d","#f7b995","#f6bc99","#f7c19d","#f5c2a2","#f3c4a6","#efc6a8","#f1c3a7","#eec3a8","#ecc7ae","#e6c9b5","#dfc7bb","#c4aaa7","#c3aaa3","#e6d6ca","#ede3df","#cecdd9","#ffffff","#dee0ea","#c3c2d1","#d5d5e0","#dbd9e1","#d5d0d8","#d2d2d8"],["#f7fdff","#f9ffff","#fbffff","#faffff","#fcfeff","#fcfeff","#ffffff","#f6f7ff","#ffffff","#ffffff","#e7e7ef","#fafcff","#ffffff","#fcffff","#fffdff","#d2c0c4","#a57276","#e2b2a3","#ecb18c","#f4b48d","#f5b58e","#f5b48d","#f4b38a","#f6b68e","#f8b992","#f7b893","#f7bb97","#f6bd9a","#f9c4a4","#f7c9aa","#f4c9ac","#efc6a8","#efc5a9","#e9c8b0","#c59e93","#cdb1a7","#9d7787","#dbbdad","#d5bdae","#cdbab5","#d7cdcb","#f3f1f7","#fbffff","#e5dce3","#e4dbe3","#e0d7dc","#dcd4d9","#dad1d8"],["#ffffff","#feffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#fdffff","#fcffff","#ffffff","#ffffff","#ebe1e2","#a67264","#aa6e54","#c7938a","#e4af96","#f0b18c","#f1b389","#f5b58a","#f8b992","#f9b790","#f7b692","#f2b086","#f5b893","#f5bd9d","#f5c3a4","#f3c7a9","#f1c9ae","#eec8ab","#e9c7af","#c59e93","#c59f93","#ad7e65","#503e3a","#b3887a","#e4ccbd","#ead9ce","#e6d7d1","#e1d1c8","#f4e6df","#e3d8dd","#e5d9de","#e2dadf","#dbd3da","#ded4dc"],["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#fdffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#f2e6e8","#f5e0dd","#a0594e","#b67b66","#943736","#daa78c","#e1ab8f","#f1b38e","#f2b48e","#f3b58f","#f0ac86","#edad8b","#ecb192","#e8a88d","#f0bd9f","#eebea4","#e8bca5","#e9c1aa","#e9c1ab","#c3978a","#c4998e","#c1988d","#97524c","#312114","#e6c8b4","#ddc4b3","#e9d4c7","#f0e3db","#ead7cd","#e2cec2","#f6ebea","#f3ebea","#d8cfd2","#decfcf","#d7c9ca"],["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#f1d5c7","#ebccbf","#cfa08e","#d7a58e","#923e39","#d19471","#d09368","#d09368","#d59b75","#e0a57d","#e3ae93","#e3ae95","#e3ae95","#e3ae95","#e3ae95","#d9a893","#d2a08e","#c08f80","#c3988c","#bc8a7e","#bf9083","#a77253","#6f2b2d","#301c16","#e6cab5","#e8cbb7","#e8d4c1","#f5e5db","#e4cdbf","#d9bdaf","#efdcd0","#f7e3d7","#ebd7c8","#eee3e0","#c0bccc"],["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#f0dad4","#edcebe","#dfb6a6","#d7a48b","#dda889","#a65a42","#a85c54","#d29367","#be8055","#c58351","#be8055","#be8055","#be8055","#bd7e53","#bf815c","#be8059","#bf8664","#c08f80","#c08f80","#ba8a76","#bb8877","#b6826b","#99504a","#4f221f","#331c0f","#ead0b8","#e9cdbd","#edd6c4","#eedbcc","#e9d0be","#f0d4c1","#f0d8c6","#f1d9ca","#e1c8b4","#f7e2d0","#eed6c7"],["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ece3e4","#e9d4d0","#f0cbb8","#e7c6b7","#eccbb8","#c29380","#e5b598","#dda684","#ac5e48","#4a1d1a","#ca8851","#ce8f5c","#c67e4b","#c88650","#be8055","#be8055","#be8055","#be8055","#c58b72","#c5927a","#bc8a78","#bb8876","#b67f6d","#bb8775","#a86e52","#974243","#4b201b","#411d10","#d6b19b","#e1c3ae","#f0d8c4","#edd7c4","#ebd2bf","#d4b19f","#f7dbca","#e0c4b4","#edd1ba","#fae0cc","#ecd0b9"],["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#fff9fa","#f2d8d0","#debdb4","#d3ada2","#f2c6ad","#fadacb","#f6d6c2","#7d2b21","#e8b693","#e3af8a","#ba7450","#431b17","#b25943","#ce8b55","#c9834f","#c7804d","#c9834f","#c67f4c","#c37c4a","#bf7e51","#c3886b","#bf8a6d","#bd8972","#b8836f","#b17555","#b17655","#9c564c","#80302d","#4d1f1a","#bfa19b","#d6b29e","#e2c0a9","#eed2be","#f7dfcd","#fbe1d0","#f2d4c0","#e5c0aa","#f4d8c8","#e4c0a9","#f9dac4","#f3d1b9"],["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#f6dace","#f0c6ae","#f8dacb","#d1a69f","#be8782","#e7baa1","#f1cbb8","#f8d6c1","#6c2821","#e6b48e","#e0aa82","#c99071","#4c1c0c","#792522","#c47e46","#cd8952","#c98450","#cb8450","#c57f4b","#c27d4b","#bc7a4c","#be7e53","#be886a","#b98369","#b17655","#b37a58","#a96a4f","#994343","#712627","#4b2119","#caa492","#ecceb6","#f6d7c1","#ebccb7","#efd3bd","#f5d7bf","#ecccb8","#e5c3a6","#ebccb9","#ebc7ab","#d6a88f","#f4cfb3"],["#fefbff","#fffeff","#ffffff","#ffffff","#fff9fa","#f6d7c8","#edc8b2","#f2c4af","#f9cfbb","#efc9b5","#e1baab","#dcad95","#f3cbb2","#ecbfa0","#7c2c30","#eaba97","#e6b28a","#b86d4a","#993c30","#511e1d","#ac5a41","#c7834e","#cd8952","#cd8952","#c5804c","#c37f4c","#be7f51","#bf8256","#c08973","#b27957","#b27954","#b27957","#9f5c4a","#8e3a38","#51211f","#9b4f53","#ebcab3","#d7af98","#e8c0a5","#e3bda5","#f8dbc4","#e9c7ae","#e6c0a6","#f9dbc5","#e5c1aa","#f1ccad","#f1cbab","#d9a684"],["#fbffff","#fefeff","#ffffff","#faebec","#ecc5b5","#fad1be","#f3cbb4","#e2ae96","#f6cbb1","#e7b7a4","#dfb29d","#cb8c6d","#f3c8ab","#e3b393","#7d2b2b","#e2ad88","#f0be97","#e4b292","#aa5d44","#e7b896","#802428","#b26540","#cc8a57","#c7804d","#c7834e","#c07b4f","#bc7a50","#b77351","#b17151","#ad704f","#b17653","#a05e4b","#94403d","#792827","#4b211c","#a56444","#e8c5ad","#dfb59b","#e9bea0","#f6d5ba","#e4bda1","#f0cdb1","#deb396","#faddc7","#f6d6bf","#f9d5ba","#f6cdad","#ebbf9e"],["#b2b9d2","#babccc","#f1d9d5","#f8d7ca","#efc3ad","#e2ad95","#f8cdb3","#e9bb9e","#e5b093","#ecbd9f","#f0c2a7","#c48152","#fcd3b6","#af6f4d","#7a2420","#e4af89","#f1bf97","#c17644","#c08469","#eaba96","#ffcfaa","#c17864","#a64842","#b4584a","#ffd7b4","#ffdab7","#ffddc2","#a34239","#a75e4c","#a5654b","#9e5a4d","#96433f","#863635","#5d2b27","#713325","#ba7d4f","#f2d2b6","#f2cdae","#fad7bb","#ebc2a7","#f8d6bc","#fcdac0","#e6bca3","#f3d3ba","#e3c0a5","#f3cdac","#f8cfad","#ebc09d"],["#fdedf3","#fadfd3","#f2d1c1","#f3ceb9","#e9ba9f","#faceb4","#d69167","#eab99a","#d99d7c","#dca37c","#f0bfa1","#cd906a","#f7cbac","#9e473b","#923733","#edba92","#f6c194","#e8b891","#dfb198","#edbf9d","#fecda4","#fccaa1","#ffdbc7","#ffd9bf","#ffdab7","#ffd9b5","#ffd8b3","#ffdbba","#ffe0bd","#ffe4c9","#95362a","#9d5b4d","#ebd3c6","#673029","#ca9880","#ad623d","#f9d6b6","#fedbbe","#fbd9bd","#f0c7a8","#fad6b9","#ffdec3","#f3cfb4","#f1d1b3","#bb7c4a","#f4c8a5","#e7b68e","#f8d2af"],["#f6d5c7","#fcd9ca","#eac0a8","#f2cab1","#f8cdb2","#f8cbad","#f4c2a1","#efbc98","#e0a87f","#fccba7","#f0bc96","#c7844b","#ffd9be","#9b423b","#963726","#e8af87","#fbc99d","#fdd3ad","#e7bb9e","#e5b494","#ffe1ca","#ffd8ba","#ffd1ad","#ffcca2","#ffcca5","#ffd4af","#ffd9b5","#ffd9b7","#ffdcb6","#ffdeba","#ffdeba","#ffe0be","#ffd5b0","#ffe0be","#fffbea","#edceb6","#fad7b9","#e3b792","#f4cead","#e8bd99","#e2b392","#ffe7cc","#eec9aa","#cea48c","#cf976b","#eabc95","#e7b48e","#e8b993"],["#fbd5be","#f8d0b6","#fcd6bd","#f0c7aa","#f5c9aa","#f8ccab","#ffd2ae","#eeb690","#e0a87f","#fac9a2","#f0ba8f","#eab38e","#ffd9b9","#af6b4a","#b35e45","#e2aa7e","#f9c396","#edb690","#daa77f","#ffd8c1","#ffd2b0","#ffd0a9","#ffc095","#ffbd94","#ffbd95","#ffc69d","#ffd0a9","#ffd9b4","#ffdbb8","#ffd9b3","#ffd8b3","#ffdbb3","#ffd8b2","#ffc896","#fff5d9","#fff7df","#fff8e0","#ffebd6","#fad4b1","#fad4b3","#eec5a2","#ffe0c7","#ecc5a5","#c08d6c","#e4b388","#efbe97","#eebe96","#fed6b2"],["#faceb2","#ffdabf","#ffd3b7","#ffd9be","#eaba9b","#facfae","#eab48b","#fdcfaa","#de9d6f","#fac99e","#eaae82","#e9b188","#faceac","#a95e44","#ca874f","#d08e52","#fecb9b","#ffd5ac","#f0c09f","#ffc89f","#ffc49b","#f9b387","#eb9d75","#ee9e78","#e28e61","#e29264","#f1aa85","#fab690","#ffc59b","#ffcea7","#ffd4af","#ffd4ae","#ffd0a8","#ffc294","#fff6dd","#fff9e0","#fff8de","#fff3d9","#fffaec","#fad4b3","#fcd6b7","#ebc2a1","#edc8a9","#e9c0a4","#f4c79d","#e9ba90","#f9cda5","#ffdfbb"],["#ffd5b5","#ebb58f","#ffe1c2","#fdceac","#fdd4b4","#fcd2b1","#f1be9a","#f4c39a","#edb68f","#ffcfa7","#f8c399","#da904b","#f6c89e","#bb7c4d","#d89660","#da9a67","#ffce9b","#fdcca5","#ffddc8","#fab58f","#eaa17e","#d48054","#c04347","#b42e36","#b7323f","#c2674f","#da9d8a","#c64237","#e58e5c","#f4a57d","#feb993","#ffbe93","#ffc193","#ffc093","#fff3d8","#fff9df","#fff9e0","#fff7de","#fffbe7","#fff0df","#fad4b1","#fedabd","#f2ceb0","#efc7a5","#e2ac7c","#fdd1a5","#ffd3ab","#ffd9b4"]];
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  pixels.forEach(row => {
    row.forEach(color => {
      const px = document.createElement("div");
      px.className = "pa-pixel";
      px.style.background = color;
      container.appendChild(px);
    });
  });
})();*/

/*(function pixelAvatarInit() {
  const container = document.getElementById("pixelFace");
  if (!container) return;

  // 8×8 pixel art — 0=transparent, 1=skin, 2=hair, 3=glasses, 4=shirt
  const palette = {
    0: "transparent",
    1: "#c8956c",  // skin
    2: "#2d1a0e",  // dark hair
    3: "#4FC3F7",  // glasses (blue, matches accent)
    4: "#39FF14",  // shirt (neon green)
    5: "#1a0f06",  // very dark
    6: "#e8b08a",  // lighter skin
    7: "#111827",  // shirt dark
  };

  const art = [
    [0,2,2,2,2,2,2,0],
    [2,2,2,2,2,2,2,2],
    [0,1,6,1,1,6,1,0],
    [0,1,3,1,1,3,1,0],
    [0,1,1,1,1,1,1,0],
    [0,1,5,1,1,5,1,0],
    [0,4,4,4,4,4,4,0],
    [0,4,4,7,7,4,4,0],
  ];

  art.forEach(row => {
    row.forEach(code => {
      const px = document.createElement("div");
      px.className = "pa-pixel";
      px.style.background = palette[code] || "transparent";
      container.appendChild(px);
    });
  });
})();*/

/* ── Mobile Nav Toggle ── */
(function navInit() {
  const btn   = document.querySelector(".nav-hamburger");
  const links = document.querySelector(".nav-links");
  if (!btn || !links) return;

  btn.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen);
  });

  // Close on link click
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
})();

/* ── Scroll-activated nav highlight ── */
(function navHighlight() {
  const sections = document.querySelectorAll("section[id], header[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(a => {
          const href = a.getAttribute("href").replace("#","");
          a.style.color = href === entry.target.id
            ? "var(--green)"
            : "";
          a.style.textShadow = href === entry.target.id
            ? "0 0 6px var(--green)"
            : "";
        });
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach(s => observer.observe(s));
})();

/* ── Pixel progress bar entrance animation ── */
(function progressAnimate() {
  const fills = document.querySelectorAll(".pixel-fill");
  if (!fills.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = el.style.getPropertyValue("--fill");
        el.style.setProperty("--fill", "0%");
        el.style.transition = "width 600ms steps(10)";
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            el.style.width = target;
          });
        });
        observer.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  fills.forEach(f => observer.observe(f));
})();

/* ── Pixel "glitch" effect on hero name hover ── */
(function glitchInit() {
  const name = document.querySelector(".hero-name");
  if (!name) return;

  const original = name.innerHTML;
  let timeout;

  name.addEventListener("mouseenter", () => {
    timeout = setInterval(() => {
      const chars = "!@#$%^&*<>?|/\\";
      const scrambled = original.replace(/[A-Za-z]/g, c =>
        Math.random() > 0.7
          ? chars[Math.floor(Math.random() * chars.length)]
          : c
      );
      name.innerHTML = scrambled;
    }, 60);
  });

  name.addEventListener("mouseleave", () => {
    clearInterval(timeout);
    name.innerHTML = original;
  });
})();

/* ── Console easter egg ── */
(function consoleEgg() {
  const s = [
    "%c▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
    "%c HELLO, CURIOUS HUMAN      ",
    "%c You found the console.    ",
    "%c This site was hand-crafted",
    "%c with pixel-perfect care.  ",
    "%c -- Dr. Voss               ",
    "%c▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  ];
  const style = "color: #39FF14; background: #0d0d0d; font-family: monospace; font-size: 13px; padding: 2px 0;";
  s.forEach(line => console.log(line, style));
})();
