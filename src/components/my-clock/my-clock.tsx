import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'my-clock',
  styleUrl: 'my-clock.css',
  shadow: true
})
export class MyClock {

  timer;

  @State() time = new Date().toLocaleTimeString();

  componentDidLoad() {
    this.timer = setInterval(() => {
      this.time = new Date().toLocaleTimeString();
      console.log('test');
    }, 1000);
  }

  componentDidUnload() {
    clearInterval(this.timer);
  }

  render() {
    return <div>It is {this.time}</div>;
  }
}
