import {makeAutoObservable} from 'mobx';

export default class LogStore {
    constructor() {
        this._passVisibility = false;
        makeAutoObservable(this);
    }

    setPassVisibility(bool) {
        this._passVisibility = bool;
    }

    setFalsePassVisibility() {
        this._passVisibility = false;
    }

    get passVisibility() {
        return this._passVisibility;
    }
}