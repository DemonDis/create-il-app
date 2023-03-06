import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styleUrls: ['../styles/index.css']
})
export class AppComponent {
  title = "{{SAFE_NAME}}";
}
