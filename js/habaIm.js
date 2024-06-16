
var all=document.querySelector('#all');
let achat=document.querySelector('#achat');
let loc=document.querySelector('#loc');
let vent=document.querySelector('#vent');
// window.onload=function(){
  
// }
document.getElementById('al').addEventListener('load',()=>{
    all.style.display='flex';
    document.getElementById('al').style.color='crimson';
    achat.style.display='none';
    loc.style.display='none';
    vent.style.display='none';
})
document.getElementById('acha').addEventListener('click',()=>{
    console.log('click achat');
    all.style.display='none';
    loc.style.display='none';
    vent.style.display='none';
    achat.style.display='flex';
    document.getElementById('al').style.color='';
    document.getElementById('vt').style.color='';
    document.getElementById('acha').style.color='crimson';
    document.getElementById('loco').style.color='';
})
document.getElementById('loco').addEventListener('click',()=>{
    all.style.display='none';
    loc.style.display='flex';
    vent.style.display='none';
    achat.style.display='none';
    document.getElementById('acha').style.color='';
    document.getElementById('al').style.color='';
    document.getElementById('loco').style.color='crimson';
    document.getElementById('al').style.color='';
})
document.getElementById('vt').addEventListener('click',()=>{
    all.style.display='none';
    loc.style.display='none';
    vent.style.display='flex';
    achat.style.display='none';
    document.getElementById('acha').style.color='';
    document.getElementById('al').style.color='';
    document.getElementById('vt').style.color='crimson';
    document.getElementById('loco').style.color='';
})
document.getElementById('al').addEventListener('click',()=>{
    all.style.display='flex';
    loc.style.display='none';
    vent.style.display='none';
    achat.style.display='none';
    document.getElementById('acha').style.color='';
    document.getElementById('vt').style.color='';
    document.getElementById('al').style.color='crimson';
    document.getElementById('loco').style.color='';
})
