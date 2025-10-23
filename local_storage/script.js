const button=document.getElementById('enter-button')
const username=document.getElementById('username');
const person=document.getElementById('person')

button.addEventListener('click',()=>{
    const uname=username.value;
    localStorage.setItem('name',uname);
});

window.addEventListener('load',()=>{
    const val=localStorage.getItem('name');
    person.innerText=val;
})