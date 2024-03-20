// error handling
// Implement a try-catch block to handle an error that occurs during api data fetching


async function fetchdata(){
    try {
        let response=await fetch("https://jsonplaceholder.typicode.com/posts");
        let data= await response.json(); 
        console.log(data);
    } catch (error) {
        console.error("Error fetching data")
    }
}
fetchdata();