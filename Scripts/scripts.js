const sampleMembers = [
  {membershipNumber:'MS-0001', fullName:'Dr. A. Example', email:'a@example.com', dateOfBirth:'1990-07-10', anniversary:'2015-04-20'},
  {membershipNumber:'MS-0002', fullName:'Mrs. B. Sample', email:'b@example.com', dateOfBirth:'1986-12-01', anniversary:''},
  {membershipNumber:'MS-0003', fullName:'Mr. C. Demo', email:'c@example.com', dateOfBirth:'1978-01-15', anniversary:'2005-05-01'}
];

function init(){
  renderMembers();
  renderUpcoming();
  renderStats();
  wireEvents();
}

function renderMembers(filter){
  const tbody=document.querySelector('#member-table tbody');
  tbody.innerHTML='';
  const list = filter ? sampleMembers.filter(m=> JSON.stringify(m).toLowerCase().includes(filter.toLowerCase())) : sampleMembers;
  list.forEach(m=>{
    const tr=document.createElement('tr');
    tr.innerHTML=`<td>${m.membershipNumber}</td><td>${m.fullName}</td><td>${m.email}</td><td><button class="btn" data-id="${m.membershipNumber}">Edit</button></td>`;
    tbody.appendChild(tr);
  })
}

function renderUpcoming(){
  const ul=document.getElementById('upcoming-list');
  ul.innerHTML='';
  // simple: next 30 days birthdays from sampleMembers
  const now=new Date();
  const upcoming=[];
  sampleMembers.forEach(m=>{
    if(!m.dateOfBirth) return;
    const dob=new Date(m.dateOfBirth);
    const next = new Date(now.getFullYear(), dob.getMonth(), dob.getDate());
    const diff = Math.ceil((next - now)/(1000*60*60*24));
    const days = diff>=0? diff : Math.ceil((new Date(now.getFullYear()+1,dob.getMonth(),dob.getDate())-now)/(1000*60*60*24));
    if(days<=30) upcoming.push({member:m,days});
  });
  if(upcoming.length===0){ ul.innerHTML='<li>No reminders in the next 30 days</li>'; return }
  upcoming.forEach(u=>{
    const li=document.createElement('li');
    li.textContent = `${u.member.fullName} — birthday in ${u.days} day(s)`;
    ul.appendChild(li);
  })
}

function renderStats(){
  document.getElementById('stat-members').textContent = sampleMembers.length;
  document.getElementById('stat-upcoming').textContent = document.getElementById('upcoming-list').children.length || 0;
  document.getElementById('stat-failed').textContent = '0%';
}

function wireEvents(){
  document.getElementById('member-search').addEventListener('input',e=>renderMembers(e.target.value));
  document.getElementById('export-csv').addEventListener('click',exportCsv);
  document.getElementById('nav-toggle').addEventListener('click',toggleNav);
  document.getElementById('profile-form').addEventListener('submit',e=>{e.preventDefault(); alert('Profile saved (placeholder)')});
  document.getElementById('reset-form').addEventListener('click',()=>document.getElementById('profile-form').reset());
}

function toggleNav(){
  const list=document.querySelector('.nav-list');
  if(list.style.display==='flex') list.style.display='none'; else list.style.display='flex';
}

function exportCsv(){
  const rows = [ ['Membership Number','Name','Email'] ];
  sampleMembers.forEach(m=>rows.push([m.membershipNumber,m.fullName,m.email]));
  const csv = rows.map(r=>r.map(cell=>`"${String(cell).replace(/"/g,'""')}"`).join(',')).join('\n');
  const blob = new Blob([csv],{type:'text/csv'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href=url; a.download='members.csv'; a.click(); URL.revokeObjectURL(url);
}

window.addEventListener('DOMContentLoaded',init);