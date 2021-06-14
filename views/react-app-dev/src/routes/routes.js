import AddProject from "../components/pages/AddProject";
import Auth from "../components/pages/Auth";
import Main from "../components/pages/Main";
import Projects from "../components/pages/Projects";
import Project from "../components/pages/Project";
import AddDocSet from "../components/pages/AddDocSet";
import DocSet from "../components/pages/DocSet";
import AddDoc from "../components/pages/AddDoc";
import {
    LOGIN_ROUTE,
    MAIN_ROUTE,
    PROJECTS_ROUTE,
    REG_ROUTE,
    ADD_PROJECT_ROUTE,
    ADD_DOCSET_ROUTE,
    DOCSET_ROUTE,
    DOC_ROUTE,
    ADD_DOC_ROUTE
} from "../utils/consts";


export const authRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: PROJECTS_ROUTE,
        Component: Projects
    },
    {
        path: PROJECTS_ROUTE + '/:id',
        Component: Project
    },
    {
        path: ADD_PROJECT_ROUTE,
        Component: AddProject
    },
    {
        path: ADD_DOCSET_ROUTE,
        Component: AddDocSet
    },
    {
        path: PROJECTS_ROUTE + '/:id' + DOCSET_ROUTE + '/:id',
        Component: DocSet
    },
    {
        path: PROJECTS_ROUTE + '/:id' + DOCSET_ROUTE + '/:id' + DOC_ROUTE + '/:id',
        Component: DocSet
    },
    {
        path: ADD_DOC_ROUTE,
        Component: AddDoc
    }
];
export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REG_ROUTE,
        Component: Auth
    }
];