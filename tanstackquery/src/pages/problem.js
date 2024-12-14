

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
  




