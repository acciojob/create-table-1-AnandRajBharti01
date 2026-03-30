let c = 3;
let table = document.getElementById("sampleTable")
function insert_Row() {
    //Write your code here
    let row = document.createElement('tr');
	let td1 = document.createElement('td');
	let td2 = document.createElement('td');

	td1.textContent = `Row${c} cell1`
	td2.textContent = `Row${c} cell2`
	c+=1;

	row.append(td1,td2);
	table.append(row)
	
}
