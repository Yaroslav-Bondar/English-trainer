import HomePage from '@containers/HomePage';
import Exercises from '@containers/Exercises';

export const mainRoutesConfig = [
    {
        path: 'home',
        element: <HomePage/>
    },
    {
        path: 'exercises/*',
        element: <Exercises/>
    },
];

// export {routesConfig as default};

// export const exerciseRoutesConfig = [
//     {
//         path:"present",
//         name:"present",
//         // icon:<FaTh/>
//     },
//     {
//         path:"irregular-verbs",
//         name:"irregular-verbs",
//         // icon:<FaTh/>
//     },
//     // {
//     //     path:"present-simple-positive-be",
//     //     name:"present-simple-positive-be",
//     //     // element: 
//     //     // icon:<FaTh/>
//     // },
//     // {
//     //     path:"present-simple-positive-1",
//     //     name:"present-simple-positive-1",
//     //     // icon:<FaTh/>
//     // },
// ]

// export const exerciseElementRoutesConfig = 
