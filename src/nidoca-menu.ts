import {css, html, TemplateResult, LitElement} from "lit";
import {customElement, property, query} from "lit/decorators.js";
import {NidocaListItem, NidocaMenuItem, NidocaTheme, TABLET_MIN_WIDTH} from ".";

@customElement("nidoca-menu")
export class NidocaMenu extends LitElement {
    static styles = css`
    :host,
    slot {
      display: block;
    }

    slot {
      padding: var(--space-2);
    }
  `;

    @property({type: NidocaTheme, converter: String})
    theme: string | undefined = NidocaTheme.BACKGROUND;

    @query("#slotElement")
    private slotElement: HTMLSlotElement | undefined;

    render(): TemplateResult {
        return html` ${NidocaTheme.getStyle(this.theme)}
        <slot id="slotElement"></slot>`;
    }

    protected firstUpdated() {
        this.addEventListener("click", (event: MouseEvent) => {
            if (this.slotElement != null) {
                const slottedElements = this.slotElement.assignedElements();
                for (let index = 0; index < slottedElements.length; index++) {
                    const element = slottedElements[index];
                    if (element instanceof NidocaMenuItem) {
                        const rect = element.getBoundingClientRect();
                        console.log("huhu");

                        if (rect.top < event.y && rect.bottom > event.y && rect.left > event.x && rect.right < event.x) {
                            console.log("Huhihuihiuhiuhiuh");
                            element.selected = true;
                        } else {
                            element.selected = false;
                        }
                    }
                }
            }
        });
    }

}
