let table = document.getElementById("sampleTable")
let count = 0;
function insert_Row() {
// let c = 1;
    //Write your code here
    let row = document.createElement('tr');
	let td1 = document.createElement('td');
	let td2 = document.createElement('td');
	
	td1.textContent = `New Cell1`
	td2.textContent = `New Cell2`
		// count++;
	// c+=1;

	row.append(td1);
	row.append(td2);
	table.prepend(row)
	
}
