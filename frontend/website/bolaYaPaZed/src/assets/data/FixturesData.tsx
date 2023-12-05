import img01 from '../../assets/images/teams/barcelona_03.png';
import img02 from '../../assets/images/teams/man_city_02.png';
import img03 from '../../assets/images/teams/man_u_01.png';

export type fixureDataType={
    awayTeam_img:string,
    homeTeam_img:string,
    time:string,
    stadium_name:string
}

export const fixuresData:fixureDataType[] = [
    {
        awayTeam_img:img01,
        homeTeam_img:img02,
        time:"12:30",
        stadium_name:"standford bridge"
    },
    {
        awayTeam_img:img03,
        homeTeam_img:img02,
        time:"15:00",
        stadium_name:"Dean Court"
    },
    {
        awayTeam_img:img03,
        homeTeam_img:img01,
        time:"15:00",
        stadium_name:"Ethihad"
    },
    {
        awayTeam_img:img01,
        homeTeam_img:img03,
        time:"15:00",
        stadium_name:"Goodson Park"
    },
    {
        awayTeam_img:img03,
        homeTeam_img:img02,
        time:"15:00",
        stadium_name:"Levy Mwanawasa"
    },
]