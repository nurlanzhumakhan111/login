const tabButtons = document.querySelectorAll('.tab-btn');
const tabItems = document.querySelectorAll('.form-card');
export function showTabs() {
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(item => {
                item.classList.remove('active');
            })
            tabItems.forEach(item => {
                item.classList.remove('active');
            })
            let activeTab;
            tabItems.forEach(tab => {
                if(tab.id === button.id){
                    activeTab = tab;
                }
            })
            activeTab.classList.add('active')
            button.classList.add('active');
        })
    })
}