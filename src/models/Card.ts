import {CardProperties} from "./CardProperties"
import {DeckType} from "./DeckType"

export class Card {
    public DeckType: DeckType;
    public Suit: CardProperties.CardSuit;
    public Value: number;

    constructor(deckType: DeckType, suit: CardProperties.CardSuit, value: number) {
        this.DeckType = deckType;
        this.Suit = suit;
        this.Value = value;
    }

    public ToString() : string {
        let retVal: string = "";
        switch(this.DeckType){
            case DeckType.Standard:
                retVal = CardProperties.StandardDeck[this.Value] + " of " + CardProperties.CardSuit[this.Suit];
                break;
            default:
                break;
        }
        return retVal;
    }
}