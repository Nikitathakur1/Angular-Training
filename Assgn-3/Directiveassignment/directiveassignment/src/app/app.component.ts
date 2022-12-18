import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directiveassignment';
  content = 'Secret Password = tuna';
  isContentVisible = false;
  togglingLog = [];
  limit = 5;

  constructor() { }

  ngOnInit() {
  }

  toggleContent() {
    const timestamp = new Date().getTime();
    this.togglingLog.push();
    this.isContentVisible = !this.isContentVisible;
  }

  getColor(i: number): string {
    if (i >= this.limit) {
      return 'blue';
    } else {
      return 'white';
    }

  
}
}
