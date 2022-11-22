import { v4 as uuid } from 'uuid';

export const services = [
  {
    id: uuid(),
    createdAt: '27/03/2022',
    description: 'A Well know Gardener Who Trims Edges and pays attention to details',
    media: '/static/images/service/Garden1.webp',
    title: 'Gardening Service',
    totalWork: '594'
  },
  {
    id: uuid(),
    createdAt: '31/03/2022',
    description: 'Kind and gentle Heart Care Taker for you home, who can help during your date nights or hectic work shifts.',
    media: '/static/images/service/nanny.jpg',
    title: 'Nanny Service',
    totalWork: '625'
  },
  {
    id: uuid(),
    createdAt: '03/04/2022',
    description: 'Need help brightening up your night life or special light designs, Contact One of our Specialist for your lighting issues',
    media: '/static/images/service/lightM.webp',
    title: 'Light Maintenance Service',
    totalWork: '857'
  },
  // {
  //   id: uuid(),
  //   createdAt: '04/04/2022',
  //   description: 'Daily Life Coming coming in between regular chores, Find help from one of ours House Keepers who will leave your house cleaner than they arrived',
  //   media: '/static/images/service/Housing.webp',
  //   title: 'House Keeper',
  //   totalWork: '406'
  // },
  // {
  //   id: uuid(),
  //   createdAt: '04/04/2022',
  //   description: 'GitHub is a web-based hosting service for version control of code using Git.',
  //   media: 'C:/static/images/service/Housing.webp',
  //   title: 'GitHub',
  //   totalWork: '835'
  // },
  // {
  //   id: uuid(),
  //   createdAt: '04/04/2022',
  //   description: 'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
  //   media: '/static/images/service/product_6.png',
  //   title: 'Squarespace',
  //   totalWork: '835'
  // }
];
