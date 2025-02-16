import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddActionComponent } from './add-action.component';
import { ActionListComponent } from './action-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddActionComponent, ActionListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}
