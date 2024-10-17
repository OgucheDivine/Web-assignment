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
    if (img.src=='check.svg'){
        img.src='checked.svg'
    }else{
        img.src='check.svg'
    }
  }

function create(){
    
    let list=document.querySelector('#list')
    let input=document.querySelector('#input')
    if (input.value !='  ' &&input.value !=' ' && input.value !=''){
    let ele=document.createElement('p')
    ele.innerHTML=`<img src="check.svg" onclick="checker(this)" height=15.8% width=15.8% > ${input.value}<img src="bin.svg" height="15.9%" width="15.63%" onclick="this.parentNode.remove()">`
    list.appendChild(ele)
    input.value=''}
}
function createKey(event){
    event.key=='Enter'?create():1
}
