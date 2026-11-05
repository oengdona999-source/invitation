(()=>{
 const endpoint='https://glonefyaroxufjqwuesw.supabase.co/functions/v1/invitation-register';
 const form=document.querySelector('#registration'),status=document.querySelector('#status'),button=document.querySelector('#submit'),success=document.querySelector('#success');
 let id=crypto.randomUUID();
 try{const old=localStorage.getItem('registration-20261118');if(old){const v=JSON.parse(old);if(/^[0-9a-f-]{36}$/i.test(v.id))id=v.id;form.elements.name.value=v.name||'';form.elements.phone.value=v.phone||'';if(['yes','no'].includes(v.answer))form.elements.attending.value=v.answer;}}catch{}
 form.addEventListener('submit',async e=>{
  e.preventDefault();if(button.disabled)return;
  const kh='០១២៣៤៥៦៧៨៩';let phone=form.elements.phone.value.replace(/[០-៩]/g,x=>String(kh.indexOf(x))).replace(/[\s()+.-]/g,'');if(phone.startsWith('855'))phone='0'+phone.slice(3);
  if(!/^0[0-9]{7,10}$/.test(phone)){status.textContent='សូមបញ្ចូលលេខទូរសព្ទត្រឹមត្រូវ ដោយចាប់ផ្ដើមពីលេខ 0។';form.elements.phone.focus();return;}
  const name=form.elements.name.value.trim(),answer=form.elements.attending.value;
  button.disabled=true;status.textContent='កំពុងរក្សាទុក…';
  try{
   const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},signal:AbortSignal.timeout(25000),body:JSON.stringify({id,name,phone,attending:answer==='yes',website:document.querySelector('#website').value})});
   const result=await response.json();if(!response.ok||!result.saved)throw Error();
   try{localStorage.setItem('registration-20261118',JSON.stringify({id,name,phone,answer}));}catch{}
   document.querySelector('#confirmation').textContent=name+' — '+(answer==='yes'?'ចូលរួម':'មិនអាចចូលរួម');form.hidden=true;success.hidden=false;success.focus();status.textContent='';
  }catch{status.textContent='មិនទាន់រក្សាទុកបានទេ។ សូមពិនិត្យអ៊ីនធឺណិត ហើយចុចបញ្ជូនម្ដងទៀត។';}finally{button.disabled=false;}
 });
 document.querySelector('#edit').onclick=()=>{success.hidden=true;form.hidden=false;form.elements.name.focus();};
 document.querySelector('#another').onclick=()=>{id=crypto.randomUUID();try{localStorage.removeItem('registration-20261118');}catch{}form.reset();success.hidden=true;form.hidden=false;form.elements.name.focus();};
})();
