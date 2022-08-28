// console.log(document);
//console.log(document.body);
 //var headerTitle=document.getElementById('header-title');
 //headerTitle.textContent='Hello';
//headerTitle.innerText='tata';
//console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
//var header=document.getElementsByClassName('main-header');
 //headerTitle.style.borderBottom='solid 30px yellow';
// console.log(headerTitle.style.borderBottom);
//var items=document.getElementsByClassName('list-group-item');
//console.log(items[2]);
//items[2].style.background='indigo';

// for(let i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight='bold';
//     items[i].style.color='white';
//     items[i].style.background='black';


// }

//var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='Love 2';
// li[0].style.fontWeight='bold';
// li[2].style.backgroundColor ='yellow';
// for(let i=0;i<li.length;i++)
// {
//     li[i].style.backgroundColor="#0000bb";
// }
//  let header=document.querySelector('#header-title');
//  header.style.borderBottom='solid 2px #ccc'
//  header.style.border='solid 32px #fff'
//  header.style.borderTop='solid 14px #ddd'
//  let header1=document.querySelector('.title');
//  header1.style.border='solid blue'

//  var www=document.querySelector('.list-group-item')
// www.style.color='blue'

//  let input=document.querySelector('input');
// input.style.color='red'
// input.value='push me'

// let submit=document.querySelector('input[type="submit"]')
// submit.value='End all these'
// submit.style.background="red"
// var cont=document.querySelector('div')
// cont.style.background='indigo'
// var cont=document.querySelector('#main')
// cont.style.background='indigo'

// var cont=document.querySelector('body')
// cont.style.background='gold'
// var item=document.querySelector('.list-group-item');
// item.style.color='red';
// item.style.background ='silver';


// var lastitem =document.querySelector('.list-group-item:last-child')
// lastitem.style.color='blue';
// lastitem.style.background='yellow';


// var seconditem=document.querySelector('.list-group-item:nth-child(2)')
// seconditem.style.color='gold';

// var third=document.querySelector('.list-group-item:nth-child(3)')
// third.style.color='green';

// var seconditem=document.querySelector('.list-group-item:nth-child(2)')
// seconditem.style.backgroundColor='green';

//  var third=document.querySelector('.list-group-item:nth-child(3)')
//  third.style.color='rgba(0,0,0,0)';

//  let seconditem2 =document.querySelectorAll('li:nth-child(2)');
//  console.log(seconditem2)
//  let even =document.querySelectorAll('li:nth-child(even)')
//  let odd=document.querySelectorAll('li:nth-child(odd)')
//  for(let i=0;i<even.length;i++)
//  {
//     even[i].style.background='green';
//     odd[i].style.backgroundColor='yellow';
//     seconditem2[0].style.backgroundColor='red';
//  }

  var itemList=document.querySelector('#items');
//  itemList.parentNode.style.backgroundColor='#ff0000';
//  console.log(itemList.parentNode);
 //console.log(itemList.children);
 //console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='pink';
 //console.log(itemList.firstChild);
 itemList.firstElementChild.textContent='hello!';
//  console.log(itemList.firstChild);
 itemList.lastElementChild.textContent='hello2!';
 console.log(itemList.nextSibling);
 console.log(itemList.nextElementSibling);
 console.log(itemList.previousSibling);
 console.log(itemList.previousElementSibling);
 itemList.previousElementSibling.style.color='green';

 //var newDiv=document.createElement('div');
 
//  newDiv.className='hello!';
//  newDiv.id='hello!';
//  newDiv.setAttribute('title','helloDiv');
//  console.log(newDiv);
//  var newDivtext=document.createTextNode('hello World!');
//  newDiv.appendChild(newDivtext);
//  var container=document.querySelector('header .container')
//  var h1=document.querySelector('header h1')
//  console.log(newDiv);
//  newDiv.style.backgroundColor='pink';
//  container.insertBefore(newDiv,h1)

// var form = document.getElementById('addForm');
// var itemlist=document.getElementById('items');
// var filter=document.getElementById('filter');
// form.addEventListener('submit',additem);
// itemlist.addEventListener('click',removeitem);
// filter.addEventListener('keyup',filterItems);
// function additem(e)
// {
//     e.preventDefault();
//     var newItem=document.getElementById('item').value;
//     var li=document.createElement('li');
//     li.className='list-group-item';
//     li.appendChild(document.createTextNode(newItem));

//     var deletebtn=document.createElement('button');
//     deletebtn.className='btn btn-danger btn-sm float-right delete';
//     deletebtn.appendChild(document.createTextNode('X'));
//     li.appendChild(deletebtn);
//     itemlist.appendChild(li);

//     var editbtn=document.createElement('button');
//     editbtn.className='btn btn-sm  float-right ';
//     editbtn.appendChild(document.createTextNode('EDIT'));
//     li.appendChild(editbtn);
 
//     itemlist.appendChild(li);   
// }

// function removeitem(e)
// {
//    if(e.target.classList.contains('delete'))
//    {
//     if(confirm('are u sure'))
//     {
//         var li=e.target.parentElement;
//         itemlist.removeChild(li);
//     }
//    }
// }

// function filterItems(e)
// {
//  var text=e.target.value.toLowerCase();
//  console.log(text);
//  var items=itemlist.getElementsByTagName('li');
//  console.log('li');
//  Array.from(items).forEach(function(item){
// var itemName=item.firstChild.textContent;
// console.log(itemName);
// if(itemName.toLowerCase().indexOf(text)!= -1)
// {
//   item.style.display='block';
// }
// else{
//   item.style.display='none';
// }
//  })
// }
// let x=1;
// console.log('aaa',1);

// let a=[1,2,3]
// console.log(JSON.parse(JSON.stringify(a)));
// a.push(4);
// console.log(JSON.parse(JSON.stringify(a)));