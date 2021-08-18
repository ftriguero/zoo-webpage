import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';

import { AnimalService } from '../animal.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  animals? : Animal[];

  selectedAnimal?: Animal;

  constructor(private animalService: AnimalService, private messageService: MessageService) { }

  getAnimals(): void {
    this.animalService.getAnimals()
      .subscribe(animals => this.animals = animals);
  }

  ngOnInit(): void {
    this.getAnimals();
  }

  onSelect(animal: Animal): void {
    this.selectedAnimal = animal;
    this.messageService.add(`${animal.name} has been Fed!`);
  }
}

