import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'My proj';

  inputModel = 'Test';

  onTitleClick(event) {
    console.log(event);
  }

  onInputChange(event) {
    console.log(event);

    this.inputModel = event.target.value;
  }
}
