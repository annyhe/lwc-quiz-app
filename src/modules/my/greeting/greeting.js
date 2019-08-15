import { LightningElement, track, api } from 'lwc';

export default class Greeting extends LightningElement {
    @track showResult;
    @api codepenId;
    get resultUrl() {
        const suffix = this.showResult ? 'result,js' : 'js';
        return '//jsfiddle.net/annyh/' + this.codepenId + '/embedded/' + suffix; 
    }

    @api seeAnswer() {
        this.showResult = true;
    }
}
