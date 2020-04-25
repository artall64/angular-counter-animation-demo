import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {


  superValue = 0;

  ngOnInit(): void {
    // setInterval(() => {
    //   this.superValue = 239112;
    // }, 10000)
  }

  onclick(e: any) {
    // const x = e.clientX;
    // const y = e.clientY;
    // const s = (Math.random() * 1000000).toFixed(0).padStart(6, '0');
    // this.superValue = +s;

    this.superValue += 7

    //console.log(s);
    //this.superValue
  }


  // title = 'animated-number';
  //
  // @Input()
  // value: number
  //
  // ngOnInit(): void {
  //   //
  //   const stats = document.querySelectorAll(".counter");
  //
  //   //
  //   stats.forEach(stat => {
  //     // pattern used to seperate input number from html into an array of numbers and non numbers. EX $65.3M -> ["$65.3M", "$", "65", ".", "3", "M"]
  //     const patt = /(\D+)?(\d+)(\D+)?(\d+)?(\D+)?/;
  //     const time = 1000;
  //     let result = [...patt.exec(stat.textContent)];
  //     let fresh = true;
  //     let ticks;
  //
  //     // Remove first full match from result array (we dont need the full match, just the individual match groups).
  //     result.shift();
  //
  //     // Remove undefined values from result array where they didnt have a match in one of the optional regex groups
  //     result = result.filter(res => res != null);
  //
  //     while (stat.firstChild) {
  //       stat.removeChild(stat.firstChild);
  //     }
  //
  //     for (const res of result) {
  //       if (isNaN(res as any)) {
  //         stat.insertAdjacentHTML("beforeend", `<span>${res}</span>`);
  //       } else {
  //         // debugger
  //         for (let i = 0; i < res.length; i++) {
  //           stat.insertAdjacentHTML(
  //             "beforeend",
  //             `<span data-value="${res[i]}">
  // 					<span>&ndash;</span>
  // 					${Array(parseInt(res[i]) + 1)
  //               .join(0)
  //               .split(0)
  //               .map(
  //                 (x, j) => `
  // 						<span>${j}</span>
  // 					`
  //               )
  //               .join("")}
  // 				</span>`
  //           );
  //         }
  //       }
  //     }
  //
  //
  //     let activate = () => {
  //       // debugger
  //       let top = stat.getBoundingClientRect().top;
  //       let offset = window.innerHeight * 3 / 4;
  //       ticks = [
  //         ...((stat as any).querySelectorAll("span[data-value]"))
  //       ];
  //
  //       // setTimeout(() => {
  //       // 	fresh = false;
  //       // }, time);
  //
  //       if (top < offset) {
  //         setInterval(() => {
  //           for (let tick of ticks) {
  //             let dist = parseInt(tick.getAttribute("data-value")) + 1;
  //             tick.style.transform = `translateY(-${dist * 100}%)`;
  //           }
  //         }, 1000);
  //         //window.removeEventListener("scroll", activate);
  //       }
  //     };
  //     //window.addEventListener("scroll", activate);
  //     activate();
  //     setTimeout(() => activate(), 3000)
  //   });
  //
  // }
}
