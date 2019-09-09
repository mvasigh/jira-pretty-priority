const transformations = {
  high: {
    transform: "rotate(45deg)"
  },
  medium: {
    transform: "rotate(90deg)",
    opacity: 0.7
  },
  low: {
    transform: "rotate(-45deg)",
    opacity: 0.5
  },
  trivial: {
    opacity: 0.5
  }
};

function getSelector(origin, name) {
  const iconUrl = `images/icons/priorities/${name}.svg`;
  return `[src="/${iconUrl}"], [src="${origin}/${iconUrl}"]`;
}

function toStyleString(selector, styles) {
  let body = "";
  for (key in styles) {
    body += `${key}: ${styles[key]} !important;`;
  }
  return `
    ${selector} { ${body} }
  `;
}

function inject() {
  const origin = window.location.origin;
  const styles = document.createElement("style");
  const bodyArr = Object.entries(transformations).map(([key, styles]) => {
    const selector = getSelector(origin, key);
    return toStyleString(selector, styles);
  });
  styles.textContent = bodyArr.join("");
  document.head.appendChild(styles);
}

inject();
