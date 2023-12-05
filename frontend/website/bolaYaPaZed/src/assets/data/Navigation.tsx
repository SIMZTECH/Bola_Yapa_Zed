/* eslint-disable @typescript-eslint/no-explicit-any */
import { AiTwotoneAppstore } from "react-icons/ai";
import { IoShirtOutline } from "react-icons/io5";
import { CgEditBlackPoint } from "react-icons/cg";
import { BiTransfer } from "react-icons/bi";
import { CiViewTable } from "react-icons/ci";
import { IoFootballOutline } from "react-icons/io5";
import { GiBinoculars } from "react-icons/gi";

export type navItemsType = {
    name:string,
    icon:any,
    path:string
}

export const adminNav:navItemsType[] = [
    {
        name:"Overview",
        icon:<AiTwotoneAppstore />,
        path:"/admin/dashbord"
    },
    {
        name:"My Team",
        icon:<IoShirtOutline />,
        path:"/admin/team"
    },
    {
        name:"Points",
        icon:<CgEditBlackPoint/>,
        path:"/admin/points"
    },
    {
        name:"Transfers",
        icon:<BiTransfer />,
        path:"/admin/transfers"
    },
    {
        name:"League",
        icon:<CiViewTable/>,
        path:"/admin/league"
    },
    {
        name:"Fixture",
        icon:<IoFootballOutline />,
        path:"/admin/fixtures"
    },
    {
        name:"Scouts",
        icon:<GiBinoculars />,
        path:"/admin/scouts"
    },
]

