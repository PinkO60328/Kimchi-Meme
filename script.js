document.getElementById('ca').textContent=CA;
document.querySelectorAll('.js-x').forEach(a=>a.href=X_LINK);
document.getElementById('copy').onclick=()=>{navigator.clipboard.writeText(CA);const b=document.getElementById('copy');b.textContent='Copied!';setTimeout(()=>b.textContent='Copy',1500)};
document.querySelectorAll('.js-buy').forEach(a=>a.href=BUY_LINK);
document.getElementById('chain').textContent=CHAIN;
