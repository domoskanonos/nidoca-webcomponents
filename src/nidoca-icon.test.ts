import {NidocaIcon} from './nidoca-icon';
import {fixture} from '@open-wc/testing';
import {jest} from '@jest/globals';

describe('nidoca-icon', () => {
  it('document create element', async () => {
    const element = document.createElement('nidoca-icon');
    expect(element).toBeInstanceOf(NidocaIcon);
  });

  it('check reactive lit properties', async () => {
    const template = '<nidoca-icon icon="home" clickable deactivated primaryText="MeinText"></nidoca-icon>';
    const element: NidocaIcon = await fixture(template);
    expect(element).toBeInstanceOf(NidocaIcon);
    expect(element.icon).toEqual('home');
    expect(element.clickable).toEqual(true);
    expect(element.deactivated).toEqual(true);
    expect(element.primaryText).toEqual('Mein Text');
  });

  it('check custom event sdasi-example-event-clicked', async () => {
    const handler = jest.fn();
    const component: NidocaIcon = await fixture('<nidoca-icon></nidoca-icon>');
    component.addEventListener('nidoca-event-icon-clicked', handler);
    const i: HTMLElement | undefined | null = component.shadowRoot?.querySelector('i');
    i?.click();
    expect(handler).toHaveBeenCalled();
  });
});
