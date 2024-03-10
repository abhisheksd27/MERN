// Dom Manipulations

// Event Delegations

// It allows users to append a SINGLE event listenrs to a 
// parents elements that adds it to all of its present and Future descendants that much a selectors


// document.querySelector('.FootBall').addEventListener( 'click', function (e) {
//     // alert("You clicked on the FootBall");
//     console.log( "Clicked On The FootBall" );
//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor="lightgrey"
//     }
// })

// document.querySelector('.VollyBall').addEventListener( 'click', function (e) {
//     // alert("You clicked on the VollyBall");
//     console.log( "Clicked On The VollyBall" );
//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor="lightgrey"
//     }
// })
// document.querySelector('.FootBall').addEventListener( 'click', function (e) {
//     // alert("You clicked on the FootBall");
//     console.log( "Clicked On The FootBall" );
//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor="lightgrey"
//     }
// })
// document.querySelector('.Boxing').addEventListener( 'click', function (e) {
//     // alert("You clicked on the Boxing");
//     console.log( "Clicked On The Boxing" );
//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor="lightgrey"
//     }
// })
// document.querySelector('.golf').addEventListener( 'click', function (e) {
//     // alert("You clicked on the golf");
//     console.log( "Clicked On The golf" );
//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor="lightgrey"
//     }
// })

// document.querySelector('.Cricket').addEventListener( 'click', function (e) {
//     // alert("You clicked on the Cricket");
//     console.log( "Clicked On The Cricket " );
//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor="lightgrey"
//     }
// })


document.querySelector('.names').addEventListener('click',function(e){
    console.log(e.target.getAttribute('class') + ' is Clicked');


    const target = e.target;
    if(target.matches('li')){
        target.style.backgroundColor = "lightgrey";
    }
})

const sports = document.querySelector('.names');

const newsports = document.createElement('li');
newsports.innerText='Rugby';
newsports.getAttribute('class','Rugby')


sports.appendChild(newsports)