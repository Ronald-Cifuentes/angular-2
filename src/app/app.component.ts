import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSlideToggleModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-2';
  n1: number = 0;
  n2: number = 0;
  result: number = 0;

  statusForm = false;

  sumar = () => {
    this.result = this.n1 + this.n2;
  };
  restar = () => {
    this.result = this.n1 - this.n2;
  };
}
