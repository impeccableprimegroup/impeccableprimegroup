document.querySelectorAll('.burger').forEach(function(b){b.onclick=function(){document.querySelector('.nav').classList.toggle('open')}});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}})},{threshold:.1});
document.querySelectorAll('.fade').forEach(function(el){io.observe(el)});
document.querySelectorAll('img[data-zoom]').forEach(function(i){i.onclick=function(){var o=document.createElement('div');o.className='lb';o.innerHTML='<img src="'+i.src+'" alt="'+i.alt+'">';o.onclick=function(){o.remove()};document.body.appendChild(o)}});

// contact page scripts
// Page scripts: menu and fade-in are in js/common.js

// pop-up messages
(function(){
var M=[
{i:'&#128075;',t:'Want to know more about us?',b:'Read About Us',h:'about.html',k:'about'},
{i:'&#128203;',t:'Have you chosen what you want from us?',b:'View Services &amp; Pricing',h:'services-pricing.html',k:'services-pricing'},
{i:'&#9989;',t:'If you are satisfied with what you want, fill in the booking request form.',b:'Book Now',h:'booking.html',k:'booking'},
{i:'&#128591;',t:'We always value people visiting our page. Thank you for stopping by!',b:'Contact Us',h:'contact.html',k:'contact'},
{i:'&#128222;',t:'Want to speak to one of our staff or consultants? Contact us directly on 082 083 7466.',b:'Call 082 083 7466',h:'tel:+27820837466',k:''}];
var page=(location.pathname.split('/').pop()||'index').replace('.html','')||'index';
function st(k,v){try{if(v===undefined)return sessionStorage.getItem(k);sessionStorage.setItem(k,v)}catch(e){}return null}
if(st('ipgPopOff')==='1')return;
var n=parseInt(st('ipgPopIdx'),10)||0,shown=0,box=null,t1=null;
function hide(){clearTimeout(t1);if(!box)return;var b=box;box=null;b.classList.add('out');setTimeout(function(){b.remove()},350)}
function show(){
 if(shown>=5)return;var m=M[n%5];n++;shown++;st('ipgPopIdx',String(n%5));
 var same=m.k===page,href=m.h,label=m.b;
 if(same){if(page==='booking'){href='#bf';label='Go to the form'}else{href='#';label='Got it'}}
 box=document.createElement('div');box.className='pop';box.setAttribute('role','status');
 box.innerHTML='<button class="pop-x" type="button" aria-label="Close message">&times;</button><div class="pop-i">'+m.i+'</div><div class="pop-c"><p>'+m.t+'</p><a class="pop-b" href="'+href+'">'+label+'</a></div><span class="pop-bar"></span>';
 box.querySelector('.pop-x').onclick=function(){st('ipgPopOff','1');hide()};
 box.querySelector('.pop-b').onclick=function(e){if(same&&page!=='booking')e.preventDefault();hide()};
 document.body.appendChild(box);
 t1=setTimeout(function(){hide();setTimeout(show,6000)},9000);
}
setTimeout(show,5000);
})();
