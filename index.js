// console.dir(document)
// console.log(document.all)
//  console.log(document.getElementById('header-title'))
// var items=document.getElementById('header-title')
 //console.log(items)
 //console.log(items)

var items=document.getElementsByClassName('list-group-item')
console.log(items)
items[1].innerHTML="  "
for(var i=0;i<items.length;i++){
    //items[i].style.color='red'
}
delete event
itemList.addEventListener('click', removeItem);

//additem function
function additem(e){  //e is event object
e.preventDefault();

//get input value
var newItem= document.getElementById('item').value;

//create new li element
var li=document.createElement('li');
//adding class to li
li.className='list-group-item';
//add text node with input value
li.appendChild(document.createTextNode(newItem));
//create delete button element
var deleteBtn=document.createElement('button');
//add classes to del button
deleteBtn.className='btn btn-danger btn-sm float-right delete';
//append text node
deleteBtn.appendChild(document.createTextNode('X'));
//append button to li
li.appendChild(deleteBtn); 
itemList.appendChild(li);
}

remove item function
function removeItem(e){
if(e.target.classList.contains('delete')){
if(confirm('Are You Sure?')){
    var li=e.target.parentElement;
    itemList.removeChild(li);
}
}
}