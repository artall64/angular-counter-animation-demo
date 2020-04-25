import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-animated-number',
  templateUrl: './animated-number.component.html',
  styleUrls: ['./animated-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimatedNumberComponent implements OnInit, OnChanges {

  title = 'animated-number';

  @Input()
  value: number = 1111;

  ngOnChanges(changes: SimpleChanges): void {
    const {currentValue, previousValue} = changes.value;

    this.doRendering(
      currentValue.toString().padStart(6, '0'),
      (previousValue || '').toString().padStart(6, '0')
    );
  }

  ngOnInit(): void {
  }

  private doRendering(currentValue: string, previousValue: string) {

    //
    const h3counter = document.querySelector('#counter');
    const h3counterParent = h3counter.parentNode;
    h3counter.parentNode.removeChild(h3counter);
    //

    const h3 = document.createElement('h3');

    //const valueToRender = this.value.toString().padStart(6, '0');
    h3.setAttribute('aria-label', currentValue);
    h3.id = 'counter';
    h3.className = 'counter';
    h3.textContent = currentValue;
    h3.style.maxHeight = '60px';
    h3counterParent.appendChild(h3);

    const stats = document.querySelectorAll(".counter");


    stats.forEach(stat => {
      // pattern used to seperate input number from html into an array of numbers and non numbers. EX $65.3M -> ["$65.3M", "$", "65", ".", "3", "M"]
      const patt = /(\D+)?(\d+)(\D+)?(\d+)?(\D+)?/;
      const time = 1000;
      let result = [...patt.exec(stat.textContent)];
      let fresh = true;
      let ticks;

      // Remove first full match from result array (we dont need the full match, just the individual match groups).
      result.shift();

      // Remove undefined values from result array where they didnt have a match in one of the optional regex groups
      result = result.filter(res => res != null);

      while (stat.firstChild) {
        stat.removeChild(stat.firstChild);
      }

      for (const res of result) {
        // if (isNaN(res as any)) {
        //   stat.insertAdjacentHTML("beforeend", `<spn>${res}</span>`);
        // } else {a
        // debugger
        for (let i = 0; i < res.length; i++) {
          if(res[i] === previousValue[i]){
            stat.insertAdjacentHTML(
              "beforeend",
              `<span>${res[i]}</span>`
            );
          }
          else {
            stat.insertAdjacentHTML(
              "beforeend",
              `<span data-value="${res[i]}">
						<span>&nbsp;</span>
						${Array(parseInt(res[i]) + 1)
                .join('0')
                .split('0')
                .map(
                  (x, j) => `
							<span>${j}</span>
						`
                )
                .join("")}
					</span>`
            );
          }
        }
        //}
      }


      let activate = () => {
        // debugger
        let top = stat.getBoundingClientRect().top;
        let offset = window.innerHeight * 3 / 4;
        ticks = [
          ...((stat as any).querySelectorAll("span[data-value]"))
        ];

        // if (top < offset) {
        //   setTimeout(() => {
        for (let tick of ticks) {
          let dist = parseInt(tick.getAttribute("data-value")) + 1;
          tick.style.transform = `translateY(-${dist * 100}%)`;
        }
        // }, 1000);
        // }
      };

      activate();
    });
  }
}
