import { IPerson } from './person.model';


@Injectable()
export class PersonService {

    getPeople(): IPerson[] {
        return PEOPLE;
    }
}

const PEOPLE: IPerson[] = [
    {
        firstName: 'Luke',
        lastName: 'Skywalker',
        mostHelpfulWith: ['The Light Side', 'Tatooine Politics', 'Moisture Farming'],
        numClaps: 17
    },
    {
        firstName: 'Leia',
        lastName: 'Organa',
        mostHelpfulWith: ['Floating through space', 'The Rebellion', 'Summoning Obi-Wan Kenobi for help'],
        numClaps: 22
    },
    {
        firstName: 'Han',
        lastName: 'Solo',
        mostHelpfulWith: ['Smuggling', 'Shooting first', 'Escaping Pizza the Hut'],
        numClaps: 13
    },
    {
        firstName: 'Lando',
        lastName: 'Calrissian',
        mostHelpfulWith: ['Losing M. Falcon to Han', 'Betrayals at Bespin', 'Capes'],
        numClaps: 9
    },
    {
        firstName: 'Darth',
        lastName: 'Vader',
        mostHelpfulWith: ['The Dark Side', 'Shot putting the emperor', 'Getting the Death Star Blown Up'],
        numClaps: 24
    },
    {
        firstName: 'Yoda',
        lastName: '',
        mostHelpfulWith: ['The Light Side', 'Doing (but not trying)', '(Jedi) code reviews'],
        numClaps: 8
    }
]


export interface IPerson {
    firstName: string;
    lastName: string;
    mostHelpfulWith: string[];
    numVotes: number;
}