import { customElement, html, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { ContainerClazzValues } from '../flex-container/component';

@customElement('page-rich-media')
export class pagerichmediaComponent extends PageAbstract {
   getMainComponent(): TemplateResult {
      return html`
         <component-flex-container .containerClazzes="${[ContainerClazzValues.CONTAINER_WIDTH_50]}">
            <iframe
               width="560"
               height="315"
               src="https://www.youtube.com/embed/gG_JWPF99vA"
               frameborder="0"
               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
               allowfullscreen
            ></iframe>
            <component-rich-media src="https://picsum.photos/300/300" text="Mein Bild"></component-rich-media>

            <component-rich-media clazz="roundImage" src="https://picsum.photos/300/300"></component-rich-media>

            <component-rich-media clazz="zoomImageWrapped" src="https://picsum.photos/300/300"></component-rich-media>

            <component-rich-media clazz="clickable" src="https://picsum.photos/300/300"></component-rich-media>
         </component-flex-container>
      `;
   }
}
