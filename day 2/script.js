let progress=document.getElementById('progress');
let prev=document.getElementById('prev');
let next=document.getElementById('next');
let circles=document.querySelectorAll('.circle');

let currentactiv=1;
next.addEventListener('click',()=>{
    currentactiv++;
    if(currentactiv>circles.length){
        currentactiv=circles.length;
    }
    //console.log(currentactiv);
    update();
})

prev.addEventListener('click',()=>{
    currentactiv--;
    if(currentactiv<1){
        currentactiv=1;
    }
    update();
})

function update()
{
    circles.forEach((circle,idx)=>{
        if(idx<currentactiv)
        {
            circle.classList.add('active');
        }
        else
        {
            circle.classList.remove('active');
        }
    })
    const actives = document.querySelectorAll('.active');
    progress.style.width= (actives.length-1)*33.33+'%';


    if(currentactiv === 1)
    {
        prev.disabled= true;    
    }
    else if(currentactiv === circles.length)
    {
        next.disabled= true;
    }
    else
    {
        next.disabled=prev.disabled=false;
    }
}