
document.querySelectorAll('[data-menu]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const m=document.querySelector('.menu');
    m.style.display=m.style.display==='flex'?'none':'flex';
    m.style.position='absolute';m.style.right='4%';m.style.top='76px';
    m.style.background='#fff';m.style.padding='18px';m.style.borderRadius='16px';
    m.style.flexDirection='column';m.style.boxShadow='0 15px 35px rgba(16,42,67,.15)';
  });
});
document.querySelectorAll('[data-admission]').forEach(f=>{
  f.addEventListener('submit',e=>{
    e.preventDefault();
    const name=f.querySelector('[name=name]').value.trim();
    const phone=f.querySelector('[name=phone]').value.trim();
    const message=`Hello Great Career Public School, I would like to enquire about admission. Name: ${name}. Phone: ${phone}.`;
    window.open('https://wa.me/919911419898?text='+encodeURIComponent(message),'_blank');
  });
});
