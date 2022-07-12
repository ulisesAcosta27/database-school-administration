import { typeNote } from '../interface/notes.interface';

export interface INotes {
  id?: number;
  type: typeNote[];
  date: Date;
  quantity: string;
}
