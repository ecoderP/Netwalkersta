let menuBtn = document.querySelectorAll("button");

// Side Menu Toggles
    /* Loop through elements, add events listeners 
    and toggle svg and bottom border change on click */
menuClicked();

// Toggle User Profile Dropdown
toggleProfileDropdown();

// Toggle Inventory Dropdown
toggleInventoryDropdown();



function menuClicked() {
    menuBtn.forEach(btn => {
        btn.addEventListener('click', ()=> {
           // const btnItem = e.target;
           console.log(1);
        
            const menuText = btn.querySelectorAll('.menu-list-item');
            const arrowVector = btn.querySelectorAll('.arrow');
            const menuSvg = btn.querySelectorAll('.menu-list-svg');
            menuText.forEach(item => {
                item.classList.toggle('bottom-border');
            });
            arrowVector.forEach(item2 => {
                item2.classList.toggle('rotate');
            });
            menuSvg.forEach(svg => {
                svg.classList.toggle('svg-fill')
            })
        });
    })
}


/*-- Show Profile Dropdown Menu**/
function toggleProfileDropdown() {
    const userName = document.getElementById('user-profile');
    const userProfileDropdown = document.querySelector('.profile-dropdown');
    userName.addEventListener('click', () => {
        userProfileDropdown.classList.toggle('show-dropdown');
    })
}


//-- Show Inventory Dropdown Menu

function toggleInventoryDropdown()  {
    const inventory = document.getElementById('inventory');
    const inventoryDropdown  = document.querySelector('.inventory-dropdown');
    inventory.addEventListener('click', () => {
        inventoryDropdown.classList.toggle('show')

    });
}