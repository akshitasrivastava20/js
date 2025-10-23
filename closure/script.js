const myName=document.getElementById('myName')
const sizer=document.getElementById('sizer');
function makeTextSizer(size){
    function changeSize(){
        myName.style.fontSize=`${size}px`;
    }
    return changeSize;
}
const size12=makeTextSizer(12);
const size10=makeTextSizer(10);

sizer.addEventListener('click',()=>{
    size10();
})