let table = document.getElementById("sampleTable");

function insert_Row() {

    let row = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");

    td1.innerHTML = "New Cell1";
    td2.innerHTML = "New Cell2";

    row.appendChild(td1);
    row.appendChild(td2);

    table.insertBefore(row, table.firstChild);
}