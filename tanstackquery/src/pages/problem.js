

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








//? Q.6) Write an arrow function mergeArrays that takes two arrys as input and returns a new array that is the concatenation of both arrays.
/*
const mergeArrays = (arr1,arr2) =>{
  return [...arr1,...arr2]
}
let ar1 = [1,2]
let ar2 = [3,4]
console.log(mergeArrays(ar1,ar2))

/*
