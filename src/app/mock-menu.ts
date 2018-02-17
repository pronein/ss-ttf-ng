import {MenuItem} from './menu-item';

export const MENU: MenuItem[] =
  [
    {
      name: 'Trips',
      subItems: [
        {name: 'Current', subItems: []},
        {name: 'Historical', subItems: []}
      ]
    },
    {
      name: 'Lists',
      subItems: [
        {name: 'Create', subItems: []},
        {name: 'View', subItems: []}
      ]
    },
    {
      name: 'Contests',
      subItems: [
        {name: 'Current', subItems: []},
        {name: 'Historical', subItems: []}
      ]
    },
    {
      name: 'Schedule',
      subItems: [
        {name: 'Daily', subItems: []},
        {name: 'Weekly', subItems: []}
      ]
    }
  ];
