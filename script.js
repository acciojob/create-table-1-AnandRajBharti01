let table = document.getElementById("sampleTable")
function insert_Row() {
let c = 1;
    //Write your code here
    let row = document.createElement('tr');
	let td1 = document.createElement('td');
	let td2 = document.createElement('td');

	td1.textContent = `New Cell${c}`
	td2.textContent = `New Cell${c+1}`
	c+=1;

	row.prepend(td1,td2);
	table.prepend(row)
	
}
