import { BaseComponent } from "../component.js";
export class InputDialog extends BaseComponent {
    constructor() {
        super(`<dialog class="dialog">
    <div class="dialog__container">
      <button class="close">&times;</button>
      <div id="dialog__body"></div>
      <button class="dialog__submit">ADD</button>
    </div>
  </dialog>`);
        const closeBtn = this.element.querySelector(".close");
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        };
        const submitBtn = this.element.querySelector(".dialog__submit");
        submitBtn.onclick = () => {
            this.submitListner && this.submitListner();
        };
    }
    setOnCloseListener(listener) {
        this.closeListener = listener;
    }
    setOnSubmitListener(listener) {
        this.submitListner = listener;
    }
    addchild(child) {
        const body = this.element.querySelector("#dialog__body");
        child.attachTo(body);
    }
}
