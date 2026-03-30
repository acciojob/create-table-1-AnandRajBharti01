let table = document.getElementById("sampleTable");

function insert_Row() {

  let row = table.insertRow(0);   // ✅ Insert row at top position 0
  let td1 = row.insertCell(0);    // ✅ Insert cell 1
  let td2 = row.insertCell(1);    // ✅ Insert cell 2

  td1.textContent = "New Cell1";  // ✅ Exact text
  td2.textContent = "New Cell2";  // ✅ Exact text
}
```

---

## **Why Previous Code was Wrong:**

| Problem | Reason |
|---------|--------|
| `table.prepend(row)` ❌ | Mixes with existing row content |
| `let c = 1` inside function ❌ | Resets every time |
| `createElement` + `append` ❌ | Content mixing issue |

---

## **Why New Code is Correct:**

| Method | Why ✅ |
|--------|--------|
| `insertRow(0)` | Cleanly adds row at top |
| `insertCell(0)` | Cleanly adds cell at position |
| `"New Cell1"` | Exact text test expects |

---

## **What Test Expects:**
```
td:first-child → "New Cell1" ✅
td:last-child  → "New Cell2" ✅