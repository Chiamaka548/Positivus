//Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function()  {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    }
    );
});

//Close mobile menu when a nav link is clicked
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
    });
});

//Close mobile menu when clicking outside of it
document.addEventListener('click', (event) => {
    const isClickInsideNav = navList.contains(event.target);
    const isClickInsideHamburger = hamburger.contains(event.target);
    if ( !isClickInsideNav && !isClickInsideHamburger && navList.classList.contains('active')) {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
    }
});

//Accordion Functionality for Working Process Section
function toggleProcess(element) {
    const processItem = element.parentElement;
    const isOpen = processItem.classList.contains('open');

    //Close all other open items
    document.querySelectorAll('.process-item.open').forEach(item => {
        item.classList.remove('open');
        item.querySelector('.process-content').style.maxHeight = '0';
        item.querySelector('.plus-icon').style.display = 'block';
        item.querySelector('.minus-icon').style.display = 'none';
    });

    //Toggle the clicked item
    if (!isOpen) {
        processItem.classList.add('open');
        const content = processItem.querySelector('.process-content');
        content.style.maxHeight = content.scrollHeight + 'px';
        const plusIcon = processItem.querySelector('.plus-icon').style.display = 'none';
        const minusIcon = processItem.querySelector('.minus-icon').style.display = 'block';
    }
}

//Initilize the first process item as open (as per HTML)
document.addEventListener('DOMContentLoaded', function() {
    const firstProcessItem = document.querySelector('.process-item.open');
    if (firstProcessItem) {
        const firstContent = firstProcessItem.querySelector('.process-content');
        firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
    }
});