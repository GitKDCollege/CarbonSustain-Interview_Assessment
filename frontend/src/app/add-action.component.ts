import { Component } from '@angular/core';
import { SustainabilityService, Action } from './sustainability.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-action',
  templateUrl: './add-action.component.html',
  standalone: true,
  imports: [FormsModule]
//   styleUrls: ['./add-action.component.css']
})
export class AddActionComponent {
  action: string = '';
  date: string = '';
  points: number = 0;

  constructor(private sustainabilityService: SustainabilityService) {}

  addAction(): void {
    const newAction: Action = {
      id: Date.now(),
      action: this.action,
      date: this.date,
      points: this.points
    };

    this.sustainabilityService.addAction(newAction).subscribe(() => {
      this.action = '';
      this.date = '';
      this.points = 0;
    });
  }
}