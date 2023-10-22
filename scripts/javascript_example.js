// print statements
console.log("Hola Mundo!");

// functions!
function add_one(a) {
  return a + 1;
}

console.log(add_one(1));

// The imperative way
let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  array[i] += 1;
}
console.log(array);

// The functional way
array = array.map(add_one);
console.log(array);

// Anonymous funcs
array = array.map((a) => {
  return a + 1;
});
console.log(array);

//Reading input
document.getElementById("submitBtn").addEventListener("click", function () {
  document.getElementById("output").innerHTML =
    `Example Output: ` + document.getElementById("num").value;
});

// the typing problem
document.getElementById("submitBtn").addEventListener("click", function () {
  const val = add_one(document.getElementById("num").value);
  document.getElementById("output").innerHTML = `Example Output: ` + val;
});

// Use a module
function CodeModule(containerID = "#code_container") {
  // instance vars
  let me = {};
  let codeElement = document.querySelector(containerID);

  // functions
  function getCode(snippet) {
    let code = `<div>
        <pre><span class="comment">${snippet.comment}</span>
        <p>${snippet.code} </p></pre> </div> <br>
        `;
    return code;
  }
  function redraw(snippets) {
    codeElement.innerHTML = "";
    codeElement.innerHTML = snippets.map(getCode).join("\n");
  }

  async function load_data() {
    const res = await fetch("code.json");
    const snippets = await res.json();
    me.redraw(snippets);
  }

  me.redraw = redraw;
  me.load_data = load_data;

  return me;
}

const main = CodeModule();
main.load_data();
