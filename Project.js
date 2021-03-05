var Add = document.getElementById('Add');
function getandupdate() {
    tit = document.getElementById('title').value;
    desc = document.getElementById('Description').value;
    if (localStorage.getItem('itemsJson') == null) {
        
        console.log("Updating list.....");
    itemJsonArray = [];
    itemJsonArray.push([tit,desc]);
    localStorage.setItem('itemsJson' , JSON.stringify(itemJsonArray));
    

    
    
}else{
    
    itemJsonArrayStr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.push([tit,desc]);
    localStorage.setItem('itemsJson' , JSON.stringify(itemJsonArray));
}



update();
// //Populate the table

// let tableBody = document.getElementById("tableBody");
// let str= ""; 
// itemJsonArray.forEach((element , index)=>{
// str += `
// <tr>
// <th scope="row">${index + 1}</th>
// <td>${element[0]}</td>
// <td>${element[1]}</td>
// <td><button class="btn btn-primary btn-sm" onclick="del(${index})">Delete</button></td>
// </tr> `;

// });
// tableBody.innerHTML = str;

}

function update(){
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = []; 
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    } 
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr); 
    }
    // Populate the table

    let tableBody = document.getElementById("tableBody");
let str= ""; 
itemJsonArray.forEach((element , index)=>{
str += `
<tr>
<th scope="row">${index + 1}</th>
<td>${element[0]}</td>
<td>${element[1]}</td>
<td><button class="btn btn-primary btn-sm" onclick="del(${index})">Delete</button></td>
</tr> `;

});
tableBody.innerHTML = str;


}

Add.addEventListener("click" ,getandupdate);

update();


function del(itemIndex) {
    
    console.log("Delete" , itemIndex);
    itemJsonArray = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);
//delete indexitem element from the array
itemJsonArray.splice(itemIndex,1);


localStorage.setItem('itemsJson' , JSON.stringify(itemJsonArray)
);
update();



}


