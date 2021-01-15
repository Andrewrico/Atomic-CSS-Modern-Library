const openTab = (open, attr) => {
    const tabContent = document.querySelectorAll(".tabContent")
    const tabItems = document.querySelectorAll(".tabItems")
    const tabOpen = document.querySelector("#tabOpen")
    const tabAttr = document.getElementById(attr)
    tabContent.forEach(function(content){
        content.style.display = "none"
    })
    tabItems.forEach(function(items){
        items.className = items.className.replace(" tab_active", "")

    })
    tabAttr.style.display = "block"
    open.currentTarget.className += " tab_active"
    open.currentTarget.setAttribute("aria-selected", true)
};
tabOpen.click();