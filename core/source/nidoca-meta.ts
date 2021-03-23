export class NidocaDevice {
  static readonly MOBILE = new NidocaDevice('0px', '640px');
  static readonly TABLET = new NidocaDevice('641px', '1007px');
  static readonly DESKTOP = new NidocaDevice('1008px', null);

  constructor(private minWidth: string | null, private maxWidth: string | null) {}

  asMediaStyle(style: string): string {
    let mediaStyle: string = '@media ';
    if (this.minWidth) {
      mediaStyle = mediaStyle.concat('(min-width: ').concat(this.minWidth).concat(')');
      if (this.maxWidth) {
        mediaStyle = mediaStyle.concat(' and ');
      }
    }
    if (this.maxWidth) {
      mediaStyle = mediaStyle.concat('(max-width: ').concat(this.maxWidth).concat(')');
    }
    mediaStyle = mediaStyle.concat('{');
    mediaStyle = mediaStyle.concat(style);
    mediaStyle = mediaStyle.concat('} ');
    return mediaStyle;
  }
}
