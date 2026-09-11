export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCardItem {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  alt: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: 'DollarSign' | 'Leaf' | 'Award' | 'Home';
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  capacity: string;
  imageUrl: string;
}
