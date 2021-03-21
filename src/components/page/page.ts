import { BaseComponent, Component } from "./../component.js";

export interface Composable {
  addchild(child: Component): void;
}

type OncloseListener = () => void;

class PageItemComponent
  extends BaseComponent<HTMLElement>
  implements Composable {
  private closeListener?: OncloseListener;
  constructor() {
    super(`<li class="page-item">
      <section class="page-item__body"></section>
      <div class="page-item_controls">
      <button class="close">&times;</button>
      </div>
      </li>`);
    const closeBtn = this.element.querySelector(".close")! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
  }

  addchild(child: Component) {
    const container = this.element.querySelector(
      ".page-item__body"
    )! as HTMLElement;
    child.attachTo(container);
  }

  setOnCloseListener(listener: OncloseListener): void {
    this.closeListener = listener;
  }
}

export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable {
  constructor() {
    super('<ul class="page"></ul>');
  }

  addchild(section: Component) {
    const item = new PageItemComponent();
    item.addchild(section);
    item.attachTo(this.element, "beforeend");
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}
