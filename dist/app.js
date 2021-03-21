import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot, "afterbegin");
        const image = new ImageComponent("Image Title", "https://picsum.photos/600/300");
        this.page.addchild(image);
        const video = new VideoComponent("Video Title", "https://youtu.be/K3-jG52XwuQ");
        this.page.addchild(video);
        const note = new NoteComponent("Note Title", "Note Body");
        this.page.addchild(note);
        const todo = new TodoComponent("Todo Title", "Todo Item");
        this.page.addchild(todo);
    }
}
new App(document.querySelector(".document"));
