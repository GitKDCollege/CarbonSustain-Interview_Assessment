import { Component, OnInit } from '@angular/core';
import { SustainabilityService, Action } from './sustainability.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./action-list.component.css']
})
export class ActionListComponent implements OnInit {
  actions: Action[] = [];

  constructor(private sustainabilityService: SustainabilityService) {}

  ngOnInit(): void {
    this.sustainabilityService.getActions().subscribe((data) => {
      this.actions = data;
    });
  }
}