(()=>{
 const endpoint='https://glonefyaroxufjqwuesw.supabase.co/functions/v1/invitation-register';
 const $=s=>document.querySelector(s);let token='',records=[],busy=false;
 const filtered=()=>{const term=$('#search').value.trim().toLowerCase(),mode=$('#filter').value;return records.filter(r=>(mode==='all'||r.attending===(mode==='yes'))&&(!term||(r.guest_name+' '+r.phone).toLowerCase().includes(term)));};
 function render(){
  $('#total').textContent=records.length;$('#yes-count').textContent=records.filter(r=>r.attending).length;$('#no-count').textContent=records.filter(r=>!r.attending).length;
  const list=filtered();$('#showing').textContent=list.length?'កំពុងបង្ហាញ '+list.length+' នាក់':'មិនមានការឆ្លើយតបក្នុងបញ្ជីនេះទេ។';$('#rows').replaceChildren();
  for(const r of list){const tr=document.createElement('tr');for(const value of [records.indexOf(r)+1,r.guest_name,r.phone,r.attending?'ចូលរួម':'មិនអាចចូលរួម',new Date(r.updated_at).toLocaleString('en-GB',{timeZone:'Asia/Phnom_Penh'})]){const td=document.createElement('td');td.textContent=value;tr.append(td);}tr.children[3].className=r.attending?'badge-cell':'no-cell';$('#rows').append(tr);}
 }
 async function load(){
  if(busy)return;busy=true;$('#refresh').disabled=true;$('#download').disabled=true;$('#admin-status').textContent='កំពុងផ្ទុក…';
  try{const next=[];for(let offset=0;;offset+=500){const response=await fetch(endpoint+'?offset='+offset,{headers:{'x-admin-token':token},signal:AbortSignal.timeout(25000)});if(response.status===401)throw Error('AUTH');const data=await response.json();if(!response.ok||!Array.isArray(data.records))throw Error('LOAD');next.push(...data.records);if(data.records.length<500)break;}records=next;render();$('#login').hidden=true;$('#dashboard').hidden=false;$('#logout').hidden=false;$('#login-status').textContent='';$('#admin-status').textContent='';}
  catch(e){const message=e.message==='AUTH'?'លេខសម្ងាត់មិនត្រឹមត្រូវ។':'មិនអាចផ្ទុកបញ្ជីបាន។ សូមសាកល្បងម្ដងទៀត។';$('#login-status').textContent=message;$('#admin-status').textContent=message;}
  finally{busy=false;$('#refresh').disabled=false;$('#download').disabled=false;$('#login button').disabled=false;}
 }
 $('#login').onsubmit=e=>{e.preventDefault();token=$('#key').value.trim();$('#login button').disabled=true;load();};$('#refresh').onclick=load;$('#search').oninput=render;$('#filter').onchange=render;
 $('#logout').onclick=()=>location.reload();
 $('#download').onclick=()=>{
  const cell=x=>'"'+String(x).replace(/^[=+@-]/,"'$&").replace(/"/g,'""')+'"';
  const rows=[['ល.រ.','ឈ្មោះ','លេខទូរសព្ទ','ការឆ្លើយតប','ថ្ងៃកម្មវិធី','កែចុងក្រោយ'],...filtered().map(r=>[records.indexOf(r)+1,r.guest_name,'\t'+r.phone,r.attending?'ចូលរួម':'មិនអាចចូលរួម',r.event_date,r.updated_at])];
  // A tab-prefixed phone keeps its leading zero when opened in Excel without creating a formula.
  const href=URL.createObjectURL(new Blob(['\uFEFF'+rows.map(r=>r.map(cell).join(',')).join('\r\n')],{type:'text/csv;charset=utf-8'}));const a=document.createElement('a');a.href=href;a.download='event-registration-20261118.csv';a.click();setTimeout(()=>URL.revokeObjectURL(href),1000);
 };
})();
