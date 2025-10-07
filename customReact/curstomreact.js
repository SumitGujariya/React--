// Create a dom for the inject the code

function customRender(reactElement, container) {
  // This will first method
  /* const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  domElement.setAttribute("href", reactElement.props.href)
  domElement.setAttribute("target", reactElement.props.target)

  container.appendChild(domElement)
  */

  // In this code we use the (forin) loop and pass all the attribute in single loop.
  // Here we don't need to pass all the attribute in personaly.
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "childern") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

// This is the tree structure
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visiti google",
};

const mainContainer = document.querySelector("#root");

// This CR is help you enject the element. for enject the element you need to write what you want to inject and where?
// Example is you inject in reactElement and in mainContainer.
customRender(reactElement, mainContainer);
