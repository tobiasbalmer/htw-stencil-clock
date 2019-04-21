/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface MyClock {}
  interface MyClockAttributes extends StencilHTMLAttributes {}

  interface YourClock {}
  interface YourClockAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'MyClock': Components.MyClock;
    'YourClock': Components.YourClock;
  }

  interface StencilIntrinsicElements {
    'my-clock': Components.MyClockAttributes;
    'your-clock': Components.YourClockAttributes;
  }


  interface HTMLMyClockElement extends Components.MyClock, HTMLStencilElement {}
  var HTMLMyClockElement: {
    prototype: HTMLMyClockElement;
    new (): HTMLMyClockElement;
  };

  interface HTMLYourClockElement extends Components.YourClock, HTMLStencilElement {}
  var HTMLYourClockElement: {
    prototype: HTMLYourClockElement;
    new (): HTMLYourClockElement;
  };

  interface HTMLElementTagNameMap {
    'my-clock': HTMLMyClockElement
    'your-clock': HTMLYourClockElement
  }

  interface ElementTagNameMap {
    'my-clock': HTMLMyClockElement;
    'your-clock': HTMLYourClockElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
