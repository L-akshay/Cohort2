var main=document.querySelector('#main')
var img=document.querySelector('#cursor')
var body=document.body
main.addEventListener('mousemove',function(dets){
  img.style.left=dets.x+'px'
  img.style.top=dets.y+'px'

})