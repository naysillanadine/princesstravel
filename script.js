const toast=document.getElementById('toast');
function showToast(t){toast.textContent=t;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2600)}
function book(name){showToast('✦ '+name+' dipilih — siap konsultasi untuk booking!')}
function plan(){
 const place=document.getElementById('place').value,style=document.getElementById('style').value,days=document.getElementById('days').value;
 const p={beach:['Bali / Lombok','sunset, beach club & island hopping'],city:['Tokyo / Singapore','shopping, cafe hopping & city lights'],culture:['Kyoto / Yogyakarta','heritage, kuliner & slow travel'],nature:['Bromo / Swiss','scenery, hiking & adventure']}[place];
 const s={chill:'slow & relaxing',fun:'fun-packed',romantic:'romantic',budget:'smart-budget'}[style];
 document.getElementById('result').innerHTML=`✨ <b>${days}D trip • ${s}</b><br>Rekomendasi: ${p[0]}. Vibe: ${p[1]}.`;
 showToast('Itinerary mini kamu sudah dibuat ✈️');
}
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
 const cat=btn.dataset.filter;
 document.querySelectorAll('.destination').forEach((card,i)=>{
   const show=cat==='all'||card.dataset.cat===cat;
   card.style.display=show?'block':'none';
   if(show){card.classList.remove('reveal');void card.offsetWidth;card.classList.add('reveal')}
 });
}));
document.getElementById('hamb').addEventListener('click',()=>{
 const n=document.getElementById('navLinks'),open=n.classList.toggle('open');
 n.style.display=open?'flex':'';
 if(open){n.style.position='absolute';n.style.top='70px';n.style.left='0';n.style.right='0';n.style.padding='20px 6vw';n.style.background='#08090d';n.style.flexDirection='column';n.style.gap='18px';n.style.borderBottom='1px solid #ffffff15'}
});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in-view')}),{threshold:.12});
document.querySelectorAll('.destination,.package,.planner-box,.quote,.section-top').forEach(el=>observer.observe(el));
