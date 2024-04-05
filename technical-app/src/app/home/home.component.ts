import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  inputValue: string = '';

  listed: any[] = [];
  examining: any[] = [];
  hooman: any[] = [];
  count = 0;

  addPet(): void {
    this.listed.push({ name: this.inputValue, id: this.count++ });
    console.log(this.listed);
    this.inputValue = '';
  }

  listedNext(index: number): void {
    const objToPass = this.listed.find((pet) => pet.id === index);
    const objIndex = this.listed.findIndex((pet) => pet.id === index);
    this.listed.splice(objIndex, 1);
    this.examining.push(objToPass);
  }

  examiningNext(index: number): void {
    const objToPass = this.examining.find((pet) => pet.id === index);
    const objIndex = this.examining.findIndex((pet) => pet.id === index);
    this.examining.splice(objIndex, 1);
    this.hooman.push(objToPass);
  }
}
