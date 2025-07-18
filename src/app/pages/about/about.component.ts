import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  adrianoLimaInstagram = 'https://www.instagram.com/consultoriaxfood/'; // Link para o Instagram do Adriano
  adrianoLimaImage = 'assets/images/adriano-lima.jpg'; // Crie esta imagem!
}
