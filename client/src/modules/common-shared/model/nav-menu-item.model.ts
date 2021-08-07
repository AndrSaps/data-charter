export class NavMenuitem{
  order?: number;
  children?: NavMenuitem[];
  title: string;
  isExpanded: boolean;
  iconClass: string;

  constructor (model) {
    Object.assign(this, model);
  }
}