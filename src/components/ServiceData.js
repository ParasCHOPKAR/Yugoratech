import {
  Cloud, Layers, Globe, Monitor, Code, ShoppingCart, Palette,
  Search, Megaphone, Target, TrendingUp, Smartphone, Play, MapPin, PenTool,
  Briefcase, Brackets, Workflow,
  Sparkles, Brain, Zap, MessageCircle, BarChart, Wifi, GitBranch, Shield,
  Headphones
} from 'lucide-react';

export const servicesData = [
  {
    number: "01",
    title: "DIGITAL PRESENCE",
    items: [
      { name: "Domain & Hosting", path: "/services/domain-hosting", icon: Cloud },
      { name: "Static Website", path: "/services/static-website", icon: Layers },
      { name: "Dynamic Website", path: "/services/dynamic-website", icon: Globe },
      { name: "E-Commerce Website", path: "/services/ecommerce-website", icon: ShoppingCart },
      { name: "Web Application", path: "/services/web-application", icon: Monitor },
      { name: "UI/UX Design", path: "/services/ui-ux-design", icon: Palette },
    ]
  },
  {
    number: "02",
    title: "DIGITAL MARKETING",
    items: [
      { name: "SEO / AEO / GEO", path: "/services/seo-aeo-geo", icon: Search },
      { name: "Google Ads", path: "/services/google-ads", icon: Megaphone },
      { name: "Meta Ads", path: "/services/meta-ads", icon: Target },
      { name: "Digital Marketing", path: "/services/digital-marketing", icon: TrendingUp },
      { name: "Social Media Marketing", path: "/services/social-media-marketing", icon: Smartphone },
      { name: "YouTube Marketing", path: "/services/youtube-marketing", icon: Play },
      { name: "Local SEO", path: "/services/local-seo", icon: MapPin },
      { name: "Graphic Design & Video", path: "/services/graphic-design-video", icon: PenTool },
    ]
  },
  {
    number: "03",
    title: "SOFTWARE & ENTERPRISE",
    items: [
      { name: "ERP / CRM / HRMS", path: "/services/erp-crm-hrms", icon: Briefcase },
      { name: "Custom Software", path: "/services/software-development", icon: Code },
      { name: "Web App Dev", path: "/services/web-development", icon: Monitor },
      { name: "Mobile App Dev", path: "/services/mobile-app-development", icon: Smartphone },
      { name: "SaaS Development", path: "/services/saas-development", icon: Cloud },
      { name: "API Integration", path: "/services/api-integration", icon: Brackets },
      { name: "Workflow Automation", path: "/services/workflow-automation", icon: Workflow },
    ]
  },
  {
    number: "04",
    title: "AI & ADVANCED TECH",
    items: [
      { name: "AI Solutions", path: "/services/ai-solutions", icon: Sparkles },
      { name: "AI Automation", path: "/services/ai-automation", icon: Zap },
      { name: "AI Chatbots", path: "/services/ai-chatbot", icon: MessageCircle },
      { name: "Data Analytics / BI", path: "/services/data-analytics", icon: BarChart },
      { name: "IoT Solutions", path: "/services/iot-solutions", icon: Wifi },
      { name: "Cloud Solutions", path: "/services/cloud-solutions", icon: Cloud },
      { name: "DevOps & CI/CD", path: "/services/devops", icon: GitBranch },
      { name: "Cyber Security", path: "/services/cyber-security", icon: Shield },
    ]
  }
];

export const supportServices = [
  { name: "Website Maintenance", path: "/services/maintenance-support", icon: Headphones },
  { name: "Software Maintenance", path: "/services/maintenance-support", icon: Headphones },
  { name: "AMC & Technical Support", path: "/services/maintenance-support", icon: Headphones },
];
