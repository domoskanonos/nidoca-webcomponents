export enum NidocaColorScheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SURFACE = "surface",
  BACKGROUND = "background",
}

export class NidocaDevice {
  static readonly MOBILE = new NidocaDevice("MOBILE", 0, 640);
  static readonly TABLET = new NidocaDevice("TABLET", 641, 1007);
  static readonly DESKTOP = new NidocaDevice("DESKTOP", 1008, null);

  constructor(private key: string, private minWidth: number | null, private maxWidth: number | null) {}

  static getCurrentScreen(): NidocaDevice | null {
    let retval: NidocaDevice | null = null;
    [NidocaDevice.MOBILE, NidocaDevice.TABLET, NidocaDevice.DESKTOP].forEach((device: NidocaDevice) => {
      if (
        (device.minWidth == null || device.minWidth < window.innerWidth) &&
        (device.maxWidth == null || device.maxWidth > window.innerWidth)
      ) {
        retval = device;
      }
    });
    return retval;
  }

  asMediaStyle(style: string): string {
    let mediaStyle: string = "@media ";
    if (this.minWidth) {
      mediaStyle = mediaStyle.concat("(min-width: ").concat(String(this.minWidth)).concat("px)");
      if (this.maxWidth) {
        mediaStyle = mediaStyle.concat(" and ");
      }
    }
    if (this.maxWidth) {
      mediaStyle = mediaStyle.concat("(max-width: ").concat(String(this.maxWidth)).concat("px)");
    }
    mediaStyle = mediaStyle.concat("{");
    mediaStyle = mediaStyle.concat(style);
    mediaStyle = mediaStyle.concat("} ");
    return mediaStyle;
  }
}
