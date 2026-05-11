let table = document.getElementById("sampleTable")
let count = 1;
function insert_Row() {
// let c = 1;
    //Write your code here
    let row = document.createElement('tr');
	let td1 = document.createElement('td');
	let td2 = document.createElement('td');
	
	td1.textContent = `New${count} Cell$`
	td2.textContent = `New${count} Cell2`
		// count++;
	// c+=1;

	row.append(td1);
	row.append(td2);
	// table.prepend(row)

 table.insertBefore(row, table.firstChild);
	count++;
	
	
}
