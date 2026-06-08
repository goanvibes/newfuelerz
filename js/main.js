document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.querySelector('.island-nav');
  const onScroll=()=>nav&&nav.classList.toggle('scrolled',scrollY>18);
  onScroll(); addEventListener('scroll',onScroll,{passive:true});
  const drawer=document.querySelector('.drawer'), overlay=document.querySelector('.overlay');
  const openDrawer=()=>{drawer.classList.add('open');overlay.classList.add('active');document.body.classList.add('menu-open')};
  const close=()=>{drawer.classList.remove('open');overlay.classList.remove('active');document.body.classList.remove('menu-open')};
  document.querySelector('.menu-btn')?.addEventListener('click',openDrawer);
  document.querySelector('.close-btn')?.addEventListener('click',close);
  overlay?.addEventListener('click',close);
  document.querySelectorAll('.drawer a').forEach(a=>a.addEventListener('click',close));
  document.querySelectorAll('.year').forEach(e=>e.textContent=new Date().getFullYear());
  const io=new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting){e.target.classList.add('appear');io.unobserve(e.target)}}},{threshold:.1,rootMargin:'0px 0px -40px'});
  document.querySelectorAll('.reveal,.card,.section-head,.panel').forEach(el=>io.observe(el));
  document.querySelectorAll('.card').forEach(card=>card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();card.style.setProperty('--mx',((e.clientX-r.left)/r.width*100)+'%');card.style.setProperty('--my',((e.clientY-r.top)/r.height*100)+'%')}));
  const form=document.querySelector('[data-whatsapp-form]');
  form?.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const msg=`Hi Fuelerz, I want to start a project.%0A%0AName: ${encodeURIComponent(data.get('name')||'')}%0ABusiness: ${encodeURIComponent(data.get('business')||'')}%0AService: ${encodeURIComponent(data.get('service')||'')}%0ABudget: ${encodeURIComponent(data.get('budget')||'')}%0AMessage: ${encodeURIComponent(data.get('message')||'')}`;window.open(`https://wa.me/917722011476?text=${msg}`,'_blank')});
});
