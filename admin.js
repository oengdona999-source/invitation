(() => {
  const base = document.querySelector('#base');
  base.value = new URL('index.html', location.href).href;
  let rows = [];
  const status = document.querySelector('#status');
  async function copy(text, input) {
    try { await navigator.clipboard.writeText(text); status.textContent = 'Copied.'; }
    catch { if(input){input.focus();input.select();} status.textContent = 'Copy is unavailable. Select the link and copy it manually.'; }
  }
  document.querySelector('#generator').addEventListener('submit', event => {
    event.preventDefault();
    let url;
    try { url = new URL(base.value.trim()); if(!['https:', 'http:', 'file:'].includes(url.protocol)) throw new Error(); }
    catch { status.textContent = 'Enter a valid invitation website URL.'; return; }
    const names = [...new Set(document.querySelector('#guests').value.split(/\r?\n/).map(name => name.trim()).filter(Boolean))];
    if(!names.length || names.some(name => name.length > 200)){status.textContent = 'Enter guest names of 1–200 characters, one per line.';return;}
    const title = document.querySelector('#title').value.trim();
    rows = names.map(name => {
      const link = new URL(url.href); if (link.protocol !== 'file:') link.pathname = link.pathname.replace(/\/index\.html$/, '/'); link.searchParams.set('name', name);
      if(title) link.searchParams.set('title', title); else link.searchParams.delete('title');
      return {name, title, link:link.href};
    });
    const list = document.querySelector('#links'); list.replaceChildren();
    rows.forEach(row => {
      const card = document.createElement('div'); card.className = 'guest-row';
      const heading = document.createElement('strong'); heading.textContent = [row.title,row.name].filter(Boolean).join(' ');
      const input = document.createElement('input'); input.readOnly = true; input.value = row.link; input.setAttribute('aria-label','Invitation link for '+row.name);
      const button = document.createElement('button'); button.type='button';button.textContent='Copy link';button.onclick=()=>copy(row.link,input);
      const preview = document.createElement('a');preview.href=row.link;preview.target='_blank';preview.rel='noopener';preview.textContent='Preview invitation';
      card.append(heading,input,button,preview);list.append(card);
    });
    document.querySelector('#results').hidden = false;
    status.textContent = rows.length+' guest links generated.'+(url.protocol==='file:'?' These local links only work on this laptop. Use a published website URL before sharing.':'');
  });
  document.querySelector('#copy-all').onclick = () => copy(rows.map(row=>row.name+'\t'+row.link).join('\n'));
  document.querySelector('#download').onclick = () => {
    const cell = value => '"'+value.replace(/"/g,'""').replace(/^[=+@-]/,"'$&")+'"';
    const csv = '\uFEFF'+[['Name','Title','Link'],...rows.map(row=>[row.name,row.title,row.link])].map(row=>row.map(cell).join(',')).join('\r\n');
    const href=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));
    const anchor=document.createElement('a');anchor.href=href;anchor.download='personal-invitations.csv';anchor.click();setTimeout(()=>URL.revokeObjectURL(href),1000);
  };
})();

