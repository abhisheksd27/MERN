// create a function that displays the current date and Time in a specific format

const getcurrentdateandtime = ()=>{
    let currentDate=new Date();
    return currentDate.toLocaleString();

}

console.log(getcurrentdateandtime())
