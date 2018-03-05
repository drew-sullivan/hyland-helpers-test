import { IPerson } from './person.model';
import { Injectable } from '@angular/core';


@Injectable()
export class PersonService {

    getPeople(): IPerson[] {
        return PEOPLE;
    }

    getPerson(id: number): IPerson {
        return PEOPLE.find(person => person.id === id);
    }

    addClap(id: number): void {
        const clappedPerson = PEOPLE.find(person => person.id === id);
        clappedPerson.numClaps += 1;
    }
}

const PEOPLE: IPerson[] = [
    {
        id: 1,
        firstName: 'Luke',
        lastName: 'Skywalker',
        mostHelpfulWith: ['The Light Side', 'Tatooine Politics', 'Moisture Farming'],
        numClaps: 17
    },
    {
        id: 2,
        firstName: 'Leia',
        lastName: 'Organa',
        mostHelpfulWith: ['Floating through space', 'The Rebellion', 'Summoning Obi-Wan Kenobi for help'],
        numClaps: 22
    },
    {
        id: 3,
        firstName: 'Han',
        lastName: 'Solo',
        mostHelpfulWith: ['Smuggling', 'Shooting first', 'Escaping Pizza the Hut'],
        numClaps: 13
    },
    {
        id: 4,
        firstName: 'Lando',
        lastName: 'Calrissian',
        mostHelpfulWith: ['Losing M. Falcon to Han', 'Betrayals at Bespin', 'Capes'],
        numClaps: 9
    },
    {
        id: 5,
        firstName: 'Darth',
        lastName: 'Vader',
        mostHelpfulWith: ['The Dark Side', 'Shot putting the emperor', 'Getting the Death Star Blown Up'],
        numClaps: 24
    },
    {
        id: 6,
        firstName: 'Yoda',
        lastName: '',
        mostHelpfulWith: ['The Light Side', 'Doing (but not trying)', '(Jedi) code reviews'],
        numClaps: 8
    }
];
