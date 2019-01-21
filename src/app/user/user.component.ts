import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  username = '';

  isEmptyUserName() {
    return this.username === '';
  }

  resetInput() {
    this.username = '';
  }
}
