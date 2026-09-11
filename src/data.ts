import { NavItem, ServiceCardItem, BenefitItem, ProjectItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICE_THUMBNAILS = [
  {
    id: 'thumb-1',
    title: 'Photovoltaic Array',
    imageUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    alt: 'Solar panel rows under bright blue sky',
  },
  {
    id: 'thumb-2',
    title: 'Inverter Systems',
    imageUrl: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80',
    alt: 'Modern solar power inverter grid equipment',
  },
  {
    id: 'thumb-3',
    title: 'Commercial Installation',
    imageUrl: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80',
    alt: 'Rooftop industrial solar panel installation',
  },
];

export const SERVICE_CARDS: ServiceCardItem[] = [
  {
    id: 'service-1',
    title: 'Earn Tax Credits & Rebates',
    subtitle: 'Maximize federal solar investment tax credits and municipal clean energy payback incentives.',
    imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=80',
    alt: 'Solar panels catching sunlight with financial growth symbolism',
  },
  {
    id: 'service-2',
    title: 'Help The Environment',
    subtitle: 'Significantly reduce carbon footprints and generate emission-free, renewable power locally.',
    imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=900&q=80',
    alt: 'Sunbeams radiating through green canopy beside clean energy solar cells',
  },
  {
    id: 'service-3',
    title: 'Harnessing Energy',
    subtitle: 'Engineered high-efficiency battery storage and smart grid optimization for 24/7 reliability.',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80',
    alt: 'High-tech electrical grid and clean energy capture equipment',
  },
];

export const BENEFITS: BenefitItem[] = [
  {
    id: 'benefit-1',
    title: 'Lower Energy Bills',
    description: 'Drastically cut monthly utility costs with clean self-generated power and net-metering credits.',
    iconName: 'DollarSign',
  },
  {
    id: 'benefit-2',
    title: 'Eco-Friendly',
    description: '100% renewable, clean power source that eliminates harmful carbon emissions and greenhouse gases.',
    iconName: 'Leaf',
  },
  {
    id: 'benefit-3',
    title: 'Government Incentives',
    description: 'Take advantage of substantial federal tax credits, local grant programs, and zero-interest financing.',
    iconName: 'Award',
  },
  {
    id: 'benefit-4',
    title: 'Increase Property Value',
    description: 'Homes and commercial buildings equipped with solar arrays consistently appraise higher on the market.',
    iconName: 'Home',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'project-1',
    title: 'AeroTech Industrial Roof',
    category: 'Commercial',
    capacity: '450 kW Array',
    imageUrl: 'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'project-2',
    title: 'Highland Modern Estate',
    category: 'Residential',
    capacity: '24 kW Custom Rooftop',
    imageUrl: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'project-3',
    title: 'Pacific Coast Winery',
    category: 'Agricultural',
    capacity: '180 kW Ground Mount',
    imageUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'project-4',
    title: 'Apex Logistic Hub',
    category: 'Industrial',
    capacity: '620 kW Microgrid',
    imageUrl: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'project-5',
    title: 'Summit Hill Community',
    category: 'Municipal',
    capacity: '320 kW Solar Field',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'project-6',
    title: 'Solstice Medical Campus',
    category: 'Healthcare',
    capacity: '500 kW Storage Hybrid',
    imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'project-7',
    title: 'Horizon Research Facility',
    category: 'Educational',
    capacity: '210 kW Tracking Array',
    imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'project-8',
    title: 'Meadowlands Solar Farm',
    category: 'Utility Scale',
    capacity: '1.2 MW Ground Installation',
    imageUrl: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'project-9',
    title: 'Oasis Eco-Resort',
    category: 'Hospitality',
    capacity: '160 kW Off-Grid Matrix',
    imageUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
  },
];
