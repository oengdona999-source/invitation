/* Shared public wishes. Existing browser-only wishes are never uploaded automatically. */
(() => {
  const form=document.querySelector('#greeting');
  const list=document.querySelector('#messages');
  const status=document.querySelector('#status');
  const nameField=document.querySelector('#name'),messageField=document.querySelector('#message');
  const submit=form.querySelector('button');
  let signature=null,fetching=null,pending=null,selectedId=null;
  function render(messages) {
    const next=JSON.stringify(messages);if(next===signature)return;signature=next;
    list.replaceChildren();
    if(!messages.length){const note=document.createElement('p');note.textContent='មិនទាន់មានសារជូនពរ។ អ្នកអាចផ្ញើសារដំបូងបាន។';list.append(note);return;}
    messages.forEach(message=>{
      const card=document.createElement('div');card.className='message';
      card.tabIndex=0;card.setAttribute('role','button');card.dataset.greetingId=message.id;
      card.setAttribute('aria-label','សារជូនពររបស់ '+message.name);
      card.setAttribute('aria-pressed',String(selectedId===message.id));
      if(selectedId===message.id)card.classList.add('is-selected');
      function select(){
        selectedId=selectedId===message.id?null:message.id;
        list.querySelectorAll('.message').forEach(item=>{
          const selected=item.dataset.greetingId===selectedId;
          item.classList.toggle('is-selected',selected);item.setAttribute('aria-pressed',String(selected));
        });
      }
      card.addEventListener('click',select);
      card.addEventListener('keydown',event=>{if((event.key==='Enter'||event.key===' ')&&!event.repeat){event.preventDefault();select();}});
      const name=document.createElement('strong');name.textContent=message.name;
      const text=document.createElement('p');text.textContent=message.message;
      card.append(name,text);list.append(card);
    });
  }
  function refresh() {
    if(fetching)return fetching;
    fetching=(async()=>{
      try {
        const body=await window.InvitationLinks.request('?action=greetings');
        if(!Array.isArray(body.messages))throw new Error('Invalid response');
        render(body.messages);
      }catch{
        if(signature===null)list.textContent='មិនអាចផ្ទុកសារជូនពរបាន។ សូមពិនិត្យអ៊ីនធឺណិត។ ប្រព័ន្ធនឹងសាកល្បងម្ដងទៀត។';
      }finally{fetching=null;}
    })();
    return fetching;
  }
  form.onsubmit=async event=>{
    event.preventDefault();if(submit.disabled)return;
    const name=nameField.value.trim(),message=messageField.value.trim();
    if(!name||name.length>200||!message||message.length>2000){status.textContent='សូមបំពេញឈ្មោះ និងសារជូនពរឱ្យត្រឹមត្រូវ។';return;}
    if(!pending||pending.name!==name||pending.message!==message)pending={id:crypto.randomUUID(),name,message};
    submit.disabled=true;nameField.disabled=true;messageField.disabled=true;
    status.textContent='កំពុងផ្ញើសារជូនពរ…';
    try{
      await window.InvitationLinks.request('?action=greetings',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(pending)});
      messageField.value='';pending=null;
      status.textContent='បានផ្ញើសារជូនពរហើយ។ អ្នកផ្សេងអាចមើលឃើញបាន។';
      if(fetching)await fetching;
      await refresh();
    }catch{status.textContent='មិនអាចបញ្ជាក់ការផ្ញើសារបាន។ សាររបស់អ្នកនៅតែមានក្នុងប្រអប់។ សូមសាកល្បងផ្ញើម្ដងទៀត។';}
    finally{submit.disabled=false;nameField.disabled=false;messageField.disabled=false;}
  };
  refresh();
  setInterval(()=>{if(!document.hidden)refresh();},10000);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh();});
})();

