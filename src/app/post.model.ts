export class Post {
  $key: any;

  constructor (public title: string, public comment: string, public link: string, public votes?: number) {}
  upVote(): void {
    this.votes +=1;
  }

  downVote(): void {
    this.votes -=1;
  }
}
