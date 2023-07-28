

let form1 = document.querySelector("form");
let ul = document.querySelector("#ul");
let input = document.querySelector("#input");
let fetchedData = [];

const fetchData=async () =>{
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    fetchedData = data.map((item) => {
      return item.title;
    });
  } catch (error) {
    console.log(error);
  }
}

fetchData(); 

form1.addEventListener("input", function (e) {
  e.preventDefault();

  const search = form1.elements.query.value;
  if (search === "") {
    clear();
    return;
  }

  const filteredData = fetchedData.filter((title) => {
    return title.includes(search);
  });
  clear();

  for (let title of filteredData) {
    let li = document.createElement("li");
    li.innerText = title;
    ul.append(li);
  }
});

input.addEventListener("input", function () {
  clear();
});

function clear() {
  while (ul.firstChild) {
    ul.firstChild.remove();
  }
}













