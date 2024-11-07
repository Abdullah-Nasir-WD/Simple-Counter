console.log("hello world");

var head = document.querySelector ("#head")

function increase() {
    
    head.innerHTML++

}

function decrease() {
  if (head.innerHTML > 0) {
    head.innerHTML--
  }
 
}

function reset() {
 head.innerHTML = 0
}