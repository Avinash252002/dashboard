declare module './simple-image.jsx' {
    export class SimpleImage {
      static get toolbox(): { title: string; icon: string };
      render(): HTMLElement;
      save(blockContent: HTMLElement): { url: string };
    }
  }