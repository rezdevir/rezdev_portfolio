import { Component } from '@angular/core';

const elementP: NodeListOf<HTMLSpanElement> = document.querySelectorAll('span');
const wordl_toShow = [
  ' < ',
  ' / ',
  ' R ',
  ' E ',
  ' Z ',
  ' D ',
  ' E ',
  ' V ',
  ' > ',
];
let sp_id: string = '';
var inc: number = 0;
var inc_w: number = 0;
const characters: string =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>{}';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent {
  public ngOnInit(): void {
    //executing logic on component load
    make_span(1025);
    updateSpan('', 1025);
    // R_h(58);
  }

  // updateSpan = (spans_id: string, number_of_span: number): void => {
  //   for (let i = 0; i < number_of_span + 1; i++) {
  //     const word_Span: HTMLSpanElement | null = document.getElementById(
  //       'id' + i
  //     );
  //     if (word_Span && spans_id != 'id' + i) {
  //       word_Span.innerHTML = this.generate_random(1);
  //     }
  //   }
  // };
  // disposal = (id: string): void => {
  //   const word_Span: HTMLSpanElement | null = document.getElementById(id);
  //   if (word_Span) {
  //     word_Span.style.color = 'black';
  //   }
  // };
  // lastOne = (): void => {
  //   const word_Span: HTMLSpanElement | null = document.getElementById(sp_id);
  //   if (word_Span) {
  //     word_Span.style.color = 'blue';
  //   }
  // };
}
// const cell_h = (id: number): void => {
//   const word_Span: HTMLSpanElement | null = document.getElementById('id' + id);
//   if (word_Span) word_Span.style.color = 'white';
// };
// const R_h = (id: number): void => {
//   for (let i = 0; i < 18; i++) {
//     const word_Span: HTMLSpanElement | null = document.getElementById(
//       'id' + id
//     );
//     if (word_Span) word_Span.style.color = 'white';
//     id = id + 41;
//   }
//   cell_h(59);
//   cell_h(60);
//   cell_h(100);
//   cell_h(140);
// };
const disposal = (id: string): void => {
  const word_Span: HTMLSpanElement | null = document.getElementById(id);
  if (word_Span) {
    word_Span.style.color = 'black';
  }
  inc = 0;
};
const generate_random = (length: number): string => {
  let result: string = ' ';
  const charactersLength: number = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const make_span = (number_of_span: number): void => {
  const parent: HTMLElement | null = document.getElementById('container');
  if (parent) {
    for (let i = 0; i < number_of_span; i++) {
      const word_Span: HTMLSpanElement = document.createElement('span');
      word_Span.className = 'word';
      word_Span.setAttribute('id', 'id' + i);
      word_Span.innerHTML = generate_random(1);
      word_Span.addEventListener('mouseover', (event) => {
        onWord('id' + i);
        updateSpan('id' + i, number_of_span);
      });
      parent.appendChild(word_Span);
    }
  }
};
const onWord = (span_id: string): void => {
  const word_Span: HTMLSpanElement | null = document.getElementById(span_id);
  if (word_Span) {
    // word_Span.innerHTML = ' < \\ R E Z D E V > ';
    //  if (inc_w < wordl_toShow.length) {

    if (inc_w >= wordl_toShow.length) {
      inc_w = 0;
    }
    word_Span.style.color = '#F6C90E';
    word_Span.innerHTML = wordl_toShow[inc_w];
    console.log(word_Span.style.color.toString());
    inc_w++;
    sp_id = span_id;
    setTimeout(disposal, 1500 + inc, span_id);
    inc = inc + 10;
  }
};
//spans_id: string,
const random_color = (): string => {
  const colors = [
    '#eeeeee',
    '#3a4750',
    'rgb(249, 69, 133)',
    'gb(176, 134, 252)',
    'rgb(82, 231, 16)',
    'rgb(120, 223, 245)',
  ];
  const tmp_st = colors[Math.floor(Math.random() * colors.length)];

  return tmp_st;
};
const updateSpan = (spans_id: string, number_of_span: number): void => {
  for (let i = 0; i < number_of_span + 1; i++) {
    const word_Span: HTMLSpanElement | null = document.getElementById('id' + i);
    // if (word_Span && spans_id != 'id' + i) {
    //   word_Span.innerHTML = generate_random(1);
    // }
    if (
      word_Span &&
      word_Span.style.color != 'rgb(246, 201, 14)' &&
      spans_id != 'id' + i
    ) {
      word_Span.innerHTML = generate_random(1);

      word_Span.style.color = random_color();
    }
  }
};
