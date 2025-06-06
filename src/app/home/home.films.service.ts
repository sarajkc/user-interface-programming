import { Injectable } from "@angular/core";
import { Film } from "./home.films.model";

@Injectable({
    providedIn:"root"
})

export class HomeFilmsService{
    private films: Film[] = [
        {
            id: 1,
            name: 'Nosferatu',
            duration:'2h 12min',
            description:'A gothic tale of obsession between a haunted young woman and the terrifying vampire infatuated with her, causing untold horror in its wake.',
            genre:'horror',
            director:'Robert Eggers',
            actors:['Lily-Rose Depp','Nicholas Hoult','Bill Skarsgard'],
            releaseDate:'2024',
            screening:['19:30', '21:30'],
            screening_date:new Date ('2025-05-18'),
            ticketPrice:450,
            rating:7.2,
            image:'nosferatu.jpg', 
            isUpcoming: false
        },

        {
            id: 2,
            name: 'The Apprentice',
            duration:'2h 2min',
            description:'A young man took over his father\'s real-estate business in 1970s and 80\'s New York, and got the helping hand of an infamous closeted gay lawyer who helped him turn this young man into a notorious legend.',
            genre:'drama',
            director:'Ali Abbasi',
            actors:['Sebastian Stan','Jeremy Strong','Martin Donovan'],
            releaseDate:'2024',
            screening:['17:15', '20:00', '22:15'],
            screening_date:new Date ('2025-05-18'),
            ticketPrice:400,
            rating:7.1,
            image:'apprentice.jpg',
            isUpcoming: false
        },

        {
            id: 3,
            name: 'Blink Twice',
            duration:'1h 42min',
            description:'When tech billionaire Slater King meets cocktail waitress Frida at his fundraising gala, he invites her to join him and his friends on a dream vacation on his private island. As strange things start to happen, Frida questions her reality.',
            genre:'psychological thriller',
            director:'Zoë Kravitz',
            actors:['Naomi Ackie','Channing Tatum','Alia Shawkat'],
            releaseDate:'2024',
            screening:['17:20', '18:30', '19:30'],
            screening_date:new Date ('2025-05-18'),
            ticketPrice:400,
            rating:6.5,
            image:'blinktwice.jpg',
            isUpcoming: false
        },

        {
            id: 4,
            name: 'Together',
            duration:'1h 42min',
            description:'A couple\'s move to the countryside triggers a supernatural incident that drastically alters their relationship, existence and physical form.',
            genre:'horror',
            director:'Michael Shanks',
            actors:['Dave Franco','Alison Brie','Damon Herriman'],
            releaseDate:'2025',
            screening:['20:30', '22:15'],
            screening_date:new Date ('2025-05-18'),
            ticketPrice:450,
            rating:6.0,
            image:'together.jpg', 
            isUpcoming: false
        },

        {
            id: 5,
            name: 'Maria',
            duration:'2h 4min',
            description:'Maria Callas, the world\'s greatest opera singer, lives the last days of her life in 1970s Paris, as she confronts her identity.',
            genre:'drama',
            director:'Pablo Larraín',
            actors:['Angelina Jolie','Alba Rohrwacher','Pierfrancesco Favino'],
            releaseDate:'2024',
            screening:['20:30', '22:15', '23:00'],
            screening_date:new Date ('2025-05-18'),
            ticketPrice:450,
            rating:6.4,
            image:'maria.jpg', 
            isUpcoming: false
        },


        {
            id: 6,
            name: 'The Beekeeper',
            duration:'1h 45min',
            description:'A kind-hearted landlady commits suicide after falling victim to a phishing scam, leading former "Beekeeper" operative Adam Clay to set out on a brutal campaign for revenge upon those responsible.',
            genre:'action',
            director:'David Ayer',
            actors:['Jason Statham','Bobby Naderi','Emmy Raver-Lampman'],
            releaseDate:'2024',
            screening:['20:15', '22:30'],
            screening_date:new Date ('2025-05-18'),
            ticketPrice:450,
            rating:6.3, 
            image:'beekeeper.jpg', 
            isUpcoming: false
        },


        {
            id: 7,
            name: 'Audrey\'s children',
            duration:'1h 50min',
            description:'1969. Dr. Audrey Evans joins world-renowned children\'s hospital and battles sexism, medical conventions, and the subterfuge of her peers to develop revolutionary treatments and purchase the first Ronald McDonald House, impacting millions.',
            genre:'biography',
            director:'Ami Canaan Mann',
            actors:['Jimmi Simpson','Natalie Dormer','Clancy Brown'],
            releaseDate:'2024',
            screening:['20:15', '22:30'],
            screening_date:new Date ('2025-05-18'),
            ticketPrice:450,
            rating:7.0,
            image:'children.jpg',
            isUpcoming: false
        },
    {

        id: 8,
        name: 'Joker: Folie à Deux',
        duration:'2h 18min',
        description:'Struggling with his dual identity, failed comedian Arthur Fleck meets the love of his life, Harley Quinn, while incarcerated at Arkham State Hospital.',
        genre:'musical crime',
        director:'Todd Phillips',
        actors:['Joaquin Phoenix','Lady Gaga','Brendan Gleeson'],
        releaseDate:'2024',
        screening:['20:15', '22:30'],
        screening_date:new Date ('2025-05-18'),
        ticketPrice:450,
        rating:5.2,
        image:'joker.jpg',
        isUpcoming: false
    },
{
    id: 9,
    name: 'Dune: Part Two',
    duration:'2h 46min',
    description:'Paul Atreides unites with the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he endeavors to prevent a terrible future. ',
    genre:'science fiction',
    director:'Denis Villeneuve',
    actors:['Rebecca Ferguson','Timothée Chalamet','Zendaya'],
    releaseDate:'2024',
    screening:['20:15', '22:30'],
    screening_date:new Date ('2025-05-18'),
    ticketPrice:450,
    rating:8.5,
    image:'dune.jpg',
    isUpcoming: false
},

    {
id:10,
name: 'A Complete Unknown',
duration:'2h 21min',
description:'In 1961, an unknown 19-year-old Bob Dylan arrives in New York City with his guitar and forges relationships with musical icons on his meteoric rise, culminating in a groundbreaking performance that reverberates around the world.',
genre:'musical',
director:'James Mangold',
actors:['Timothée Chalamet','Edward Norton','Elle Fanning'],
releaseDate:'2024',
screening:['20:15', '22:30'],
screening_date:new Date ('2025-05-18'),
ticketPrice:450,
rating:7.4,
image:'unknown.jpg',
isUpcoming: false
},

{
id: 11,
name: 'The Substance',
duration:'2h 21min',
description:'A fading celebrity takes a black-market drug: a cell-replicating substance that creates a younger, better version of herself.',
genre:'horror',
director:'Coralie Fargeat',
actors:['Demi Moore','Margaret Qualley','Dennis Quaid'],
releaseDate:'2024',
screening:['20:15', '22:30'],
screening_date:new Date ('2025-05-18'),
ticketPrice:450,
rating:7.3,
image:'substance.jpg',
isUpcoming: false
},

{
    id: 12,
    name: 'Mufasa: The Lion King',
    duration:'1h 58min',
    description:'Mufasa, a cub lost and alone, meets a sympathetic lion named Taka, the heir to a royal bloodline. The chance meeting sets in motion an expansive journey of a group of misfits searching for their destiny.',
    genre:'adventure',
    director:'Berry Jenkins',
    actors:['Aaron Pierre','Kelvin Harrison Jr.','Tifanny Boone'],
    releaseDate:'2024',
    screening:['20:15', '22:30'],
    screening_date:new Date ('2025-05-18'),
    ticketPrice:450,
    rating:6.6,
    image:'mufasa1.jpg',
    isUpcoming: false
    }
  
    ]

