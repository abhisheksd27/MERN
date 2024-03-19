// create a program that checks if a given year is a leap year

const leapyear=(year)=>{
    let result;
    if(isNaN(year) || year == null){
        console.log("Please enter a valid year");
    }else{
      if (year % 4 ===  0) {
          if (year % 100 === 0) {
              if (year % 400 === 0) {result = true;} else {result=false};
          } else {result = true;}
      } else {result = false;}
      return result;
    };
}

console.log(leapyear(2024));