import Droppy from 'droppy-menu'
export function setupNavigation() {
    const droppy = new Droppy(document.querySelector('.dropdown-menu'), {
        parentSelector: 'li',
        dropdownSelector: 'li > ul',
        triggerSelector: 'a',
        closeOthers: true,
        clickOutToClose: true,
        clickEscToClose: true,
        preventDefault: true
    })
}
