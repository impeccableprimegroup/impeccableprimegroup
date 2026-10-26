document.querySelectorAll('.burger').forEach(function(b){b.onclick=function(){document.querySelector('.nav').classList.toggle('open')}});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}})},{threshold:.1});
document.querySelectorAll('.fade').forEach(function(el){io.observe(el)});
document.querySelectorAll('img[data-zoom]').forEach(function(i){i.onclick=function(){var o=document.createElement('div');o.className='lb';o.innerHTML='<img src="'+i.src+'" alt="'+i.alt+'">';o.onclick=function(){o.remove()};document.body.appendChild(o)}});

// booking page scripts
(function(){var f=document.getElementById('bf'),msg=document.getElementById('msg');
var p=new URLSearchParams(location.search).get('plan');
if(p)document.querySelectorAll('input[name=plan]').forEach(function(r){if(r.value.indexOf(p)===0)r.checked=true});
function v(id){return document.getElementById(id).value.trim()}
function check(){
 if(!v('name')||!v('phone')||!v('area')){msg.className='';msg.textContent='Please fill in your name, cell number and area.';return false}
 if(!document.querySelector('input[name=service]:checked')){msg.className='';msg.textContent='Please choose at least one service.';return false}
 if(!document.querySelector('input[name=plan]:checked')){msg.className='';msg.textContent='Please choose a pricing plan.';return false}
 msg.textContent='';return true}
f.onsubmit=function(e){e.preventDefault();if(!check())return;
 fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(f)).toString()})
 .then(function(r){if(!r.ok)throw 0;msg.className='ok';msg.textContent='Thank you! Your booking request has been sent. We will contact you soon.';f.reset()})
 .catch(function(){msg.className='';msg.textContent='Something went wrong. Please try again or send on WhatsApp.'})};
document.querySelector('[data-send=wa]').onclick=function(){if(!check())return;
 var sv=[].map.call(document.querySelectorAll('input[name=service]:checked'),function(c){return c.value}),pl=document.querySelector('input[name=plan]:checked').value;
 var t='Hello Impeccable Prime Group Pty (Ltd), I would like to book:\n\nName: '+v('name')+'\nCell: '+v('phone')+'\nEmail: '+(v('email')||'-')+'\nArea: '+v('area')+', Pretoria\nPreferred date: '+(v('date')||'-')+'\nServices: '+sv.join(', ')+'\nPricing plan: '+pl+'\nNotes: '+(v('notes')||'-');
 window.open('https://wa.me/27820837466?text='+encodeURIComponent(t),'_blank')};})();
