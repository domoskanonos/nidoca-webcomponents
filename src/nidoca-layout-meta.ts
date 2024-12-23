export class NidocaDevice {
  constructor(public key: string, public minWidth: number, public maxWidth: number = 10240) {}

  asMediaStyle(style: string): string {
    let mediaStyle: string = '@media ';
    if (this.minWidth) {
      mediaStyle = mediaStyle.concat('(min-width: ').concat(String(this.minWidth)).concat('px)');
      if (this.maxWidth) {
        mediaStyle = mediaStyle.concat(' and ');
      }
    }
    if (this.maxWidth) {
      mediaStyle = mediaStyle.concat('(max-width: ').concat(String(this.maxWidth)).concat('px)');
    }
    mediaStyle = mediaStyle.concat('{');
    mediaStyle = mediaStyle.concat(style);
    mediaStyle = mediaStyle.concat('} ');
    return mediaStyle;
  }
}