 private upcomingFilms: Film[] = [
    {
        id: 1,
        name: 'Thunderbolts',
        duration:'2h 6min',
        description:'After finding themselves ensnared in a death trap, an unconventional team of antiheroes must embark on a dangerous mission that will force them to confront the darkest corners of their pasts.',
        genre:'action',
        director:'Jake Schreier',
        actors:['Florence Pugh','Sebastian Stan'],
        releaseDate:'2025',
        screening:[],
        screening_date:new Date ('2025-06-2'),
        ticketPrice:0,
        rating:0,
        image:'thunderbolts.png',
        isUpcoming: true
        },

        {
            id: 2,
            name: 'The Amateur',
            duration:'2h 2min',
            description:'When his supervisors at the CIA refuse to take action after his wife is killed in a London terrorist attack, a decoder takes matters into his own hands.',
            genre:'action',
            director:'James Hawes',
            actors:['Rami Malek','Rachel Brosnahan','Jon Bernthal'],
            releaseDate:'2025',
            screening:[],
            screening_date:new Date ('2025-06-28'),
            ticketPrice:0,
            rating:0,
            image:'amateur.jpg',
            isUpcoming: true
            },


            {
                id: 3,
                name: 'Another Simple Favor',
                duration:'2h',
                description:'Stephanie Smothers and Emily Nelson reunite on the island of Capri, Italy for Emily\'s extravagant wedding to a rich Italian businessman, which is interrupted by murder and betrayal.',
                genre:'comedy',
                director:'Paul Feig',
                actors:['Blake Lively','Anna Kendrick'],
                releaseDate:'2025',
                screening:[],
                screening_date:new Date ('2025-06-15'),
                ticketPrice:0,
                rating:0,
                image:'simple-favor.jpg',
                isUpcoming: true
                },

                {
                    id: 4,
                    name: 'Mission: Impossible - The Final Reckoning',
                    duration:'2h 49min',
                    description:'Our lives are the sum of our choices. Tom Cruise is Ethan Hunt in Mission: Impossible - The Final Reckoning.',
                    genre:'adventure',
                    director:'Christopher McQuarrie',
                    actors:['Tom Cruise','Pom Klementieff','Hayley Atwell'],
                    releaseDate:'2025',
                    screening:[],
                    screening_date:new Date ('2025-06-30'),
                    ticketPrice:0,
                    rating:0,
                    image:'mission-impossible.jpg',
                    isUpcoming: true
                    },
             {
                        id: 5,
                        name: 'Now You See Me: Now You Don\'t',
                        duration:'1h 52min',
                        description:'A diamond heist reunites retired Horsemen illusionists with new performers Greenblatt, Smith and Sessa as they target dangerous criminals.',
                        genre:'crime',
                        director:'Ruben Fleischer',
                        actors:['Jesse Eisenberg','Woody Harrelson','James Franco'],
                        releaseDate:'2025',
                        screening:[],
                        screening_date:new Date ('2025-06-16'),
                        ticketPrice:0,
                        rating:0,
                        image:'now-you-see-me.png',
                        isUpcoming: true
                        },


                 {
                            id: 6,
                            name: 'Sinners',
                            duration:'2h 17min',
                            description:'Trying to leave their troubled lives behind, twin brothers return to their hometown to start again, only to discover that an even greater evil is waiting to welcome them back.',
                            genre:'drama',
                            director:'Ryan Coogler',
                            actors:['Miles Caton','Saul Williams','Andrene Ward-Hammond'],
                            releaseDate:'2025',
                            screening:[],
                            screening_date:new Date ('2025-06-13'),
                            ticketPrice:0,
                            rating:0,
                            image:'sinners.jpg',
                            isUpcoming: true
                            },
 ]


