import { Injectable } from '@angular/core';
import { Animal } from './animal';
import { ANIMALS } from './roster-animals'; 

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  getAnimals(): Observable<Animal[]> {
    this.messageService.add('AnimalService: fetched animals');
    return of(ANIMALS);
  }

  constructor(private messageService: MessageService) { }
}
