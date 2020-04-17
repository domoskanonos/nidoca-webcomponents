import {BasicService} from '@domoskanonos/frontend-basis';
import {ButtonType} from '..';

export class PreviewFormatterService {
    private static uniqueInstance: PreviewFormatterService;

    private constructor() {
    }

    static getUniqueInstance() {
        if (!PreviewFormatterService.uniqueInstance) {
            PreviewFormatterService.uniqueInstance = new PreviewFormatterService();
        }
        return PreviewFormatterService.uniqueInstance;
    }

    property2String(property: any, type: any): string {
        let value = BasicService.getUniqueInstance().getEnumKey(property, type);
        return value != null
            ? '\n.'
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

    propertyArray2String(properties: any[], type: any): string {
        let propertiesString = ``;
        let propertyIndex: number = 0;
        for (const property of properties) {
            if (propertyIndex > 0) {
                propertiesString = propertiesString.concat(',');
            }
            let value = BasicService.getUniqueInstance().getEnumKey(property, type);

            if (value != null) {
                propertiesString = propertiesString
                    .concat(type.name)
                    .concat('\n.')
                    .concat(value);
            }
            propertyIndex++;
        }
        return '\n.'
            .concat(type.name.charAt(0))
            .toLowerCase()
            .concat(type.name.substr(1))
            .concat('="${[')
            .concat(propertiesString)
            .concat(']}"');
    }

}
