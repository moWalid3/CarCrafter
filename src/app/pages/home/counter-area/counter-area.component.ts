import { Component, effect, signal, viewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-counter-area',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './counter-area.component.html',
  styleUrl: './counter-area.component.scss',
})
export class CounterAreaComponent {
  states = signal([
    {
      title: '+ Available Cars',
      number: 500,
      icon: 'car_rental',
      currentNumber: 0,
    },
    {
      title: '+ Happy Clients',
      number: 900,
      icon: 'mood',
      currentNumber: 0,
    },
    {
      title: '+ Team Workers',
      number: 1500,
      icon: 'construction',
      currentNumber: 0,
    },
    {
      title: '+ Years Of Working',
      number: 30,
      icon: 'verified',
      currentNumber: 0,
    },
  ]);

  counterElement = viewChild('counterEle');
  private animationDuration = 2000;
  private animationStartTime: number | null = null;
  private animationFrameId: number | null = null;

  constructor() {
    effect(() => {

      if (this.counterElement())
        this.triggerAnimation();

    });
  }

  private triggerAnimation() {
    // This method is called when the counter element is in view
    //=> We'll use setTimeout to break out of the effect cycle
    setTimeout(() => {
      this.startCounterAnimation();
    }, 0);
  }

  private startCounterAnimation() {
    if (this.animationStartTime === null) {
      this.animationStartTime = performance.now();
      this.animateCounter();
    }
  }

  private animateCounter() {
    if (this.animationStartTime === null) return;

    const currentTime = performance.now();
    const elapsedTime = currentTime - this.animationStartTime;
    const progress = Math.min(elapsedTime / this.animationDuration, 1);

    const updatedStates = this.states().map((state) => ({
      ...state,
      currentNumber: Math.round(progress * state.number),
    }));

    // Update the signal
    this.states.set(updatedStates);

    if (progress < 1) {
      this.animationFrameId = requestAnimationFrame(() => this.animateCounter());
    } else {
      this.animationStartTime = null;
      this.animationFrameId = null;
    }
  }

  ngOnDestroy() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

}
