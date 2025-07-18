import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      restaurantName: new FormControl('', Validators.required),
      message: new FormControl(''),
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulário Enviado!', this.contactForm.value);
      // Aqui você integraria com um serviço de envio de e-mail ou API
      alert(
        'Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.'
      );
      this.contactForm.reset();
    } else {
      alert('Por favor, preencha todos os campos obrigatórios corretamente.');
    }
  }
}
