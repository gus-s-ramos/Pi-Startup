import { Injectable } from "@angular/core";
import { Protocol } from "../models/protocol.model";

@Injectable( {
    providedIn: 'root'
})
export class ProtocolService {
    getProtocols(): Protocol[] {
        return [
            { 
                id: 1,
                title: 'Protocol 1',
                image: '',
                description:'Uma breve descrição sobre o protocolo 1'
            },
            { 
                id: 2,
                title: 'Protocol 2',
                image: '',
                description:'Uma breve descrição sobre o protocolo 2'
            },
            { 
                id: 3,
                title: 'Protocol 3',
                image: '',
                description:'Uma breve descrição sobre o protocolo 3'
            },
            { 
                id: 3,
                title: 'Protocol 3',
                image: '',
                description:'Uma breve descrição sobre o protocolo 3'
            },
            { 
                id: 4,
                title: 'Protocol 4',
                image: '',
                description:'Uma breve descrição sobre o protocolo 4'
            },


        ]
    }

    getProtocol( id:number): Protocol {
        return this.getProtocols(). find((protocol) => protocol.id == id);
    }
}