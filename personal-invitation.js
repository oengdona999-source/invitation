/* Guest text is inserted safely without changing the invitation's media or handlers. */
(() => {
  const params = new URLSearchParams(location.search);
  const name = (params.get('name') || '').trim().slice(0, 200);
  const title = (params.get('title') || '').trim().slice(0, 60);
  if (!name) return;
  const displayName = [title, name].filter(Boolean).join(' ');
  document.querySelector('#personal-cover-name').textContent = displayName;
  const guest = document.querySelector('#personal-guest-name');
  guest.textContent = displayName;
  guest.hidden = false;
  document.querySelector('.honorifics').hidden = true;
  document.querySelector('#name').value = name;
})();
