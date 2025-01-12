export interface NidocaRouteListener {
  routeChanged(relUrl: string): void;
}

export class NidocaRouter {
  private static uniqueInstance: NidocaRouter;

  static getUniqueInstance(): NidocaRouter {
    if (!NidocaRouter.uniqueInstance) {
      NidocaRouter.uniqueInstance = new NidocaRouter();
    }
    return NidocaRouter.uniqueInstance;
  }

  private listeners: NidocaRouteListener[] = [];

  private constructor() {
    
    window.onpopstate = (event : PopStateEvent) => {
      console.trace("onpopstate event: location: " + document.location + ", state: " + JSON.stringify(event.state));
      this.notifyListeners();
    };

    document.addEventListener("click", (event: MouseEvent) => {
      if (!this.shouldIgnoreEvent(event)) {
        const anchor = this.getAnchor(event);
        if (anchor && !this.shouldIgnoreAnchor(anchor)) {
          // nur interne Links
          event.preventDefault();
          if (anchor.hash.length > 0) {
            this.navigate(anchor.hash);
          }
        }
      }
    });

  }

  subscribe(listener: NidocaRouteListener): void {
    console.trace("subscribe router listener");
    this.listeners.push(listener);
  }

  back(): void {
    history.back();
  }

  forward(): void {
    history.forward();
  }

  navigate(url: string, state: any = null): void {
    if (url.indexOf("#") == -1) {
      url = "#".concat(url);
    }

    console.trace("navigate to: %s", url);
    if (state != null) {
      console.trace("state: %s", JSON.stringify(state));
    }

    if (document.location.hash === url) {
      console.trace("you are already on page: " + url);
      return;
    }

    history.pushState(state, "", url);

    this.notifyListeners();

  }

  getCurrentState(): any {
    return history.state;
  }

  getStateProperty(key: string): string {
    const state: any = this.getCurrentState();
    return state != null ? state[key] : null;
  }

  getCurrentPage(): string {
    const currentPage: string = document.location.hash.replace("#", "");
    return currentPage;
  }

  getHash(): string {
    return document.location.hash;
  }

  private notifyListeners() {
    const path = this.getCurrentPage();
    this.listeners.forEach((listener) => listener.routeChanged(path));
  }

  private shouldIgnoreEvent(event: MouseEvent) {
    return event.defaultPrevented || event.button !== 0 || event.shiftKey || event.ctrlKey || event.altKey || event.metaKey;
  }

  private getAnchor(event: MouseEvent): HTMLAnchorElement {
    for (const target of event.composedPath ? event.composedPath() : []) {
      if (this.isAnchor(target as HTMLElement)) {
        return target as HTMLAnchorElement;
      }
    }
    let elem: any = event.target;
    while (elem && !this.isAnchor(elem)) {
      elem = elem.parentNode;
    }
    return elem && this.isAnchor(elem) ? elem : null;
  }

  private isAnchor(elem: HTMLElement) {
    return elem.nodeName && elem.nodeName.toLowerCase() === "a";
  }

  private shouldIgnoreAnchor(anchor: HTMLAnchorElement) {
    if (anchor.target && anchor.target.toLowerCase() !== "_self") {
      return true;
    }

    if (anchor.hasAttribute("download")) {
      return true;
    }

    const origin = anchor.origin || this.getAnchorOrigin(anchor);
    if (origin !== window.location.origin) {
      return true;
    }

    return false;
  }

  private getAnchorOrigin(anchor: HTMLAnchorElement) {
    const port = anchor.port;
    const protocol = anchor.protocol;
    const defaultHttp = protocol === "http:" && port === "80";
    const defaultHttps = protocol === "https:" && port === "443";
    const host = defaultHttp || defaultHttps ? anchor.hostname : anchor.host;
    return `${protocol}//${host}`;
  }
}
