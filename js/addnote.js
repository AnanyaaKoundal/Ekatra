// if user creates note, add it to local storage
let addBtn=document.getElementById('addBtn');
// localStorage.clear();
showNotes();
addBtn.addEventListener("click", function(e){
    let Txt=document.getElementById("addTxt");
    let Titles=document.getElementById("addTitle");
    let notes=localStorage.getItem("notes");
    let title=localStorage.getItem("title");
    let notesObj=[];
    if(notes==null){
        notesObj=[];
        titleObj=[];
    }else{
        notesObj=JSON.parse(notes);
        titleObj=JSON.parse(title);
    }
    notesObj.push(Txt.value);
    titleObj.push(Titles.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    localStorage.setItem("title",JSON.stringify(titleObj));
    Txt.value="";
    Titles.value="";
    showNotes();
})
function showNotes(){
    let notes=localStorage.getItem("notes");
    let title=localStorage.getItem("title");
    if(notes==null){
        notesObj=[];
        titleObj=[];
    }else{
        notesObj=JSON.parse(notes);
        titleObj=JSON.parse(title);
    }
    let html="";
    notesObj.forEach(function(element, index){
        html+=`<div class="noteCard my-2 mx-2 card"  >
                    <div class="card-body">
                        <h5 class="card-title">${titleObj[index]}</h5>
                        <p class="card-text">${element}</p>
                        <button onclick="delB(this.id)" class="btn btn-primary" id="${index}">Remove</a>
                    </div>
                </div>`;
    })
    let notesE=document.getElementById("notes");
    if(notesObj.length!=0){
        notesE.innerHTML=html;
    }else{
        notesE.innerHTML=`Sorry, Nothing to show, please "Add a event above"!!<br><br>`;
    }
}
function delB(index){
    let notes=localStorage.getItem("notes");
    let title=localStorage.getItem("title");
    if(notes==null){
        notesObj=[];
        titleObj=[];
    }else{
        notesObj=JSON.parse(notes);
        titleObj=JSON.parse(title);
    }
    notesObj.splice(index,1);
    titleObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    localStorage.setItem("title",JSON.stringify(titleObj));
    showNotes();
}

let search=document.getElementById("SearchNotes");
search.addEventListener("input", function(){
    let inputV=search.value.toLowerCase();
    let notesCard=document.getElementsByClassName("noteCard");
    Array.from(notesCard).forEach(function(element){
        let txt=element.getElementsByTagName("p")[0].innerText.toLowerCase()+element.getElementsByTagName("h5")[0].innerText.toLowerCase();
        console.log(txt);
        if(txt.includes(inputV)){
            console.log(txt);
            element.style.display="block";
        }else{
            element.style.display="none";
        }
    })
})