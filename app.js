const cdn='https://cmssambot.b-cdn.net/05/2026/video/';
const videos=['assets/videos/01-cover.mp4?v=gold-cover-20261018','assets/videos/02-opening-nov18-mobile.mp4?v=20261103','assets/videos/03-background.mp4?v=v3-compressed-20261007'];
const background=document.querySelector('#background');background.poster='assets/sky-background-poster.jpg';background.src=videos[0];
const thirdVideo=document.createElement('video');
thirdVideo.src=videos[2];thirdVideo.muted=true;thirdVideo.loop=true;thirdVideo.playsInline=true;thirdVideo.preload='none';thirdVideo.poster='assets/sky-background-poster.jpg';
thirdVideo.setAttribute('webkit-playsinline','');thirdVideo.setAttribute('aria-hidden','true');
thirdVideo.style.cssText='position:absolute;inset:0;opacity:0;transition:opacity .35s ease;';
background.parentElement.append(thirdVideo);
const cover=document.querySelector('#cover'),invitation=document.querySelector('#invitation');
const music=document.querySelector('#music'),soundToggle=document.querySelector('#sound-toggle');
music.volume=.5;
function updateSound(){const playing=!music.paused; soundToggle.textContent=playing?'🔊 បិទសំឡេង':'🔇 បើកសំឡេង';soundToggle.setAttribute('aria-label',playing?'បិទតន្ត្រី':'បើកតន្ត្រី');soundToggle.setAttribute('aria-pressed',String(playing));}
function startMusic(){music.play().then(updateSound).catch(updateSound);}
music.addEventListener('play',updateSound);music.addEventListener('pause',updateSound);
soundToggle.onclick=()=>{if(music.paused)startMusic();else music.pause();};
document.querySelector('#open').addEventListener('click',()=>{soundToggle.hidden=false;startMusic();});
document.querySelector('#close').addEventListener('click',()=>{music.pause();soundToggle.hidden=true;});
let opening=false,openingTimer=null;
const loading=document.createElement('div');
loading.hidden=true;loading.style.cssText='position:fixed;inset:0;z-index:1000;background:rgba(9,33,54,.62);display:none;align-items:center;justify-content:center;flex-direction:column;gap:18px;color:#fff;font-family:Siemreap,serif;text-align:center;padding:24px;';
const loadingText=document.createElement('p');loadingText.textContent='កំពុងផ្ទុកវីដេអូ…';
const skipVideo=document.createElement('button');skipVideo.type='button';skipVideo.textContent='ចូលមើលលិខិតអញ្ជើញ';skipVideo.style.cssText='padding:12px 20px;border:1px solid #dfc16a;border-radius:12px;background:#fff5d5;color:#17334c;font:inherit;cursor:pointer;';
loading.append(loadingText,skipVideo);document.body.append(loading);
function setLoading(show){loading.hidden=!show;loading.style.display=show?'flex':'none';}
function finishOpening(){
 if(!opening)return;
 opening=false;clearTimeout(openingTimer);setLoading(false);background.pause();
 thirdVideo.style.opacity='1';invitation.hidden=false;cover.hidden=true;
 thirdVideo.play().catch(()=>{});
 window.scrollTo(0,0);showSwipeReminder();
}
skipVideo.onclick=finishOpening;
document.querySelector('#open').onclick=()=>{
 opening=true;clearTimeout(openingTimer);thirdVideo.style.opacity='0';thirdVideo.pause();thirdVideo.currentTime=0;
 cover.hidden=true;invitation.hidden=true;setLoading(true);background.loop=false;background.src=videos[1];
 openingTimer=setTimeout(finishOpening,15000);
 background.play().catch(finishOpening);window.scrollTo(0,0);
};
background.onplaying=()=>{if(opening)setLoading(false);};
background.onwaiting=()=>{if(opening)setLoading(true);};
background.onended=finishOpening;
background.onerror=()=>{if(opening)finishOpening();};
document.querySelector('#close').onclick=()=>{
 opening=false;clearTimeout(openingTimer);setLoading(false);thirdVideo.pause();thirdVideo.style.opacity='0';
 invitation.hidden=true;cover.hidden=false;background.src=videos[0];background.loop=true;background.play().catch(()=>{});window.scrollTo(0,0);
};
const lightbox=document.querySelector('#lightbox');document.querySelectorAll('.gallery button').forEach(button=>button.onclick=()=>{lightbox.querySelector('img').src=button.querySelector('img').src;lightbox.showModal()});document.querySelector('#dismiss').onclick=()=>lightbox.close();
// Shared wishes are handled by greetings.js.
// Event time is fixed to Cambodia's UTC+07:00 timezone.
const eventStart=new Date('2026-11-18T11:00:00+07:00').getTime();
const khmerDigits='០១២៣៤៥៦៧៨៩';
function countdownNumber(value,pad=true){return String(value).padStart(pad?2:1,'0').replace(/\d/g,digit=>khmerDigits[Number(digit)]);}
function updateCountdown(){
 const remaining=Math.max(0,Math.floor((eventStart-Date.now())/1000));
 const values={days:Math.floor(remaining/86400),hours:Math.floor(remaining/3600)%24,minutes:Math.floor(remaining/60)%60,seconds:remaining%60};
 for(const [unit,value] of Object.entries(values))document.querySelector('#countdown-'+unit).textContent=countdownNumber(value,unit!=='days');
 document.querySelector('.countdown-units').hidden=remaining===0;
 document.querySelector('#countdown-ended').hidden=remaining!==0;
 if(remaining===0&&countdownInterval!==null){clearInterval(countdownInterval);countdownInterval=null;}
}
let countdownInterval=null;
updateCountdown();
if(Date.now()<eventStart)countdownInterval=setInterval(updateCountdown,1000);

const swipeReminder=document.querySelector('#swipe-reminder');
let swipeReminderTimer=null,swipeReminderActive=false;
function hideSwipeReminder(){clearTimeout(swipeReminderTimer);swipeReminderTimer=null;swipeReminderActive=false;swipeReminder.hidden=true;}
function showSwipeReminder(){
 hideSwipeReminder();swipeReminderActive=true;
 swipeReminderTimer=setTimeout(()=>{if(swipeReminderActive&&!invitation.hidden&&window.scrollY<10)swipeReminder.hidden=false;},5000);
}
window.addEventListener('scroll',()=>{if(swipeReminderActive&&window.scrollY>0)hideSwipeReminder();},{passive:true});
document.querySelector('#close').addEventListener('click',hideSwipeReminder);



