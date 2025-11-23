import { ShieldCheck, CircleDollarSign, Truck, Headset } from 'lucide-react';

const services = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Secure Payments',
    description: 'Your payments are secure with our encrypted system.',
  },
  {
    icon: <CircleDollarSign className="h-10 w-10 text-primary" />,
    title: 'Money-Back Guarantee',
    description: 'Not satisfied? We offer a 30-day money-back guarantee.',
  },
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: 'Free Shipping',
    description: 'Enjoy free shipping on all orders over $50.',
  },
  {
    icon: <Headset className="h-10 w-10 text-primary" />,
    title: '24/7 Support',
    description: 'Our support team is here to help you around the clock.',
  },
];

export default function Services() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex items-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mr-6">{service.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
