import { LightningElement, track, api } from 'lwc';

export default class Greeting extends LightningElement {
    @track showResult;
    @api codepenId = 'rNBeOwV';
    get resultUrl() {
        const suffix = this.showResult ? ',result' : '';
        return (
            '//codepen.io/annyhe/embed/' +
            this.codepenId +
            '/?height=265&theme-id=0&default-tab=js' +
            suffix
        );
    }

    seeAnswer() {
        this.showResult = true;
    }
}
