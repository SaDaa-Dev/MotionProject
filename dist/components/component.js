export class BaseComponent {
    constructor(htmlString) {
        const template = document.createElement("template");
        template.innerHTML = htmlString;
        this.element = template.content.firstChild;
    }
    attachTo(parent, position = "afterbegin") {
        parent.insertAdjacentElement(position, this.element);
    }
    removeFrom(parent) {
        if (parent !== this.element.parentElement) {
            throw new Error("Parent missmatch!");
        }
        parent.removeChild(this.element);
    }
}
