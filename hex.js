const hex =['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

const btnHex=document.querySelector('#click-hex');
const value = document.querySelector('#value');

btnHex.addEventListener('click',()=>{
    let color = '#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*hex.length)]
    }
    value.innerHTML=`${color}`;
    document.body.style.backgroundColor=`${color}`;
})