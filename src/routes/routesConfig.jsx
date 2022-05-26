import HomePage from '../containers/HomePage';
import IrregularVerbs from '../containers/IrregularVerbs';

const routesConfig = [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: 'grammar-trainers',
        element: <IrregularVerbs/>
    },
];

export {routesConfig as default};