import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-solutions',
  imports: [CommonModule, RouterModule],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css',
})
export class SolutionsComponent {
  solutions = [
    {
      title: 'Otimização Estratégica de Cardápio',
      description:
        'Reestruturamos seu cardápio no iFood com base em dados. Criamos categorias inteligentes, otimizamos nomes e descrições dos produtos, e destacamos itens de alta rentabilidade para aumentar seu ticket médio e conversão.',
      icon: 'assets/icons/icon-menu-optimization.svg', // Crie este ícone
    },
    {
      title: 'Marketing e Visibilidade no iFood',
      description:
        'Desenvolvemos e implementamos campanhas de marketing eficazes, como cupons exclusivos, participação em listas sazonais e o uso estratégico de tags. Aumentamos a visibilidade do seu negócio e a aquisição de novos clientes.',
      icon: 'assets/icons/icon-marketing.svg', // Crie este ícone
    },
    {
      title: 'Gestão de Avaliações e Reputação',
      description:
        'Monitoramos e respondemos às avaliações dos clientes, tanto positivas quanto negativas. Auxiliamos na gestão de crises pós-venda, garantindo que sua reputação online seja sempre positiva e atrativa para novos pedidos.',
      icon: 'assets/icons/icon-reputation.svg', // Crie este ícone
    },
    {
      title: 'Estratégias Promocionais Avançadas',
      description:
        'Criamos promoções irresistíveis, combos estratégicos e ofertas para novos clientes que impulsionam suas vendas. Posicionamos seus produtos de forma destacada nas buscas do iFood e ativamos o upsell para maximizar cada pedido.',
      icon: 'assets/icons/icon-promotions.svg', // Crie este ícone
    },
    {
      title: 'Consultoria Operacional e Financeira',
      description:
        'Oferecemos suporte na precificação de seus produtos, gestão de cancelamentos e reembolsos. Analisamos seus custos e performance operacional para garantir que cada venda seja lucrativa. Treinamento de delivery online quando necessário.',
      icon: 'assets/icons/icon-finance.svg', // Crie este ícone
    },
    {
      title: 'Análise de Dados e Relatórios Detalhados',
      description:
        'Fornecemos relatórios quinzenais e mensais completos com métricas de desempenho, análise de vendas, custos, e tendências. Transformamos dados em insights acionáveis para otimizar continuamente sua operação.',
      icon: 'assets/icons/icon-reports.svg', // Crie este ícone
    },
  ];

  benefits = [
    'Análise e estudo de caso aprofundado.',
    'Elaboração de vitrine virtual atrativa e otimizada.',
    'Atualização contínua do perfil e ajustes de estratégia.',
    'Gestão diária e ativa das plataformas durante o período contratado.',
    'Contestação de cancelamentos e solicitação de reembolso.',
    'Ajustes de estratégia de acordo com as necessidades da loja.',
    'Acesso a especialistas com conhecimento aprofundado do iFood.',
  ];
}
