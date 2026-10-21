document.getElementById('ca').textContent=CA;
document.querySelectorAll('.js-x').forEach(a=>a.href=X_LINK);
document.getElementById('copy').onclick=()=>{navigator.clipboard.writeText(CA);const b=document.getElementById('copy');b.textContent='Copied!';setTimeout(()=>b.textContent='Copy',1500)};
