import HomePage from '../containers/HomePage';
import IrregularVerbs from '../containers/IrregularVerbs';

const routesConfig = [
    {
        path: 'grammar-trainers',
        element: <IrregularVerbs/>
    },
    {
        path: '/',
        element: <HomePage/>
    }
];

export {routesConfig as default};