    getFilms(): Film[]{
        return this.films
    }

    getUpcomingFilms(): Film[]{
        return this.upcomingFilms;
    }

    getSpecificGenres(): string[]{
        const genres: string[]=[];
        this.films.forEach(film=>{
            if(!genres.includes(film.genre)){
                genres.push(film.genre);
            
            }
})    
  return genres;

} 





getFilteredFilmByGenre(genre : string):Film[]{
    return this.films.filter(film => film.genre === genre);
 }

  getSearchedFilms(searchWords : string) : Film[]{

    return this.films.filter (film=>(
   
        film.name.toLocaleLowerCase().includes(searchWords.toLocaleLowerCase())));
    
        
    } 



sortByPriceDesc(films: Film[]): Film[] {
        return films.slice().sort((a,b) => {
            return b.ticketPrice - a.ticketPrice;
     });
    }

 sortByPriceAsc(films: Film[]): Film[] {
    return films.slice().sort((a,b) => {
        return a.ticketPrice - b.ticketPrice;
 });
}

sortByRatingDesc(films: Film[]): Film[] {
    return films.slice().sort((a,b) => {
        return b.rating - a.rating;
 });
}

sortByRatingAsc(films: Film[]): Film[] {
    return films.slice().sort((a,b) => {
        return a.rating - b.rating;
 });
}


parseDuration( duration: string):number{
    const hours= parseInt((duration.match(/(\d+)h/)?.[1] || '0'),10);
    const minutes= parseInt((duration.match( /(\d+)min/)?.[1] || '0'),10);
    return hours * 60 + minutes;
}

sortByDurationDesc(films: Film[]): Film[] {
    return films.slice().sort((a,b) => {
        return this.parseDuration(b.duration) - this.parseDuration(a.duration);
 });
}

sortByDurationAsc(films: Film[]): Film[] {
    return films.slice().sort((a,b) => {
        return this.parseDuration(a.duration) - this.parseDuration(b.duration);
 });
}

}