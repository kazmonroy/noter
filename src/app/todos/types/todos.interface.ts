export interface Todo {
  id: string;
  text: string;
  isDone: boolean;
}

export enum Filters {
  all = 'all',
  active = 'active',
  done = 'done',
}
