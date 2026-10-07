/* Public endpoint only. The private admin access key must never be saved in this file. */
window.InvitationLinks = {
  endpoint: 'https://glonefyaroxufjqwuesw.supabase.co/functions/v1/invitation-links',
  async request(path = '', options = {}) {
    const response = await fetch(this.endpoint + path, { ...options, signal: AbortSignal.timeout(20000) });
    let body; try { body = await response.json(); } catch { throw new Error('SERVICE_UNAVAILABLE'); }
    if (!response.ok) { const error = new Error(body.error || 'SERVICE_UNAVAILABLE'); error.status = response.status; throw error; }
    return body;
  }
};
