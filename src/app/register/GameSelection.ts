export class GameSelection {
  name: string;
  dm : boolean;
  disabled: boolean;

  constructor(name:string, dm:boolean, disabled:boolean = false) {
    this.name = name;
    this.dm = dm;
    this.disabled = disabled;
  }
}
