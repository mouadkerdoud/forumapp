import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventNoteIcon from '@material-ui/icons/EventNote';
import EventIcon from '@material-ui/icons/Event';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GroupIcon from '@material-ui/icons/Group';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



export const SidebarData = [


    {
        title:"Dashboard",
        icon:<DashboardIcon />,
        link:"/dashboard",
    },

    {
        title:"Users",
        icon:<GroupIcon />,
        link:"/users",
    },

    {
        title:"Posts",
        icon:<EventNoteIcon />,
        link:"/posts",
    },

    {
        title:"Events",
        icon:<EventIcon />,
        link:"/events",
    },

    {
        title:"Account",
        icon:<AccountCircleIcon />,
        link:"/account",
    },

    {
        title:"Log Out",
        icon:<ExitToAppIcon />,
        link:"/logout",
    }
]