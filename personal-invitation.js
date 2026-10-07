(() => {
  const params = new URLSearchParams(location.search);
  const guestCode = params.get('g');
  const cover = document.querySelector('#personal-cover-name');
  const open = document.querySelector('#open');
  function applyGuest(name, title) {
    if (!name) return;
    const displayName = [title, name].filter(Boolean).join(' ');
    cover.textContent = displayName;
    const guest = document.querySelector('#personal-guest-name');
    guest.textContent = displayName; guest.hidden = false;
    document.querySelector('.honorifics').hidden = true;
    document.querySelector('#name').value = name;
  }
  if (!guestCode) {
    applyGuest((params.get('name') || '').trim().slice(0,200), (params.get('title') || '').trim().slice(0,60));
    return;
  }
  const status = document.createElement('p'); status.setAttribute('role','status');
  cover.after(status);
  async function load() {
    open.disabled = true;
    cover.textContent = 'កំពុងផ្ទុកលិខិតអញ្ជើញ…'; status.replaceChildren();
    try {
      if (!/^[A-Za-z0-9_-]{12}$/.test(guestCode)) { const error=new Error();error.status=404;throw error; }
      const guest = await window.InvitationLinks.request('?g='+encodeURIComponent(guestCode));
      if (typeof guest.name !== 'string' || !guest.name.trim()) throw new Error('Invalid guest');
      applyGuest(guest.name.slice(0,200),(guest.title||'').slice(0,60));
      status.remove(); open.disabled = false;
    } catch (error) {
      cover.textContent = 'មិនអាចបើកលិខិតអញ្ជើញបាន';
      if(error.status===404 || error.status===400) {status.textContent='តំណនេះមិនត្រឹមត្រូវ។ សូមស្នើតំណថ្មីពីអ្នកអញ្ជើញ។';return;}
      status.textContent = 'សូមពិនិត្យអ៊ីនធឺណិត ហើយសាកល្បងម្ដងទៀត។ ';
      const retry = document.createElement('button');retry.type='button';retry.textContent='សាកល្បងម្ដងទៀត';retry.onclick=load;status.append(retry);
    }
  }
  load();
})();
