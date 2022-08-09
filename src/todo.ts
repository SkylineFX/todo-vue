export class Todo {
  checked: boolean;
  text: string
 
  constructor(checked: boolean, text: string) {
    this.checked = checked;
    this.text = text
  }
}