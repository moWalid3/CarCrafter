import {
  Component,
  ElementRef,
  HostListener,
  signal,
  ViewChild,
} from '@angular/core';
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
      title: '+ Years Of Experience',
      number: 30,
      icon: 'verified',
      currentNumber: 0,
    },
  ]);

  // private hasCounted = false;

  // constructor(private el: ElementRef) { }

  // @HostListener('window:scroll', ['$event'])
  // onScroll(): void {
  //   if (this.isElementInViewport() && !this.hasCounted) {
  //     this.hasCounted = true;
  //     this.startCounting();
  //   }
  // }

  // isElementInViewport(): boolean {
  //   const rect = this.el.nativeElement.getBoundingClientRect();
  //   return (
  //     rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   );
  // }

  // startCounting(): void {
  //   this.states().forEach(state => {
  //     const increment = Math.ceil(state.number / 100); // Adjust speed as needed
  //     const interval = setInterval(() => {
  //       if (state.currentNumber < state.number) {
  //         state.currentNumber += increment;
  //         if (state.currentNumber > state.number) {
  //           state.currentNumber = state.number;
  //         }
  //       } else {
  //         clearInterval(interval);
  //       }
  //     }, 20); // Adjust speed as needed
  //   });
  // }

  ngAfterViewInit(): void {
    console.log("it's work after view init");
  }

  startCounting(): void {
    this.states().forEach((state) => {
      const increment = Math.ceil(state.number / 100); // Adjust speed as needed

      const interval = setInterval(() => {

        if (state.currentNumber < state.number) {
          state.currentNumber += increment;

          if (state.currentNumber > state.number) {
            state.currentNumber = state.number;
          }

        } else {

          clearInterval(interval);

        }

      }, 20); // Adjust speed as needed
    });
  }
}
