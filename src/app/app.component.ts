import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlantComponent } from './plant/plant.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlantComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LeafLight-Admin';
}