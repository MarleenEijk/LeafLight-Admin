import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlantService } from '../plant.service';
import { Plant } from '../../models/plant';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-plant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {
  plant: Plant = {
    id: 0,
    name: '',
    description: '',
    location: 'shade',
    water: '',
    repotting: '',
    toxic: '',
    image: '',
  };
  
  plants: Plant[] = [];
  filteredPlants: Plant[] = [];
  searchQuery: string = '';

  constructor(private plantService: PlantService, private router: Router) {}

  ngOnInit(): void {
    this.loadPlants();
  }

  loadPlants(): void {
    this.plantService.getPlants().subscribe(
      (data: Plant[]) => {
        this.plants = data;
        this.filteredPlants = data;
      },
      (error) => {
        console.error('Error fetching plants:', error);
      }
    );
  }

  viewPlantDetails(id: number): void {
    this.router.navigate(['/plant', id]);
  }

  onSubmit() {
    this.plantService.addPlant(this.plant).subscribe(
      response => {
        console.log('Plant added:', response);
        this.loadPlants();
      },
      error => {
        console.error('Error adding plant:', error);
      }
    );
  }

  deletePlant(id: number, event: Event): void {
    event.stopPropagation();
    this.plantService.deletePlant(id).subscribe(
      response => {
        console.log('Plant deleted:', response);
        this.loadPlants();
      },
      error => {
        console.error('Error deleting plant:', error);
      }
    );
  }

  filterPlants(): void {
    this.filteredPlants = this.plants.filter(plant =>
      plant.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}