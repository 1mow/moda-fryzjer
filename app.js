(function(){
var D={m:[["Strzyżenie włosów + stylizacja","80 zł","30 min"],["Combo: strzyżenie + broda","128 zł"],["Strzyżenie długich włosów 15 cm+","96 zł"],["Trymowanie brody + stylizacja","56–64 zł"],["Trymowanie brody + pielęgnacja","88 zł"],["Królewskie golenie głowy / twarzy","96 zł"],["Królewskie golenie głowy + twarzy","160 zł"],["Farbowanie brody","64 zł"],["Farbowanie włosów","120 zł"],["Mycie i stylizacja / modelowanie","40 zł"],["Woskowanie nosa / uszu","24 zł"],["Regulacja brwi","36 zł"]],
k:[["Strzyżenie damskie","104 zł"],["Mycie + strzyżenie + modelowanie (krótkie / średnie / długie)","72–88 zł"],["Proste modelowanie","64 zł"],["Modelowanie + fale","96 zł"],["Loki","120 zł"],["Koloryzacja jednolita","212 zł"],["Kolor + modelowanie (krótkie / średnie / długie)","176–228 zł"],["Kolor + strzyżenie + modelowanie","204–260 zł"],["Tonowanie","160 zł"],["Tonowanie + modelowanie / pielęgnacja / strzyżenie","180–272 zł"],["AirTouch","od 560 zł"],["Ombre","od 520 zł"],["Sombre","od 400 zł"],["Baleyage","od 256 zł"],["Refleksy","od 247,20 zł"],["Keratynowe wygładzanie / prostowanie","480 zł"],["Botoks na włosy","200 zł"],["Rozjaśnianie odrostów i tonowanie","360 zł"],["Farbowanie włosów średniej długości","280 zł"],["Koloryzacja brwi","40 zł"],["Strzyżenie grzywki","40 zł"]],
d:[["Strzyżenie włosów dziecięce","56 zł"]]};
var F=[["Combo","Strzyżenie i broda w jednej wizycie.","128 zł"],["Królewskie golenie","Pełne golenie głowy i twarzy.","160 zł"],["AirTouch","Koloryzacja z efektem miękkiego przejścia.","od 560 zł"],["Keratyna","Wygładzanie i prostowanie włosów.","480 zł"]];
var $=function(s){return document.querySelector(s)},$$=function(s){return document.querySelectorAll(s)};
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
$('#cards').innerHTML=F.map(function(f){return '<div class="card"><h3>'+f[0]+'</h3><p>'+f[1]+'</p><b>'+f[2]+'</b></div>'}).join('');
var ul=$('#list'),bs=$$('.tabs button');
function show(k){ul.innerHTML='';D[k].forEach(function(r,i){var li=document.createElement('li'),a=document.createElement('span'),b=document.createElement('span');a.textContent=r[0];if(r[2]){var s=document.createElement('small');s.textContent=r[2];a.appendChild(s)}b.textContent=r[1];li.appendChild(a);li.appendChild(b);li.style.animationDelay=i*40+'ms';ul.appendChild(li)});bs.forEach(function(x){x.setAttribute('aria-selected',x.dataset.t===k)})}
bs.forEach(function(x){x.onclick=function(){show(x.dataset.t)}});show('m');
var WK={g1:[1,2,3,4,5,8],g2:[6,7,9,10,11]},ALL=[].concat(WK.g1,WK.g2);
var IMG=function(n){return 'assets/work'+(n<10?'0':'')+n+'.jpg'};
Object.keys(WK).forEach(function(id){var h='';WK[id].forEach(function(n){h+='<div class="gi"><img src="'+IMG(n)+'" data-i="'+ALL.indexOf(n)+'" alt="Praca salonu MODA" draggable="false"></div>'});$('#'+id).innerHTML=h+h});
var lb=document.createElement('div');lb.id='lb';lb.innerHTML='<button class="lbx" aria-label="Zamknij">&times;</button><button class="lbp" aria-label="Poprzednie">&#8249;</button><img alt="Praca salonu MODA"><button class="lbn" aria-label="Następne">&#8250;</button>';document.body.appendChild(lb);
var li=lb.querySelector('img'),ci=0;
function op(i){ci=(i+ALL.length)%ALL.length;li.src=IMG(ALL[ci]);lb.classList.add('on')}
function cl(){lb.classList.remove('on')}
$$('.gi img').forEach(function(m){m.onclick=function(){op(+m.dataset.i)}});
lb.onclick=function(e){var t=e.target;if(t.classList.contains('lbp'))op(ci-1);else if(t.classList.contains('lbn'))op(ci+1);else if(t!==li)cl()};
addEventListener('keydown',function(e){if(!lb.classList.contains('on'))return;if(e.key==='Escape')cl();if(e.key==='ArrowLeft')op(ci-1);if(e.key==='ArrowRight')op(ci+1)});
var hd=$('header'),pg=document.createElement('div');pg.id='pg';document.body.appendChild(pg);
function onS(){var y=scrollY,h=document.documentElement.scrollHeight-innerHeight;hd.classList.toggle('sc',y>30);pg.style.transform='scaleX('+(h>0?y/h:0)+')'}
addEventListener('scroll',onS,{passive:true});onS();
function count(el){var n=parseFloat(el.dataset.n),dec=n%1?1:0,t0=null;function st(t){t0=t0||t;var p=Math.min((t-t0)/1600,1),v=n*(1-Math.pow(1-p,3));el.textContent=v.toFixed(dec).replace('.',',');if(p<1)requestAnimationFrame(st)}requestAnimationFrame(st)}
if(rm||!('IntersectionObserver' in window)){return}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
$$('section h2,.tabs,.list,.team figure,.cols>div,.addr,#kontakt .cta,.card').forEach(function(el){el.classList.add('rv');var p=el.parentNode;if(el.matches('.team figure,.card'))el.style.transitionDelay=Array.prototype.indexOf.call(p.children,el)*120+'ms';io.observe(el)});
setTimeout(function(){$$('.stats b').forEach(count)},3300);
var hero=$('.hero'),img=$('.logo img');
hero.addEventListener('mousemove',function(e){var r=hero.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;hero.style.setProperty('--mx',x+'px');hero.style.setProperty('--my',y+'px');img.style.transform='translate('+((x/r.width-.5)*-14)+'px,'+((y/r.height-.5)*-10)+'px)'});
$$('.card').forEach(function(c){c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.setProperty('--cx',x*100+'%');c.style.setProperty('--cy',y*100+'%');c.style.transform='rotateY('+(x-.5)*8+'deg) rotateX('+(.5-y)*8+'deg) translateY(-4px)'});c.addEventListener('mouseleave',function(){c.style.transform=''})});
var c=$('#sp'),x=c.getContext('2d'),P=[],W,H;
function rs(){W=c.width=innerWidth;H=c.height=innerHeight}rs();addEventListener('resize',rs);
for(var i=0;i<(innerWidth<720?24:50);i++)P.push({x:Math.random(),y:Math.random(),r:Math.random()*1.6+.4,v:Math.random()*.25+.08,p:Math.random()*6.28,s:Math.random()*.02+.008});
(function f(){x.clearRect(0,0,W,H);P.forEach(function(q){q.y-=q.v/H*2;q.p+=q.s;if(q.y<-.02){q.y=1.02;q.x=Math.random()}x.beginPath();x.arc(q.x*W+Math.sin(q.p)*8,q.y*H,q.r,0,6.283);x.fillStyle='rgba(232,201,124,'+(.25+.45*Math.abs(Math.sin(q.p)))+')';x.shadowColor='rgba(232,201,124,.8)';x.shadowBlur=8;x.fill()});requestAnimationFrame(f)})();
})();
