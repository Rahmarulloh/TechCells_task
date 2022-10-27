import ClockIn from "./ClockIn";
import ClockOut from "./ClockOut";

export let route1 = [
    {
        id:1,
        path:'/',
        element: <ClockIn/>
    }
];

export let route2 = [
    {
        id:1,
        path:'*',
        element: <ClockOut/>
    }
]

