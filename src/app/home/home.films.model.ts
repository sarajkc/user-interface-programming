export interface Film {
    id: number;
    name: string;
    duration:string;
    description:string;
    genre:string;
    director:string;
    actors:string[];
    releaseDate:string;
    screening:string[];
    screening_date: Date;
    ticketPrice:number;
    rating:number;
    image:string;
    isUpcoming:boolean;
}