var grow=0
var h2=document.querySelector('h2')
var btn=document.querySelector('button')
var inne=document.querySelector('.inner')
btn.addEventListener('click',function(){
 var int =setInterval(()=>{
  grow++
  h2.innerHTML=grow+'%'
  inne.style.width=grow+'%'
  
 },30);
 setTimeout(()=>{
  clearInterval(int)
  btn.innerHTML='Downloaded'
 },3000)
})