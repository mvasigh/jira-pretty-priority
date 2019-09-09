console.log("extension running...");

function inject() {
  const getIconUrl = name => `/images/icons/priorities/${name}.svg`;

  const rotations = {
    high: 45,
    low: -45
  };

  // Rotate the types that need rotation
  Object.entries(rotations).forEach(([key, value]) => {
    const arrows = document.querySelectorAll(`[src="${getIconUrl(key)}"]`);
    arrows.forEach(arrow => {
      arrow.style.transform = `rotate(${value}deg)`;
    });
  });

  // Hide medium arrows
  const mediumArrows = document.querySelectorAll(
    `[src="${getIconUrl("medium")}"]`
  );
  mediumArrows.forEach(arrow => {
    arrow.style.transform = 'rotate(90deg)'
    arrow.style.opacity = 0.5;
  });
}

new MutationObserver(inject).observe(document.body, { childList: true });
