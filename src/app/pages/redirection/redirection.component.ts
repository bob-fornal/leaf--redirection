import { Component } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-redirection',
  standalone: true,
  imports: [],
  templateUrl: './redirection.component.html',
  styleUrl: './redirection.component.scss'
})
export class RedirectionComponent {
  segments: Array<string> = [];
  path: string = '';
  landing: string = '';
  isCorrectLangingPage: boolean = false;

  constructor(private route: ActivatedRoute) {
    route.url.subscribe((segments: Array<UrlSegment>) => {
      this.segments = [];
      segments.forEach((segment: UrlSegment) => {
        this.segments.push(segment.path);
      });
    });
    this.path = `/${this.segments.slice(0, -1).join('/')}/`;
    this.landing = this.segments.at(-1)!;
    console.log(this.landing.match(/^[a-z]-.+$/g));
    this.isCorrectLangingPage = this.landing.match(/^[a-z]-.+$/g) !== null;
  }
}
