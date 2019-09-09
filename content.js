function getSelector(origin, name) {
  const iconUrl = `images/icons/priorities/${name}.svg`;
  return `[src="/${iconUrl}"], [src="${origin}/${iconUrl}"]`
}

function applyStyles(node, styles) {
  for (key in styles) {
    node.style[key] = styles[key];
  }
}

function inject() {
  const transformations = {
    high: {
      transform: "rotate(45deg)"
    },
    medium: {
      transform: "rotate(90deg)",
      opacity: 0.5
    },
    low: {
      transform: "rotate(-45deg)",
      opacity: 0.5
    },
    trivial: {
      opacity: 0.5
    }
  };

  // Style the types that need transformations
  Object.entries(transformations).forEach(([key, styles]) => {
    const origin = window.location.origin;
    const selector = getSelector(origin, key);
    const arrows = document.querySelectorAll(selector);
    arrows.forEach(arrow => applyStyles(arrow, styles));
  });
}

new MutationObserver(inject).observe(document.body, { childList: true });
