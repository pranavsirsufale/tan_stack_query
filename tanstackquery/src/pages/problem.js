

// Q1) 
//? written by me 
/* 
const fetchData = async () => {
    const promise = new Promise((resolve, reject) => {
        let success = true;
        if (success) {
            
        resolve({ name : 'pooja' , messege : "Data Fetched"})
    } else {
        reject("Data Not laoded")
}
})
return promise  
}
setTimeout( async () => {
    try {
        const data = await fetchData()
        console.log("WHOLE DATA : " , data)
        console.log("MESSEGE OF THE DATA :",data.messege)
        console.log("DATA : ", data.name)
        
    } catch (error) {
        console.log(error);
    }
}, 2000);

*/



//? GPT Generated >>>> 
/*
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { name : 'Pooja ' };
        resolve(data); // Resolves after 2 seconds
      }, 2000);
    });
  }
  
  fetchData()
    .then((data) => {
      console.log("Fetched data:", data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  


    */



    // ? Q. 4) Write an arrow function groupBy() that:


    /*
  const an_array = [
    { "name": "Amit", "age": 25 },{ "name": "Sanjay", "age": 25 },
    { "name": "Rajesh", "age": 30 }, { "name": "Priya", "age": 30 },
    { "name": "Neha", "age": 35 }
    ]


    const groupBy = (array, property) => {
      return array.reduce((acc, obj) => {
        const key = obj[property];
        if (!acc[key]) {
          acc[key] = []; 
        }
        acc[key].push(obj); 
        return acc;
      }, {});
    };
    

    
    // Group by 'age'
    const result = groupBy(an_array, "age");
    console.log(result);

*/





//? Q. 5) Write a JavaScript function createTable() that:



/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title> Pooja's Dynamic Table Generator </title>
  <style>
    table {
      border-collapse: collapse;
      width: 100%;
      margin-top: 20px;
    }
    table, th, td {
      border: 1px solid black;
    }
    th, td {
      padding: 8px;
      text-align: center;
    }
    input[type="number"] {
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <h1>Dynamic Table Generator</h1>

  <label for="columns">Number of Columns:</label>
  <input type="number" id="columns" min="1" value="3">
  <button onclick="createTable()">Create Table</button>

  <table id="dynamicTable">
    <!-- Table will be dynamically generated here -->
  </table>

  <button onclick="addRow()">Add Row</button>

  <script>
    function createTable() {
      const columnCount = parseInt(document.getElementById("columns").value, 10);
      const table = document.getElementById("dynamicTable");

      // Clear any existing table content
      table.innerHTML = "";

      // Create the initial table with 3 rows
      for (let i = 0; i < 3; i++) {
        const row = table.insertRow();
        for (let j = 0; j < columnCount; j++) {
          const cell = row.insertCell();
          const input = document.createElement("input");
          input.type = "text";
          cell.appendChild(input);
        }
      }
    }

    function addRow() {
      const table = document.getElementById("dynamicTable");
      const columnCount = parseInt(document.getElementById("columns").value, 10);

      // Add a new row
      const row = table.insertRow();
      for (let i = 0; i < columnCount; i++) {
        const cell = row.insertCell();
        const input = document.createElement("input");
        input.type = "text";
        cell.appendChild(input);
      }
    }

    // Create the default table on page load
    window.onload = createTable;
  </script>
</body>
</html>


*/



//? Q.6) Write an arrow function mergeArrays that takes two arrys as input and returns a new array that is the concatenation of both arrays.
/*
const mergeArrays = (arr1,arr2) =>{
  return [...arr1,...arr2]
}
let ar1 = [1,2]
let ar2 = [3,4]
console.log(mergeArrays(ar1,ar2))

*/
