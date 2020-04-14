import { BasicService } from '@domoskanonos/frontend-basis';
import { ButtonType } from '..';

export class PreviewFormatterService {
   private static uniqueInstance: PreviewFormatterService;

   private constructor() {}

   static getUniqueInstance() {
      if (!PreviewFormatterService.uniqueInstance) {
         PreviewFormatterService.uniqueInstance = new PreviewFormatterService();
      }
      return PreviewFormatterService.uniqueInstance;
   }

   property2String(property: any, type: any): string {
      let value = BasicService.getUniqueInstance().getEnumKey(property, type);
      return value != null
         ? '.'
              .concat(type.name.charAt(0))
              .toLowerCase()
              .concat(type.name.substr(1))
              .concat('="${')
              .concat(type.name)
              .concat('.')
              .concat(value)
              .concat('}"')
         : '';
   }

   format(html: string): string {
      html = html.trim();
      html = html.replace('>', '>\n');
      html = html.replace(' ', '>\n');
      return html;
   }
}
