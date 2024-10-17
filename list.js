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
    console.log(img.src)
    if (img.src=='http://127.0.0.1:5500/check.svg'){
        img.src='checked.svg'
    }else{
        img.src='http://127.0.0.1:5500/check.svg'
    }
  }

function create(){
    
    let list=document.querySelector('#list')
    let input=document.querySelector('#input')
    if (input.value !='  ' &&input.value !=' ' && input.value !=''){
    let ele=document.createElement('p')
    ele.innerHTML=`<img src="check.svg" onclick="checker(this)" height=1.8% width=1.8% > ${input.value}<img src="bin.svg" height="1.9%" width="1.63%" onclick="this.parentNode.remove()">`
    list.appendChild(ele)
    input.value=''}
}
function createKey(event){
    event.key=='Enter'?create():1
}