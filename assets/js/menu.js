const button = document.getElementById('menu-button')
const menus = document.getElementById('menus')

function toggleMenu(){
if(menus.style.display==='flex'){
    menus.style.display='none'
}else{
    menus.style.display='flex'
}
}

button.onclick=()=>{
    toggleMenu()
}