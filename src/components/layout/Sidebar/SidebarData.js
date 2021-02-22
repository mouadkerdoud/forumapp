import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventNoteIcon from '@material-ui/icons/EventNote';
import EventIcon from '@material-ui/icons/Event';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GroupIcon from '@material-ui/icons/Group';

export const SidebarData = [


    {
        title:"Dashboard",
        icon:<DashboardIcon />,
        link:"/dashboard",
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
        title:"Users",
        icon:<GroupIcon />,
        link:"/users",
    },

    {
        title:"Log Out",
        icon:<ExitToAppIcon />,
        link:"/logout",
    }
]