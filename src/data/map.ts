import { PointExpression } from "leaflet";

export interface IStateLabelMarker {
  state: string;
  coords: { lat: number; lng: number };
}

export const stateLabelMarkers: IStateLabelMarker[] = [
  {
    state: "South Australia",
    coords: { lat: -29.446, lng: 136.125 },
  },
  {
    state: "Western Australia",
    coords: { lat: -26.7214, lng: 121.5736 },
  },
  {
    state: "Northern Territory",
    coords: { lat: -21.5, lng: 133.5 },
  },
  {
    state: "Queensland",
    coords: { lat: -23.8408, lng: 145.2684 },
  },
  {
    state: "Victoria",
    coords: { lat: -37.2104, lng: 142.9016 },
  },
  {
    state: "Tasmania",
    coords: { lat: -42.1405, lng: 146.485 },
  },
  {
    state: "New South Wales",
    coords: { lat: -32.2444, lng: 146.2656 },
  },
];

interface IStateAcronym {
  [key: string]: string;
}

export const stateAcronym: IStateAcronym = {
  "South Australia": "SA",
  "New South Wales": "NSW",
  "Australian Capital Territory": "ACT",
  Queensland: "QLD",
  "Northern Territory": "NT",
  "Western Australia": "WA",
  Victoria: "VIC",
  Tasmania: "TAS",
};

interface IToolTipData {
  [key: string]: {
    preferredStyle: string;
    newUndies: string;
    favColor: string;
  };
}

export const toolTipData: IToolTipData = {
  "South Australia": {
    preferredStyle: "Trunks",
    newUndies: "65",
    favColor: "Bright Colors & Patterns",
  },
  "New South Wales": {
    preferredStyle: "Briefs",
    newUndies: "92",
    favColor: "Light Blue & Pink",
  },
  "Australian Capital Territory": {
    preferredStyle: "Briefs",
    newUndies: "79",
    favColor: "White",
  },
  Queensland: {
    preferredStyle: "Briefs",
    newUndies: "80",
    favColor: "Neon & Navy",
  },
  "Northern Territory": {
    preferredStyle: "Briefs",
    newUndies: "131",
    favColor: "Patterns",
  },
  "Western Australia": {
    preferredStyle: "Trunks",
    newUndies: "106",
    favColor: "Red",
  },
  Victoria: {
    preferredStyle: "Jockstraps",
    newUndies: "90",
    favColor: "Navy, Black & Bright Blue",
  },
  Tasmania: { preferredStyle: "Briefs", newUndies: "50", favColor: "Black" },
};

export interface ITopSellerMarker {
  state: string;
  coords: {
    lat: number;
    lng: number;
  };
  imgSrc: string;
  markerSrc: {
    lg: string;
    md: string;
    sm: string;
  };
  popupOpen: boolean;
  popupAnchor: {
    lg: PointExpression;
    md: PointExpression;
    sm: PointExpression;
  };
  iconAnchor: {
    lg: PointExpression;
    md?: PointExpression;
    sm: PointExpression;
  };
  blurStyle: React.CSSProperties;
}

