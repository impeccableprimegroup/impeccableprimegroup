document.querySelectorAll('.burger').forEach(function(b){b.onclick=function(){document.querySelector('.nav').classList.toggle('open')}});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}})},{threshold:.1});
document.querySelectorAll('.fade').forEach(function(el){io.observe(el)});
document.querySelectorAll('img[data-zoom]').forEach(function(i){i.onclick=function(){var o=document.createElement('div');o.className='lb';o.innerHTML='<img src="'+i.src+'" alt="'+i.alt+'">';o.onclick=function(){o.remove()};document.body.appendChild(o)}});

// about page scripts
var t=document.querySelector('.toggle'),m=document.querySelector('.more');
if(t)t.onclick=function(){var o=m.classList.toggle('open');t.textContent=o?'Show less':'Show more'};
