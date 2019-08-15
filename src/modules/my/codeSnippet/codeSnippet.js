import { LightningElement, track, api } from 'lwc';

export default class CodeSnippet extends LightningElement {
    @track showResult;
    @api _codepenId;

    // need to track codepen changes. if there's a change, showResult = false
    @api
    get codepenId() {
        return this._codepenId;
    }
    set codepenId(value) {
        this._codepenId = value;
        this.showResult = false;
    }
    @api hideResult() {
        this.showResult = false;
    }
    @api showCodeSnippetResult() {
        const codepen = this.template.querySelector('my-code-snippet');
        codepen.seeAnswer();
    }
    get resultUrl() {
        const suffix = this.showResult ? 'result,js' : 'js';
        return '//jsfiddle.net/annyh/' + this.codepenId + '/embedded/' + suffix;
    }

    @api seeAnswer() {
        this.showResult = true;
    }
}
