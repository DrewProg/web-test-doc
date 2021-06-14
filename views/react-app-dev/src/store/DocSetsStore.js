import { makeAutoObservable } from 'mobx';

export default class DocSetsStore {
    constructor() {
        this._docset = {};
        this._docsets = [];
        makeAutoObservable(this);
    }

    setDocSet(docset) {
        this._docset = docset;
    }

    setDocSets(docsets) {
        this._docsets = docsets;
    }

    get docsets() {
        return this._docsets;
    }

    get docset() {
        return this._docset;
    }
}