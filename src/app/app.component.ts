import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ninja-directory';

  ninja = {
    name: "Yoshi",
    belt: "Black"
  }

  yell(e: Event) {
    alert("Yell!");
  }
}
