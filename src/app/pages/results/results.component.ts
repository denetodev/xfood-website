import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Metric {
  label: string;
  value: string;
  context: string;
  icon?: string;
}

interface Testimonial {
  quote: string;
  author: string;
}

interface CaseStudy {
  name: string;
  segment: string;
  logo: string;
  description: string;
  metrics: Metric[];
  details: string[];
  testimonial?: Testimonial;
  industry?: string;
  duration?: string;
  challenge?: string;
}

@Component({
  selector: 'app-results',
  imports: [CommonModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
})
export class ResultsComponent {
  cases: CaseStudy[] = [
    {
      name: 'Ganash Pizzaria e Padaria',
      segment: 'Pizzaria e Padaria',
      logo: 'assets/images/client-ganash-logo.png',
      industry: 'Food & Beverage',
      duration: '2 meses',
      challenge: 'Reversão de período de queda nas vendas',
      description:
        'A Ganash enfrentava um período desafiador com queda nas vendas do iFood. Através de uma consultoria estratégica completa, implementamos soluções de otimização de cardápio, campanhas de marketing direcionadas e melhoria da experiência do cliente, resultando em uma transformação impressionante dos resultados.',
      metrics: [
        {
          label: 'Aumento de Vendas Total',
          value: '+90,05%',
          context: 'Julho vs Junho - Ganash Pizzaria',
          icon: '📈',
        },
        {
          label: 'Crescimento em Pedidos',
          value: '+64,71%',
          context: 'Julho vs Junho - Volume de ordens',
          icon: '🛒',
        },
        {
          label: 'Melhoria do Ticket Médio',
          value: '+15,39%',
          context: 'Otimização estratégica de preços',
          icon: '💰',
        },
        {
          label: 'Novos Clientes',
          value: '+54,84%',
          context: 'Crescimento da base de clientes',
          icon: '👥',
        },
        {
          label: 'Qualidade Operacional',
          value: 'Selo Super',
          context: 'Redução significativa de cancelamentos',
          icon: '⭐',
        },
        {
          label: 'Eficiência Operacional',
          value: '-75%',
          context: 'Redução de chamados e reclamações',
          icon: '🔧',
        },
      ],
      details: [
        'Reestruturação completa do cardápio com foco em itens de maior margem e apelo visual.',
        'Implementação de campanhas promocionais estratégicas para diferentes horários do dia.',
        'Otimização da gestão de estoque e controle de qualidade para reduzir cancelamentos.',
        'Treinamento da equipe para melhorar a experiência do cliente e reduzir erros operacionais.',
        'Análise de concorrência e posicionamento competitivo no mercado local.',
        'Implementação de sistema de feedback contínuo para melhoria constante dos processos.',
      ],
      testimonial: {
        quote:
          'A XFood foi além das nossas expectativas! Não apenas recuperamos as vendas, como superamos todos os nossos recordes anteriores. A abordagem estratégica e o suporte contínuo fizeram toda a diferença.',
        author: 'Proprietário da Ganash Pizzaria e Padaria',
      },
    },
    {
      name: 'Du Cheff Pizzaria',
      segment: 'Pizzaria Gourmet',
      logo: 'assets/images/client-ducheff-logo.png',
      industry: 'Food & Beverage',
      duration: '1.5 meses',
      challenge: 'Otimização de conversão e apelo visual do cardápio',
      description:
        'A Du Cheff já possuía uma boa avaliação no iFood, mas identificamos oportunidades significativas de melhoria na apresentação do cardápio e estratégias de conversão. Focamos na reorganização visual, otimização de nomenclaturas e criação de combos mais atrativos para maximizar o potencial de vendas.',
      metrics: [
        {
          label: 'Otimização Visual',
          value: '100%',
          context: 'Reformulação completa da identidade visual',
          icon: '🎨',
        },
        {
          label: 'Melhoria de Nomenclatura',
          value: '+85%',
          context: 'Itens com nomes mais atrativos e descritivos',
          icon: '📝',
        },
        {
          label: 'Conversão de Combos',
          value: '+40%',
          context: 'Simplificação e otimização de ofertas',
          icon: '📦',
        },
        {
          label: 'Engajamento Visual',
          value: '+60%',
          context: 'Maior interação com itens do cardápio',
          icon: '👀',
        },
        {
          label: 'Posicionamento Premium',
          value: 'Top 3%',
          context: 'Classificação na categoria local',
          icon: '🏆',
        },
        {
          label: 'Satisfação do Cliente',
          value: '4.8/5.0',
          context: 'Avaliação média após otimizações',
          icon: '⭐',
        },
      ],
      details: [
        'Reformulação completa da identidade visual do restaurante no iFood com fotos profissionais.',
        'Renomeação estratégica de pratos para criar maior apelo emocional e comercial.',
        'Reorganização de combos e promoções para reduzir paralisia de escolha do cliente.',
        'Implementação de estratégias de cross-selling através da disposição inteligente de itens.',
        'Criação de categorias mais intuitivas para facilitar a navegação do cliente.',
        'Desenvolvimento de descrições de produtos que destacam benefícios e diferenciais únicos.',
      ],
      testimonial: {
        quote:
          'O trabalho da XFood foi transformador! Nossos clientes agora interagem muito mais com nosso cardápio e conseguimos transmitir melhor a qualidade dos nossos produtos. O resultado foi imediato.',
        author: 'Chef e Proprietário da Du Cheff Pizzaria',
      },
    },
  ];

  // Métricas gerais para a seção hero
  overallMetrics = [
    {
      value: '+90%',
      label: 'Aumento Médio em Vendas',
      description: 'Crescimento comprovado',
    },
    {
      value: '+15%',
      label: 'Melhora no Ticket Médio',
      description: 'Otimização estratégica',
    },
    { value: '+50%', label: 'Novos Clientes', description: 'Expansão da base' },
  ];

  constructor() {}

  ngOnInit(): void {
    // Aqui você pode implementar lógicas de inicialização
    // Como animações, carregamento de dados adicionais, etc.
    this.initializeAnimations();
  }

  private initializeAnimations(): void {
    // Implementar animações personalizadas se necessário
    // Por exemplo, intersection observer para animações ao scroll
  }

  // Método para formatar números se necessário
  formatMetricValue(value: string): string {
    return value.replace(/\+/, '');
  }

  // Método para obter cor baseada no tipo de métrica
  getMetricColor(value: string): string {
    if (value.includes('+')) {
      return 'from-xfood-green to-xfood-green';
    } else if (value.includes('-')) {
      return 'from-xfood-red-accent to-xfood-red-light';
    }
    return 'from-xfood-red-accent to-xfood-orange';
  }

  // Método para scroll suave até uma seção específica
  scrollToCase(index: number): void {
    const element = document.querySelector(`[data-case="${index}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
