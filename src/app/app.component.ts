import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
  ];

  slides = [
    {
      title: 'Rational Agent',
      subtitle: 'Software that makes sense',
      description:
        'We design and build financial software that turns complexity into clarity and helps users make better decisions.',
      badge: 'Financial technology',
    },
    {
      title: 'Our solutions',
      subtitle: 'See what we have built',
      description:
        'From advice platforms to mortgage calculators, we build products that help people manage risk, money, and decision-making.',
      badge: 'Built for real use',
    },
    {
      title: 'Services',
      subtitle: 'We can assist you in building custom software',
      description:
        'Whether you need a prototype, a production-ready app, or support for legacy systems, our team can help shape the right solution.',
      badge: 'Custom software',
    },
  ];

  solutions = [
    {
      icon: '✍️',
      title: 'Rational Agent Blog',
      description:
        'A blog covering personal finance, mortgage strategy, and investing, with tools for activity tracking, article management, and comments.',
      link: 'https://rational-mortgage-herokuapp.com',
      label: 'Visit the web app',
    },
    {
      icon: '🏠',
      title: 'Rational Mortgage',
      description:
        'A mortgage planning tool that lets users compare payment strategies and reduce long-term costs and financial risk.',
      link: 'https://rational-mortgage-herokuapp.com',
      label: 'Visit the web app',
    },
    {
      icon: '❓',
      title: 'Your idea, here',
      description:
        'Need a custom product that fits your specific goals? Tell us what you want and we will help design and build it.',
      link: '#contact',
      label: 'Contact us',
    },
  ];

  services = [
    {
      icon: '🎨',
      title: 'Design',
      description:
        'We help turn ideas into clear requirements and product designs that are consistent, correct, and ready for development.',
    },
    {
      icon: '💻',
      title: 'Development',
      description:
        'When you know what you want but need a capable team to build it, we can take the responsibility from concept to deployment.',
    },
    {
      icon: '🛠️',
      title: 'Maintenance',
      description:
        'Legacy systems often slow teams down. We help modernize software structure, improve performance, and reduce operational pain.',
    },
  ];

  principles = [
    {
      icon: '📊',
      title: 'Pay for actual usage',
      description: 'We use a consumption-based model so you pay for actual usage rather than idle capacity.',
    },
    {
      icon: '🏦',
      title: 'No debt',
      description: 'We maintain stability and independence by avoiding debt-driven growth.',
    },
    {
      icon: '📈',
      title: 'SAAS portfolio',
      description: 'Our long-term approach is to grow a diverse portfolio of durable software products.',
    },
    {
      icon: '🐞',
      title: 'No bugs',
      description: 'All products include a bug reporting path and a commitment to fixing issues quickly and transparently.',
    },
  ];

  socialLinks = [
    { label: 'X', href: '#' },
    { label: 'Q', href: '#' },
    { label: 'GH', href: '#' },
    { label: 'SO', href: '#' },
  ];
}
