const words=['CSIT Student','AI Enthusiast','Python Developer','Web Developer'];let i=0,j=0,del=false;
function type(){const t=document.getElementById('typing');let w=words[i];
t.textContent=del?w.slice(0,--j):w.slice(0,++j);
if(!del&&j===w.length){del=true;setTimeout(type,1200);return;}
if(del&&j===0){del=false;i=(i+1)%words.length;}
setTimeout(type,del?50:100);}
type();
document.getElementById('topBtn').onclick=()=>window.scrollTo({top:0,behavior:'smooth'});