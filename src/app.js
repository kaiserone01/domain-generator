/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["the", "our"];
let adj = ["incredible", "amazing", "suspicious"];
let noun = ["shop", "tarantula", "messi"];
let extension = [".net", ".org", ".com"];

let ul = document.createElement("ul");
document.getElementById("domain-name").appendChild(ul);

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < extension.length; l++) {
        let li = document.createElement("li");
        ul.appendChild(li);
        let result = `${pronoun[i]}${adj[j]}${noun[k]}${extension[l]}`;
        li.innerHTML = li.innerHTML + result;
      }
    }
  }
}
// Gracias Ehiber por aclararme la duda en clase, haciendo esto por mi cuenta
// nunca se me hubiera ocurrido
