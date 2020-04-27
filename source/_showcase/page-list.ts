import { customElement, html, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';

@customElement('page-list')
export class PageList extends PageAbstract {
   getMainComponent(): TemplateResult {
      return html`
         
         <component-list>
               <component-list-item>
               
               
                  <component-typography>Lorem Ipsum Dolorem</component-typography>
               </component-list-item>
               <component-list-item>
                  
                  <component-typography>Lorem Ipsum Dolorem</component-typography>
               </component-list-item>
               <component-list-item>
                  <component-spacer clazz="mediumPaddingLeft"></component-spacer>
                  <component-typography>Lorem Ipsum Dolorem</component-typography>
               </component-list-item>
            </component-list>
         
      `;
   }
}
