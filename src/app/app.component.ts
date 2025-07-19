import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'xfood-website';

  // Estados do botão WhatsApp
  isTooltipVisible = false;
  hasNotification = true; // Pode ser controlado por lógica de negócio

  private tooltipTimeout: any;
  private hideTooltipTimeout: any;

  constructor() {}

  ngOnInit(): void {
    // Auto-mostrar tooltip após alguns segundos (primeira impressão)
    setTimeout(() => {
      this.showWelcomeTooltip();
    }, 3000);

    // Esconder notificação após mostrar tooltip
    setTimeout(() => {
      this.hasNotification = false;
    }, 8000);
  }

  ngOnDestroy(): void {
    if (this.tooltipTimeout) {
      clearTimeout(this.tooltipTimeout);
    }
    if (this.hideTooltipTimeout) {
      clearTimeout(this.hideTooltipTimeout);
    }
  }

  /**
   * Mostra o tooltip do WhatsApp
   */
  showTooltip(): void {
    if (this.hideTooltipTimeout) {
      clearTimeout(this.hideTooltipTimeout);
    }

    this.tooltipTimeout = setTimeout(() => {
      this.isTooltipVisible = true;
    }, 200); // Pequeno delay para evitar hover acidental
  }

  /**
   * Esconde o tooltip do WhatsApp
   */
  hideTooltip(): void {
    if (this.tooltipTimeout) {
      clearTimeout(this.tooltipTimeout);
    }

    this.hideTooltipTimeout = setTimeout(() => {
      this.isTooltipVisible = false;
    }, 300); // Delay para permitir hover no tooltip
  }

  /**
   * Mostra tooltip de boas-vindas automaticamente
   */
  private showWelcomeTooltip(): void {
    this.isTooltipVisible = true;
    this.hasNotification = true;

    // Auto-esconder após 5 segundos
    setTimeout(() => {
      this.isTooltipVisible = false;
      this.hasNotification = false;
    }, 5000);
  }

  /**
   * Ação ao clicar no botão WhatsApp
   */
  onWhatsAppClick(): void {
    // Analytics ou tracking podem ser adicionados aqui
    console.log('WhatsApp button clicked');

    // Esconder tooltip e notificação
    this.isTooltipVisible = false;
    this.hasNotification = false;

    // Opcional: Vibração no mobile (se suportado)
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
  }

  /**
   * Método para mostrar notificação programaticamente
   * (pode ser chamado quando há novas mensagens, promoções, etc.)
   */
  showNotification(): void {
    this.hasNotification = true;

    // Auto-esconder após 10 segundos
    setTimeout(() => {
      this.hasNotification = false;
    }, 10000);
  }

  /**
   * Método para reativar tooltip em situações específicas
   * (ex: usuário passa muito tempo na página)
   */
  reactivateTooltip(): void {
    setTimeout(() => {
      if (!this.isTooltipVisible) {
        this.showWelcomeTooltip();
      }
    }, 30000); // Reativar após 30 segundos de inatividade
  }
}
