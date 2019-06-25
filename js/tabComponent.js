class Tabs
{
    constructor(section)
    {
        this.tabs = section;
        this.links = section.querySelectorAll(".tabs-link");
        this.tabLinks = Array.from(this.links).map(link => new TabLink(link, this));
        this.selected = this.tabLinks[0];
    }
    select(newTabLink)
    {
        this.selected.deselect();
        newTabLink.select();
        this.selected = newTabLink;
    }
}

class TabLink
{
    constructor(element, tabs)
    {
        this.element = element;
        this.tabs = tabs;
        this.data = this.element.dataset.tab;
        this.itemElement = this.tabs.tabs.querySelector(`.tabs-item[data-tab="${this.data}"]`);  
        this.tabItem = new TabItem(this.itemElement);
    
        this.element.addEventListener("click", () => this.tabs.select(this));
    }
    select()
    {
        this.element.classList.add("tabs-link-selected");
        this.tabItem.select();
    }
    deselect()
    {
        this.element.classList.remove("tabs-link-selected");
        this.tabItem.deselect();
    }
}

class TabItem 
{
    constructor(element) 
    {
        this.element = element
    }

    select() 
    {
        this.element.classList.add("tabs-item-selected");
    }

    deselect()
    {
        this.element.classList.remove("tabs-item-selected");
    }
}

let hiwTabs = document.querySelector(".how-it-works-section");

new Tabs(hiwTabs);