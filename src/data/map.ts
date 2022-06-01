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
  markerSrc: string;
  popupOpen: boolean;
  popupAnchor: PointExpression;
  iconAnchor: PointExpression;
  smPopupAnchor: PointExpression;
  smIconAnchor: PointExpression;
  blurStyle: React.CSSProperties;
}

export const topSellerMarkers: ITopSellerMarker[] = [
  {
    state: "South Australia",
    coords: { lat: -32.842673631954305, lng: 137.81250000000003 },
    imgSrc: "images/south-australia.jpg",
    markerSrc: "images/markers/marker-sa.svg",
    popupOpen: true,
    popupAnchor: [-300, 250],
    iconAnchor: [250, 50],
    smPopupAnchor: [-120, 0],
    smIconAnchor: [14, 30],
    blurStyle: { height: "80px", bottom: "40px" },
  },
  {
    state: "Western Australia",
    coords: { lat: -31.57853542647338, lng: 115.66406250000001 },
    imgSrc: "images/western-australia.png",
    markerSrc: "images/markers/marker-wa.svg",
    popupOpen: true,
    popupAnchor: [-120, 120],
    iconAnchor: [20, 50],
    smPopupAnchor: [100, 30],
    smIconAnchor: [14, 30],
    blurStyle: { height: "90px", bottom: "55px" },
  },
  {
    state: "Northern Territory",
    coords: { lat: -15.453680224345835, lng: 135.96679687500003 },
    imgSrc: "images/northern-territory.png",
    markerSrc: "images/markers/marker-nt.svg",
    popupOpen: true,
    popupAnchor: [-400, 120],
    iconAnchor: [300, 100],
    smPopupAnchor: [-120, 160],
    smIconAnchor: [14, 30],
    blurStyle: { height: "80px", bottom: "27px" },
  },
  {
    state: "Queensland",
    coords: { lat: -25.324166525738384, lng: 152.66601562500003 },
    imgSrc: "images/queensland.png",
    markerSrc: "images/markers/marker-queensland.svg",
    popupOpen: true,
    popupAnchor: [50, -120],
    iconAnchor: [200, 300],
    smPopupAnchor: [-150, 30],
    smIconAnchor: [50, 30],
    blurStyle: { height: "80px", bottom: "40px" },
  },
  {
    state: "Victoria",
    coords: { lat: -37.857507156252034, lng: 144.75585937500003 },
    imgSrc: "images/victoria.png",
    markerSrc: "images/markers/marker-vic.svg",
    popupOpen: true,
    popupAnchor: [300, 150],
    iconAnchor: [-50, 30],
    smPopupAnchor: [0, -30],
    smIconAnchor: [14, 30],
    blurStyle: { height: "80px", bottom: "40px" },
  },
  {
    state: "Tasmania",
    coords: { lat: -41.57596410238255, lng: 147.04101562500003 },
    imgSrc: "images/tasmania.png",
    markerSrc: "images/markers/marker.svg",
    popupOpen: false,
    popupAnchor: [-130, 50],
    iconAnchor: [14, -30],
    smPopupAnchor: [0, -40],
    smIconAnchor: [0, 20],
    blurStyle: { height: "80px", bottom: "33px" },
  },
  {
    state: "Australian Capital Territory",
    coords: { lat: -35.38904996691167, lng: 149.01855468750003 },
    imgSrc: "images/australian-capital-territory.png",
    markerSrc: "images/markers/marker.svg",
    popupOpen: false,
    popupAnchor: [-100, -25],
    iconAnchor: [0, 0],
    smPopupAnchor: [-100, 0],
    smIconAnchor: [14, 0],
    blurStyle: { height: "80px", bottom: "35px" },
  },
  {
    state: "New South Wales",
    coords: { lat: -33.7243396617476, lng: 151.21582031250003 },
    imgSrc: "images/new-south-wales.png",
    markerSrc: "images/markers/marker-nsw.svg",
    popupOpen: true,
    popupAnchor: [175, -50],
    iconAnchor: [50, 200],
    smPopupAnchor: [-130, 80],
    smIconAnchor: [14, 30],
    blurStyle: { height: "85px", bottom: "30px" },
  },
];
