// Course names match Part 1's wireframes (Figures 1-3): Starters, Mains, Dessert.
export type Course = 'Starters' | 'Mains' | 'Dessert';

export interface MenuItem {
  id: string;
  dishName: string;
  description: string;
  course: Course;
  price: number;
}

export const COURSES: Course[] = ['Starters', 'Mains', 'Dessert'];

// Screens in the navigation stack -- matches Figure 4's flow
// (Home <-> Manage Menu). Filter by Course is deferred to the Final PoE.
export type RootStackParamList = {
  Home: undefined;
  ManageMenu: undefined;
};
