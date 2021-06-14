import { makeAutoObservable } from 'mobx';

export default class ProjectStore {
    constructor() {
        this._project = {};
        this._projects = [];
        makeAutoObservable(this);
    }

    setProject(project) {
        this._project = project;
    }

    setProjects(projects) {
        this._projects = projects;
    }

    get projects() {
        return this._projects;
    }

    get project() {
        return this._project;
    }
}