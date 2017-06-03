export class Review {
    title: string;
    content: string;
    rating: number = 0;

    constructor(public author: string) {}
}

