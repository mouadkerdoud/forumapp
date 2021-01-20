import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventNoteIcon from '@material-ui/icons/EventNote';
import EventIcon from '@material-ui/icons/Event';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const SidebarData = [

    {
        title:"Home",
        icon:<HomeIcon />,
        link:"/home",
    },

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
        title:"Log Out",
        icon:<ExitToAppIcon />,
        link:"/logout",
    }
]