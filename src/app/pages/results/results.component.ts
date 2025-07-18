import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-results',
  imports: [CommonModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
})
export class ResultsComponent {
  cases = [
    {
      name: 'Ganash Pizzaria e Padaria',
      segment: 'Pizzaria e Padaria',
      logo: 'assets/images/client-ganash-logo.png', // Placeholder para o logo da Ganash
      description:
        'A Ganash buscava otimizar sua operação no iFood e reverter um período de queda. Com a consultoria da XFood, implementamos estratégias de cardápio, marketing e gestão de experiência do cliente, transformando seus resultados.',
      metrics: [
        {
          label: 'Aumento de Vendas (Total)',
          value: '+90,05%',
          context: 'Em Julho, comparado a Junho (Ganash Pizzaria)',
        },
        {
          label: 'Aumento de Pedidos',
          value: '+64,71%',
          context: 'Em Julho, comparado a Junho (Ganash Pizzaria)',
        },
        {
          label: 'Aumento Ticket Médio',
          value: '+15,39%',
          context: 'Em Julho, comparado a Junho (Ganash Pizzaria)',
        },
        {
          label: 'Aumento Novos Clientes',
          value: '+54,84%',
          context: 'Em Julho, comparado a Junho (Ganash Pizzaria)',
        },
        {
          label: 'Melhora Cancelamentos',
          value: 'Redução de impacto no selo Super',
          context: 'Ações focadas em itens errados/indisponíveis',
        },
        {
          label: 'Otimização de Chamados',
          value: 'Redução de problemas',
          context: 'Foco na conferência final e estoque',
        },
      ],
      details: [
        'Aumento significativo do valor total de vendas, superando a performance anterior.',
        'Crescimento da base de novos clientes, indicando maior atratividade e visibilidade.',
        'Melhora contínua na experiência do cliente, com foco na redução de cancelamentos e chamados por erros operacionais.',
        'Implementação de estratégias de cardápio que valorizaram os produtos e aumentaram o ticket médio.',
      ],
      testimonial: {
        quote:
          'A XFood transformou nosso delivery! Os números não mentem, vimos um crescimento que não esperávamos. O suporte e a inteligência estratégica são impecáveis.',
        author: 'Responsável pela Ganash Pizzaria e Padaria',
      },
    },
    {
      name: 'Du Cheff Pizzaria',
      segment: 'Pizzaria',
      logo: 'assets/images/client-ducheff-logo.png', // Placeholder para o logo da Du Cheff
      description:
        'A Du Cheff Pizzaria, com boa avaliação inicial, buscava otimizar seu cardápio e aumentar o apelo comercial. A XFood focou na reorganização visual e estratégica dos itens, além de otimizar a presença no iFood.',
      metrics: [
        {
          label: 'Otimização de Cardápio',
          value: 'Melhora de Nomenclatura',
          context: 'Itens genéricos substituídos por nomes atrativos',
        },
        {
          label: 'Otimização de Combos',
          value: 'Redução de Indecisão',
          context: 'Simplificação da apresentação para melhor conversão',
        },
        {
          label: 'Melhora na Identidade Visual',
          value: 'Maior Apelo Comercial',
          context: 'Valorização dos produtos no iFood',
        },
      ],
      details: [
        'Reorganização e renomeação de itens do cardápio para maior clareza e atratividade.',
        'Otimização da apresentação de combos para facilitar a escolha do cliente e impulsionar vendas.',
        'Ajustes na vitrine virtual para aumentar a visibilidade e o engajamento.',
        'Implementação de ações de marketing direcionadas para a base de clientes existente e novos consumidores.',
      ],
      testimonial: {
        quote:
          'O plano de ação da XFood foi cirúrgico! Percebemos uma melhora significativa na forma como nossos clientes interagem com nosso cardápio no iFood. Profissionalismo e resultados.',
        author: 'Responsável pela Du Cheff Pizzaria',
      },
    },
  ];
}
