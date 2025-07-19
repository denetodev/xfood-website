import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {}

  /**
   * Abre o WhatsApp com mensagem pré-definida
   */
  openWhatsApp(): void {
    const phoneNumber = '5561983179864';
    const message = encodeURIComponent(
      'Olá! Gostaria de saber mais sobre os serviços da XFood.'
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }

  /**
   * Abre o cliente de email com assunto pré-definido
   */
  sendEmail(): void {
    const email = 'contato@consultoriaxfood.com';
    const subject = encodeURIComponent('Interesse nos serviços XFood');
    const body = encodeURIComponent(
      'Olá,\n\nGostaria de mais informações sobre os serviços da XFood.\n\nObrigado!'
    );
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, '_blank');
  }

  /**
   * Scroll suave para o topo da página
   */
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
