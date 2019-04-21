import { Component, State } from '@stencil/core';

@Component({
  tag: 'my-clock',
  styleUrl: 'my-clock.css',
  shadow: true
})
export class MyClock {

  timer;

  @State() time = Date.now();

  componentDidLoad() {
    this.timer = setInterval(() => {
      this.time = Date.now();
    }, 1000 * 1);
  }

  componentDidUnLoad() {
    clearInterval(this.timer);
  }

  render() {
    const time = new Date(this.time).toLocaleTimeString();
    return <div>It is {time}</div>;
  }
}
