import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-solutions',
  imports: [CommonModule, RouterModule],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css',
})
export class SolutionsComponent implements OnInit {
  services = [
    {
      title: 'Otimização de Cardápio',
      description:
        'Reestruturamos seu menu com base em dados para maximizar conversões e ticket médio.',
      icon: 'assets/icons/icon-menu-optimization.svg',
    },
    {
      title: 'Marketing Estratégico',
      description:
        'Campanhas personalizadas que aumentam visibilidade e atraem novos clientes no iFood.',
      icon: 'assets/icons/icon-marketing.svg',
    },
    {
      title: 'Gestão de Reputação',
      description:
        'Monitoramento ativo das avaliações para manter sua marca sempre bem posicionada.',
      icon: 'assets/icons/icon-reputation.svg',
    },
    {
      title: 'Promoções Inteligentes',
      description:
        'Estratégias promocionais que impulsionam vendas sem comprometer a margem de lucro.',
      icon: 'assets/icons/icon-promotions.svg',
    },
    {
      title: 'Consultoria Financeira',
      description:
        'Análise completa de custos e precificação para garantir rentabilidade máxima.',
      icon: 'assets/icons/icon-finance.svg',
    },
    {
      title: 'Relatórios Detalhados',
      description:
        'Métricas precisas e insights acionáveis para otimização contínua do seu negócio.',
      icon: 'assets/icons/icon-reports.svg',
    },
  ];

  successStories = [
    {
      name: 'Ducheff',
      image: 'assets/images/client-ducheff-logo.png',
      testimonial:
        'Com a XFood, nosso faturamento triplicou em 60 dias. A equipe é extremamente profissional e os resultados são impressionantes.',
      growth: '+280%',
      revenue: 'R$ 85K/mês',
    },
    {
      name: 'Ganash',
      image: 'assets/images/client-ganash-logo.png',
      testimonial:
        'A otimização do cardápio e as estratégias de marketing da XFood transformaram completamente nosso delivery. Recomendo!',
      growth: '+150%',
      revenue: 'R$ 42K/mês',
    },
  ];

  ngOnInit() {
    // Adicionar animações de entrada após o carregamento
    this.animateOnScroll();
  }

  private animateOnScroll() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observar elementos que devem ser animados
    setTimeout(() => {
      const elements = document.querySelectorAll('.group');
      elements.forEach((el) => observer.observe(el));
    }, 100);
  }
}
