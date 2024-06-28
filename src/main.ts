import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello bella {{ name }}!</h1>
    <a target="_blank" href="https://www.psicoactiva.com/wp-content/uploads/2022/11/mensajes-buenos-dias-novios-despertar-maravilloso.png">
      Click y lee mi pensamiento !!
    </a>
  `,
})
export class App {
  name = 'Ninfa';
}

bootstrapApplication(App);
