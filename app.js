const cdn='https://cmssambot.b-cdn.net/05/2026/video/';
const videos=['assets/videos/01-cover.mp4?v=v3-compressed-20261007','assets/videos/02-opening-new.mp4?v=v3-compressed-20261007','assets/videos/03-background.mp4?v=v3-compressed-20261007'];
const background=document.querySelector('#background');background.src=videos[0];
const thirdVideo=document.createElement('video');
thirdVideo.src=videos[2];thirdVideo.muted=true;thirdVideo.loop=true;thirdVideo.playsInline=true;thirdVideo.preload='auto';
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
let opening=false;
document.querySelector('#open').onclick=()=>{opening=true;thirdVideo.style.opacity='0';thirdVideo.pause();thirdVideo.currentTime=0;cover.hidden=true;invitation.hidden=true;background.loop=false;background.src=videos[1];background.play().catch(()=>{opening=false;cover.hidden=false;background.src=videos[0];background.loop=true;});window.scrollTo(0,0)};
background.onended=()=>{
 if(!opening)return;
 const showInvitation=()=>{if(!opening)return;opening=false;thirdVideo.style.opacity='1';invitation.hidden=false;window.scrollTo(0,0);showSwipeReminder()};
 thirdVideo.play().then(()=>{
  if('requestVideoFrameCallback' in thirdVideo)thirdVideo.requestVideoFrameCallback(showInvitation);
  else showInvitation();
 }).catch(()=>{if(!opening)return;opening=false;cover.hidden=false;background.src=videos[0];background.loop=true;});
};
background.onerror=()=>{if(!opening)return;opening=false;cover.hidden=false;invitation.hidden=true;background.src=videos[0];background.loop=true;};
document.querySelector('#close').onclick=()=>{opening=false;thirdVideo.pause();thirdVideo.style.opacity='0';invitation.hidden=true;cover.hidden=false;background.src=videos[0];background.loop=true;background.play().catch(()=>{});window.scrollTo(0,0)};
const lightbox=document.querySelector('#lightbox');document.querySelectorAll('.gallery button').forEach(button=>button.onclick=()=>{lightbox.querySelector('img').src=button.querySelector('img').src;lightbox.showModal()});document.querySelector('#dismiss').onclick=()=>lightbox.close();
// Shared wishes are handled by greetings.js.
// Event time is fixed to Cambodia's UTC+07:00 timezone.
const eventStart=new Date('2026-11-14T11:00:00+07:00').getTime();
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


