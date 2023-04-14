let toggle=document.getElementById('toggle');
let darkmode=document.getElementById('label_toggle');
toggle.addEventListener('change',(event)=>{
    let checked = event.target.checked;
    document.body.classList.toggle('dark');
  if(checked==true){
    darkmode.innerHTML='<i class="fa-solid fa-sun"></i>'
    darkmode.style.color="yellow";
  }else{
    darkmode.innerHTML='<i class="fa-solid fa-moon"></i>'
    darkmode.style.color="darkmagenta";
  }
})