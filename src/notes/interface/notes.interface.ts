export enum typeNote {
  HOMEWORK = 'HOMEWORK',
  ORAL_LESSON = 'ORAL_LESSON',
  EVALUATION = 'EVALUATION',
  QUARTERLT_NOTE = 'QUARTERLT_NOTE',
}

export interface INotes {
  id?: number;
  type: typeNote[];
  date: Date;
  quantity: string;
}
