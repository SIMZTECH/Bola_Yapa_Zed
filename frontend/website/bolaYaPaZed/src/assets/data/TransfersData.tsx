import profileImg from '../images/pd20_img04.png';

export type transfersDataType = {
  id: string;
  name: string;
  profile_img: string;
  team: string;
  role: string;
  net_worth: number;
  transfer_status:string
};

export const TransfersData:transfersDataType[]=[
    {
        id:"01",
        name:"Harzard",
        profile_img:profileImg,
        team:"chelsea",
        role:"fwd",
        net_worth:286.938,
        transfer_status:"in"

    },
    {
        id:"02",
        name:"Doherty",
        profile_img:profileImg,
        team:"wolves",
        role:"def",
        net_worth:157.876,
        transfer_status:"in"

    },
    {
        id:"03",
        name:"Lacazette",
        profile_img:profileImg,
        team:"arsenal",
        role:"fwd",
        net_worth:156.597,
        transfer_status:"in"

    },
    {
        id:"04",
        name:"Wilson",
        profile_img:profileImg,
        team:"bounmouth",
        role:"fwd",
        net_worth:154.614,
        transfer_status:"in"

    },
    {
        id:"05",
        name:"Richarlison",
        profile_img:profileImg,
        team:"everton",
        role:"mid",
        net_worth:106.807,
        transfer_status:"in"

    },
    {
        id:"06",
        name:"Holebas",
        profile_img:profileImg,
        team:"watford",
        role:"def",
        net_worth:221.102,
        transfer_status:"out"

    },
    {
        id:"07",
        name:"Salah",
        profile_img:profileImg,
        team:"liverpool",
        role:"fwd",
        net_worth:103.220,
        transfer_status:"out"

    },
    {
        id:"08",
        name:"Moura",
        profile_img:profileImg,
        team:"tottenam",
        role:"mid",
        net_worth:87.736,
        transfer_status:"out"

    },
    {
        id:"09",
        name:"Zaha",
        profile_img:profileImg,
        team:"crystal palace",
        role:"mid",
        net_worth:84.348,
        transfer_status:"out"

    },
    {
        id:"10",
        name:"Kane",
        profile_img:profileImg,
        team:"everton",
        role:"fwd",
        net_worth:77.305,
        transfer_status:"out"

    }
    
]