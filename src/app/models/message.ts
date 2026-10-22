export class Message {
  id?: string;
  content: string;

  constructor(content: string, id?: string) {
    this.content = content;
    this.id = id;
  }
}
