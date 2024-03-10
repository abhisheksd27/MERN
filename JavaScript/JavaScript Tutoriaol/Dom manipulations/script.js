// // // getElementByid
// // const title=document.getElementById('main-heading');
// // console.log(title)


// // // getElementByClassNbame()
// // const movieItems =document.getElementsByClassName("movie-item"); 
// // console.log(movieItems)

// // // get element by tag name
// // const ul= document.getElementsByTagName("ul");
// // console.log(ul)


// // // querySelector
// // const firstPara=document.querySelector('div');
// // console.log(firstPara);

// // // queryselectorAll();
// // const allpara=document.querySelectorAll('div');
// // console.log(allpara);


// const title =document.querySelector('#main-heading');
// // console.log(title.textContent);
// title.style.color='red';


// // const listItems = document.querySelectorAll('.movie-item')
// // listItems.forEach((item)=>{
// //     item.style.color="blue";
// //     item.style.fontSize='5rem'
    
// // })
// // console.log(listItems)



// // creating the elements
// const ul = document.querySelector('ul')

// const li=document.createElement('li');
// ul.append(li);

// // Modifying text
// li.textContent ="New List Item";
// // Modufying the text
// li.innerText="X-men"
// // adding class
// li.className="movie-item"

// // Adding attributes 
// li.setAttribute('data-genre','action')
// console.log(li.getAttribute('data-genre'));



// const listItems = document.querySelectorAll('.movie-item')
// listItems.forEach((item)=>{
//     item.style.color="blue";
//     item.style.fontSize='1rem';
//     item.style.textAlign='center';
    
    
// })

// // modufying attributes

// const ul1=document.getElementById("main-heading");

// ul1.setAttribute("id","movieList");

// const lists=document.querySelector('#movieList');
// // lists.style.padding="10px"


// const head = document.querySelector('#main-heading');
// head.style.textAlign = "center";


// const cont = document.querySelector(".container");

// cont.style.background="grey";


// container.setAttribute("id","cont");

// container.style.background="red";

// remove elements

// navigate the dom


// parent node traversaL

// let ul=document.querySelector('ul');

// console.log(ul.parentNode.parentNode);  // returns the parent of <ul>

// console.log(ul.parentElement); 

// console.log(ul.parentElement.parentElement) ;  

// const html=document.documentElement;
// console.log(html.parentNode)
// console.log(html.parentElement)


// Child node traversals
let ul=document.querySelector('ul');
// console.log(ul.childNodes)
// console.log(ul.firstChild)    // return the first child node (text
// // or element). If there are no children, it returns null
// console.log(ul.lastChild)     //return the last child node (text or
// //element). If there are no children, it returns null

// sibling node traversal

console.log(ul.nextSibling);      //returns the next sibling of the selected
                                //node. If there is no next sibling, it
                                //returns null

console.log(ul.previousSibling);  //returns the previous sibling of the
                                //selected node. If there is no previous
                                //sibling, it returns null
