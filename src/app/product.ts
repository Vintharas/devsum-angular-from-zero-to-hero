export interface Product {
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    specs?: Specification[];
    reviews?: Review[];
}

export interface Specification {
    name: string;
    value: string;
}

export interface Review {
    title: string;
    content: string;
    author: string;
    rating: number;
}