export const topSellerMarkers: ITopSellerMarker[] = [
  {
    state: "South Australia",
    coords: { lat: -32.842673631954305, lng: 137.81250000000003 },
    imgSrc: "images/models/south-australia.jpg",
    markerSrc: {
      lg: "images/markers/south-australia-lg.svg",
      md: "images/markers/south-australia-md.svg",
      sm: "images/markers/default.svg",
    },
    popupOpen: true,
    popupAnchor: {
      lg: [-300, 250],
      md: [-200, 270],
      sm: [-120, 0],
    },
    iconAnchor: {
      lg: [250, 50],
      md: [150, 25],
      sm: [14, 30],
    },
    blurStyle: { height: "80px", bottom: "40px" },
  },
  {
    state: "Western Australia",
    coords: { lat: -31.57853542647338, lng: 115.66406250000001 },
    imgSrc: "images/models/western-australia.png",
    markerSrc: {
      lg: "images/markers/western-australia-lg.svg",
      md: "images/markers/western-australia-md.svg",
      sm: "images/markers/default.svg",
    },
    popupOpen: true,
    popupAnchor: {
      lg: [-120, 120],
      md: [-120, 120],
      sm: [100, 30],
    },
    iconAnchor: {
      lg: [20, 50],
      md: [25, 50],
      sm: [14, 30],
    },
    blurStyle: { height: "90px", bottom: "55px" },
  },
  {
    state: "Northern Territory",
    coords: { lat: -15.453680224345835, lng: 135.96679687500003 },
    imgSrc: "images/models/northern-territory.png",
    markerSrc: {
      lg: "images/markers/northern-territory-lg.svg",
      md: "images/markers/northern-territory-md.svg",
      sm: "images/markers/default.svg",
    },
    popupOpen: true,
    popupAnchor: {
      lg: [-400, 120],
      md: [-280, 120],
      sm: [-120, 160],
    },
    iconAnchor: {
      lg: [300, 100],
      md: [175, 80],
      sm: [14, 30],
    },
    blurStyle: { height: "80px", bottom: "27px" },
  },
  {
    state: "Queensland",
    coords: { lat: -25.324166525738384, lng: 152.66601562500003 },
    imgSrc: "images/models/queensland.png",
    markerSrc: {
      lg: "images/markers/queensland-lg.svg",
      md: "images/markers/queensland-md.svg",
      sm: "images/markers/default.svg",
    },
    popupOpen: true,
    popupAnchor: {
      lg: [50, -120],
      md: [55, -80],
      sm: [-150, 30],
    },
    iconAnchor: {
      lg: [200, 300],
      md: [150, 200],
      sm: [50, 30],
    },

    blurStyle: { height: "80px", bottom: "40px" },
  },
  {
    state: "Victoria",
    coords: { lat: -37.857507156252034, lng: 144.75585937500003 },
    imgSrc: "images/models/victoria.png",
    markerSrc: {
      lg: "images/markers/victoria-lg.svg",
      md: "images/markers/victoria-md.svg",
      sm: "images/markers/default.svg",
    },
    popupOpen: true,
    popupAnchor: {
      lg: [300, 150],
      md: [200, 185],
      sm: [0, -30],
    },
    iconAnchor: {
      lg: [-50, 30],
      md: [-10, 10],
      sm: [14, 30],
    },

    blurStyle: { height: "80px", bottom: "40px" },
  },
  {
    state: "Tasmania",
    coords: { lat: -41.57596410238255, lng: 147.04101562500003 },
    imgSrc: "images/models/tasmania.png",
    markerSrc: {
      lg: "images/markers/default.svg",
      md: "images/markers/default.svg",
      sm: "images/markers/default.svg",
    },
    popupOpen: false,
    popupAnchor: {
      lg: [-130, 50],
      md: [-130, 50],
      sm: [0, -40],
    },
    iconAnchor: {
      lg: [14, -30],
      md: [14, -30],
      sm: [0, 20],
    },
    blurStyle: { height: "80px", bottom: "33px" },
  },
  {
    state: "Australian Capital Territory",
    coords: { lat: -35.38904996691167, lng: 149.01855468750003 },
    imgSrc: "images/models/australian-capital-territory.png",
    markerSrc: {
      lg: "images/markers/default.svg",
      md: "images/markers/default.svg",
      sm: "images/markers/default.svg",
    },
    popupOpen: false,
    popupAnchor: {
      lg: [-100, -25],
      md: [-100, -25],
      sm: [-100, 0],
    },
    iconAnchor: {
      lg: [0, 0],
      md: [0, 0],
      sm: [14, 0],
    },
    blurStyle: { height: "80px", bottom: "35px" },
  },
  {
    state: "New South Wales",
    coords: { lat: -33.7243396617476, lng: 151.21582031250003 },
    imgSrc: "images/models/new-south-wales.png",
    markerSrc: {
      lg: "images/markers/new-south-wales-lg.svg",
      md: "images/markers/new-south-wales-md.svg",
      sm: "images/markers/default.svg",
    },
    popupOpen: true,
    popupAnchor: {
      lg: [175, -50],
      md: [130, 25],
      sm: [-130, 80],
    },
    iconAnchor: {
      lg: [50, 200],
      md: [50, 100],
      sm: [14, 30],
    },
    blurStyle: { height: "85px", bottom: "30px" },
  },
];
