import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent implements OnInit {
  baseName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.baseName = this.route.snapshot.params['base'];
  }
}
