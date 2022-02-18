const request = new XMLHttpRequest();
request.onreadystatechange = () => {
  if (request.readyState === 4) {
    let data = JSON.parse(request.responseText);
    let ul = document.createElement("ul");
    let ul2 = document.createElement("ul");
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h2");
    let p1 = document.createTextNode("In office employees");
    h2.appendChild(p1);
    ul.appendChild(h2);
    let p2 = document.createTextNode("Not in office employees");
    h3.appendChild(p2);
    ul2.appendChild(h3);
    // let p2 = document.createElement("p");

    data.forEach((element) => {
      if (element.inoffice === true) {
        let li = document.createElement("li");
        ul.appendChild(li);
        let ner = document.createTextNode(element.name);
        li.appendChild(ner);
      } else {
        let li = document.createElement("li");
        ul2.appendChild(li);
        let ner = document.createTextNode(element.name);
        li.appendChild(ner);
      }
    });
    document.querySelector("#employeeList").appendChild(ul);
    document.querySelector("#employeeList").appendChild(ul2);
  }
};
request.open("GET", "data/employees.json");

request.send();

// request.open("GET", "data/employees.json").array.forEach((element) => {
//   let ul = documnet.createElement("ul");
//   let li = documnet.createElement("li");
//   ul.appendChild(li);
//   let ner = document.createTextNode(element.ner);
//   li.appendChild(ner);

//   document.querySelector("#ner").appendChild(ul);
// });
