export interface Premium {
  id: string;
  title: string;
  description: string;
  discount: number;
}

export const premium = [
  {
    id: '1',
    title: '1 Month',
    description: '$2.99/month, auto renewable',
    discount: 0,
  },
  {
    id: '2',
    title: '1 Year',
    description: 'First 3 days free, then $529,99/year',
    discount: 50,
  },
];
