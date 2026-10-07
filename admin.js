(() => {
  const base = document.querySelector('#base');
  base.value = new URL('./', location.href).href;
  let rows = [];
  const status = document.querySelector('#status');
  async function copy(text, input) {
    try { await navigator.clipboard.writeText(text); status.textContent = 'បានចម្លងតំណហើយ / Copied.'; }
    catch { if(input){input.focus();input.select();} status.textContent = 'សូមជ្រើសតំណ ហើយចម្លងដោយខ្លួនឯង / Select and copy the link manually.'; }
  }
  document.querySelector('#generator').addEventListener('submit', async event => {
    event.preventDefault();
    let url;
    try { url = new URL(base.value.trim()); if(url.protocol!=='https:') throw new Error(); }
    catch { status.textContent = 'សូមបញ្ចូលតំណគេហទំព័រ HTTPS ដែលបានបង្ហោះ។'; return; }
    const names = [...new Set(document.querySelector('#guests').value.split(/\r?\n/).map(name => name.trim()).filter(Boolean))];
    if(!names.length || names.length>100 || names.some(name => name.length > 200)){status.textContent = 'សូមបញ្ចូលឈ្មោះពី ១ ដល់ ១០០ នាក់ មួយឈ្មោះក្នុងមួយបន្ទាត់ (អតិបរមា ២០០ តួអក្សរ)។';return;}
    const title = document.querySelector('#title').value.trim();
    const access = document.querySelector('#admin-key').value.trim();
    if(!access){status.textContent='សូមបញ្ចូលលេខសម្ងាត់របស់អ្នក។';return;}
    const submit=document.querySelector('#generate');submit.disabled=true;
    status.textContent='កំពុងរក្សាឈ្មោះ និងបង្កើតតំណខ្លី…';
    try {
      const response = await window.InvitationLinks.request('', {method:'POST',headers:{'Content-Type':'application/json','x-admin-token':access},body:JSON.stringify({guests:names.map(name=>({name,title}))})});
      if(!Array.isArray(response.guests)||response.guests.length!==names.length)throw new Error('Invalid response');
      rows=response.guests.map(guest=>{
        if(!/^[A-Za-z0-9_-]{12}$/.test(guest.code))throw new Error('Invalid code');
        const link=new URL(url.href);link.pathname=link.pathname.replace(/\/index\.html$/, '/');
        link.search='';link.hash='';link.searchParams.set('g',guest.code);
        return {name:guest.name,title:guest.title,link:link.href};
      });
      const list = document.querySelector('#links'); list.replaceChildren();
      rows.forEach(row => {
        const card = document.createElement('div'); card.className = 'guest-row';
        const heading = document.createElement('strong'); heading.textContent = [row.title,row.name].filter(Boolean).join(' ');
        const input = document.createElement('input'); input.readOnly = true; input.value = row.link; input.setAttribute('aria-label','Invitation link for '+row.name);
        const button = document.createElement('button'); button.type='button';button.textContent='ចម្លងតំណ / Copy link';button.onclick=()=>copy(row.link,input);
        const preview = document.createElement('a');preview.href=row.link;preview.target='_blank';preview.rel='noopener';preview.textContent='មើលលិខិត / Preview';
        card.append(heading,input,button,preview);list.append(card);
      });
      document.querySelector('#results').hidden = false;
      status.textContent = 'បានបង្កើតតំណខ្លី '+rows.length+' តំណ។ អ្នកអាចចម្លងផ្ញើទៅភ្ញៀវបាន។';
    } catch(error) {
      status.textContent = error.status===401 ? 'លេខសម្ងាត់មិនត្រឹមត្រូវ។ សូមបញ្ចូលម្ដងទៀត។' : 'មិនអាចបង្កើតតំណបាន។ សូមពិនិត្យអ៊ីនធឺណិត ហើយសាកល្បងម្ដងទៀត។';
    } finally {submit.disabled=false;}
  });
  document.querySelector('#copy-all').onclick = () => copy(rows.map(row=>row.name+'\t'+row.link).join('\n'));
  document.querySelector('#download').onclick = () => {
    const cell = value => '"'+value.replace(/"/g,'""').replace(/^[=+@-]/,"'$&")+'"';
    const csv = '\uFEFF'+[['Name','Title','Link'],...rows.map(row=>[row.name,row.title,row.link])].map(row=>row.map(cell).join(',')).join('\r\n');
    const href=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));
    const anchor=document.createElement('a');anchor.href=href;anchor.download='personal-invitations.csv';anchor.click();setTimeout(()=>URL.revokeObjectURL(href),1000);
  };
})();
