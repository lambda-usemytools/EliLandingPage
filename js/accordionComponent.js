// a comment

class Accordion
{
    constructor(leaves)
    {
        this.leaves = leaves;
        this.accLeaves = this.leaves.map(leaf => new AccordionLeaf(leaf, this));
    }
}

class AccordionLeaf
{
    constructor(leaf, leaves)
    {
        this.leaf = leaf;
        this.leaves = leaves;
        this.leafIsOpen = false;
        leaf.addEventListener("click", _ =>
        {
            if(this.leafIsOpen) { this.closeLeaf(this.leaf); }
            else if(!this.leafIsOpen) { this.openLeaf(this.leaf); }
        })
    }
    openLeaf(leaf)
    {
        this.leaves.accLeaves.forEach(leaf => leaf.closeLeaf());
        this.leafIsOpen = true;
        this.leaf.style.height = "auto";
        this.leaf.querySelector(".accordion-closed-display").classList.add("acc-hide");
        this.leaf.querySelector(".accordion-open-display").classList.remove("acc-hide")

        // function swapOpen(elem)
        // {
        //     this.leaf.querySelector(".accordion-closed-display").classList.add("acc-hide");
        //     this.leaf.querySelector(".accordion-open-display").classList.remove("acc-hide");
        // }

        let opentl = new TimelineMax
    }
    closeLeaf(leaf)
    {
        this.leaf.querySelector(".accordion-closed-display").classList.remove("acc-hide");
        this.leaf.querySelector(".accordion-open-display").classList.add("acc-hide");
        // this.leaf.style.height = "3.9rem";
        this.leafIsOpen = false;
        
    }
}

let leaves = Array.from(document.querySelectorAll(".team-member"));

let teamAccordion;
if(leaves) teamAccordion = new Accordion(leaves);
teamAccordion.accLeaves.forEach(accLeaf => accLeaf.closeLeaf());
