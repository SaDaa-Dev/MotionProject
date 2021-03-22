import { BaseComponent, Component } from "../component.js";
import { Composable } from "../page/page.js";

type OnCloseListener = () => void;
type OnSubmitListener = () => void;
export class InputDialog
  extends BaseComponent<HTMLElement>
  implements Composable {
  closeListener?: OnCloseListener;
  submitListner?: OnSubmitListener;

  constructor() {
    super(`<section class="dialog">
    <button class="close">&times;</button>
    <div id="dialog__body"></div>
    <button class="dialog__submit">ADD</button>
  </section>`);

    const closeBtn = this.element.querySelector(".close")! as HTMLElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
    const submitBtn = this.element.querySelector(
      ".dialog__submit"
    )! as HTMLElement;
    submitBtn.onclick = () => {
      this.submitListner && this.submitListner();
    };
  }
  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
  setOnSubmitListener(listener: OnSubmitListener) {
    this.submitListner = listener;
  }

  addchild(child: Component) {
    const body = this.element.querySelector("#dialog__body")! as HTMLElement;
    child.attachTo(body);
  }
}
