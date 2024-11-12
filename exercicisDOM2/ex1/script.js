let num = 10;
let taula = document.createElement("table")
let tr;
let td;
for (let i = 1; i <= num; i++) {
    tr = document.createElement("tr");
    for (let j = 1; j <= num; j++) {
        td = document.createElement("td");
        td.innerHTML = i * j;
        tr.append(td);
    }
    taula.append(tr);
}
document.body.append(taula);
