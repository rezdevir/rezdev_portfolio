import { Component ,Input,HostListener,Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss']
})
export class SkillBarComponent {
  @Input() skill_name:string | undefined;
  @Input() skill_pecent:string | undefined;

  // constructor(@Inject(DOCUMENT) private document: Document) { }
  // @HostListener('window:scroll', [])
  // // @HostListener('document:scroll', ['$event'])
  // onWindowScroll() {
  //   if (document.body.scrollTop > 2100 ||     
  //     document.documentElement.scrollTop > 1100) {

  //     // document.getElementById('s_bar')!.classList.add('skill_line_anime_on');
  //     // document.getElementById('s_bar')!.classList.remove('skill_line_anime_on');
  //     // document.getElementById('s_bar').classList.add('green');
  //     }

  //   }

}
