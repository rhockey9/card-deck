import {CardProperties} from "./models/CardProperties";
import {DeckType} from "./models/DeckType";
import {Card} from "./models/Card";

// Expose models
export import DeckType = DeckType;
export type CardSuit = CardProperties.CardSuit;
export type StandardDeck = CardProperties.StandardDeck;
export type Card = Card;

export class CardDeck {

    private _deck: Card[];
    private _deckType: DeckType;

    constructor(deckType: DeckType){
        this._deckType = deckType
        this._deck = [];
        this.BuildStandardDeck();
    }

    public BuildStandardDeck(): void {
        // If this isn't a standard deck, ignore request.
        if(this._deckType != DeckType.Standard){
            return;
        }

        for (let cardSuit in CardProperties.CardSuit) {
            const suitNum = parseInt(cardSuit, 10);
            if (isNaN(suitNum)) {
                continue;
            }
        
            const suit: CardProperties.CardSuit = suitNum;

            for (let cardValue in CardProperties.StandardDeck) {
                const valueNum = parseInt(cardValue, 10);
                if (isNaN(valueNum)) {
                    continue;
                }
            
                const value: CardProperties.CardSuit = valueNum;
                let card: Card = new Card(this._deckType, suit, value);
                this._deck.push(card);
            }
        }

        this.Shuffle();
    }

    public Shuffle(): void {
        let shuffledDeck: Card[] = this._deck;
        this._deck = [];

        while(shuffledDeck.length > 0) {
            let cardIndex: number = Math.floor(Math.random() * shuffledDeck.length);
            let card: Card = shuffledDeck[cardIndex];
            this._deck.push(card);
            shuffledDeck.splice(cardIndex, 1);
        }
    }

    public DrawCard(): Card {
         return <Card>this._deck.pop();
    } 

    
}
