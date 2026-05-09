import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: '1',
    name: 'Portfolio Website',
    client: 'John Doe',
    status: 'in-progress',
    tasks: [
      { id: 't1', title: 'Design homepage', done: true },
      { id: 't2', title: 'Build UI components', done: false },
      { id: 't3', title: 'Deploy to Vercel', done: false },
    ],
  },
  {
    id: '2',
    name: 'E-commerce App',
    client: 'Acme Inc',
    status: 'completed',
    tasks: [
      { id: 't4', title: 'Setup database', done: true },
      { id: 't5', title: 'Implement checkout', done: true },
    ],
  },
];
