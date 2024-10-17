let submit=document.querySelector('#submit')
let col_no=0
function color(){
    col_no+=1
    let colors=['pink','yellow','blue','white','orange','lime','aqua','orchid']
   let col=col_no %colors.length
   let colorer=colors[col]
   console.log(col)
    document.body.style.backgroundColor=`${colorer}`
}

function checker(img) {
    if (img.src=='https://oguchedivine.github.io/Web-assignment/check.svg'){
        img.src='https://oguchedivine.github.io/Web-assignment/checked.svg'
    }else{
        img.src='https://oguchedivine.github.io/Web-assignment/check.svg'
    }
  }

function create(){
    
    let list=document.querySelector('#list')
    let input=document.querySelector('#input')
    if (input.value !='  ' &&input.value !=' ' && input.value !=''){
    let ele=document.createElement('p')
    ele.innerHTML=`<img src="'https://oguchedivine.github.io/Web-assignment/check.svg" onclick="checker(this)" height=6.8% width=6.8% > ${input.value}<img src="bin.svg" height="6.9%" width="6.63%" onclick="this.parentNode.remove()">`
    list.appendChild(ele)
    input.value=''}
}
function createKey(event){
    event.key=='Enter'?create():1
}
