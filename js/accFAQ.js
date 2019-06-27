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
            
            if(this.leafIsOpen) { this.closeLeaf(); }
            else if(!this.leafIsOpen) { this.openLeaf(); }
            
        })
    }
    openLeaf()
    {
        
        this.leafIsOpen = true;
        let curHeight = this.leaf.offsetHeight;
        
        TweenMax.set(this.leaf, {height:"auto"});
        TweenMax.from(this.leaf, .5, {height: curHeight});
        

    }
    closeLeaf()
    {
        this.leafIsOpen = false;
        
        //anim
        let curHeight = this.leaf.offsetHeight;
        
        TweenMax.set(this.leaf, {height:"4rem"});
        TweenMax.from(this.leaf, .5, {height: curHeight});
        
    }
}

let leaves = Array.from(document.querySelectorAll(".faq-question"));

let faqAccordion;

if(leaves) 
{
    faqAccordion = new Accordion(leaves);
    faqAccordion.accLeaves.forEach(accLeaf => 
    {   
        if(accLeaf.leafIsOpen) accLeaf.closeLeaf();
    });
}