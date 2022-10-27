import ClockIn from "./ClockIn";
import ClockOut from "./ClockOut";
import Pin from "./Pin";

export let route1 = [
    {
        id:1,
        path:'/',
        element: <ClockIn/>
    },
    {
        id:2,
        path:'/',
        element: <ClockOut/>
    }
];

export let route2 = [
    {
        id:1,
        path:'*',
        element: <Pin />
    }
]

