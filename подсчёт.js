const domElements = {};

function addToCounter (elem) {
  domElements[elem.tagName] = typeof domElements[elem.tagName] === 'undefined' ? 1 : domElements[elem.tagName] + 1
}

function scanDOM (elem) {
  if (elem.hasChildNodes()) {
    for(let i = 0; i < elem.childNodes.length; i++) {
      let child = elem.childNodes[i];
      if (child.nodeType == 1) {
        addToCounter(child);
        scanDOM(child);
      }
    }
  } else {
    addToCounter(elem);
    
    Object.keys(domElements).forEach((val) => {
      console.log(`There are ${domElements[val]} elements with ${val} tag name `);
    })
  }
}

let body = document.querySelector('body');

scanDOM(body);