const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');


menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

StatusAccount.forEach(status => {
    const tr = document.createElement('tr');
    tr.classList.add('log-book'); 

    const trContent = `
        <td>${status.activityName}</td>
        <td>${status.ticketNumber}</td>
        <td class="${getStatusClass(status.status)}">${status.status}</td>
    `;
    
    tr.innerHTML = trContent;
    document.querySelector('table tbody.logcontent').appendChild(tr);
});

function getStatusClass(status) {
    switch (status) {
        case 'Declined':
            return 'danger';
        case 'Pending':
            return 'warning';
        case 'Completed':
            return 'success'; 
        default:
            return 'primary';
    }
}


