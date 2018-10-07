export interface Genre {
  id: string;
}

export interface State {
  byId: { [key: string]: Genre };
  idList: ReadonlyArray<string>;
}
