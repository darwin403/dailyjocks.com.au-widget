import { PointExpression } from "leaflet";

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

export interface IStateColors {
  [key: string]: { base: string; hover: string };
}

export const stateColors: IStateColors = {
  "South Australia": { base: "#FFFCCC", hover: "#FEEE00" },
  "New South Wales": { base: "#CEDBFF", hover: "#094CFF" },
  "Australian Capital Territory": { base: "#CEDBFF", hover: "#094CFF" },
  Queensland: { base: "#D2E6D3", hover: "#1E8121" },
  "Northern Territory": { base: "#FACDCC", hover: "#E50600" },
  "Western Australia": { base: "#FEE8CC", hover: "#FA8D02" },
  Victoria: { base: "#E4CEE7", hover: "#760A88" },
  Tasmania: { base: "#EEE6FD", hover: "#5409E8" },
};

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

export interface ITopSellerMarker {
  state: string;
  coords: {
    lat: number;
    lng: number;
  };
  imgSrc: string;
  popupAnchor: PointExpression;
  iconAnchor: PointExpression;
}

export const topSellerMarkers: ITopSellerMarker[] = [
  {
    state: "South Australia",
    coords: { lat: -32.842673631954305, lng: 137.81250000000003 },
    imgSrc: "images/Optimized-south-australia.jpg",
    popupAnchor: [0, -30],
    iconAnchor: [14, 30],
  },
  {
    state: "Western Australia",
    coords: { lat: -31.57853542647338, lng: 115.66406250000001 },
    imgSrc: "images/Optimized-western-australia.png",
    popupAnchor: [0, -30],
    iconAnchor: [14, 30],
  },
  {
    state: "Northern Territory",
    coords: { lat: -15.453680224345835, lng: 135.96679687500003 },
    imgSrc: "images/Optimized-northern-territory.jpg",
    popupAnchor: [0, 280],
    iconAnchor: [14, 30],
  },
  {
    state: "Queensland",
    coords: { lat: -25.324166525738384, lng: 152.66601562500003 },
    imgSrc: "images/Optimized-queensland.png",
    popupAnchor: [0, -30],
    iconAnchor: [14, 30],
  },
  {
    state: "Victoria",
    coords: { lat: -37.857507156252034, lng: 144.75585937500003 },
    imgSrc: "images/Optimized-victoria.png",
    popupAnchor: [0, -30],
    iconAnchor: [14, 30],
  },
  {
    state: "Tasmania",
    coords: { lat: -41.57596410238255, lng: 147.04101562500003 },
    imgSrc: "images/Optimized-tasmania.png",
    popupAnchor: [0, -30],
    iconAnchor: [14, 30],
  },
  {
    state: "Australian Capital Territory",
    coords: { lat: -35.38904996691167, lng: 149.01855468750003 },
    imgSrc: "images/Optimized-australian-capital-territory.png",
    popupAnchor: [0, -30],
    iconAnchor: [14, 30],
  },
  {
    state: "New South Wales",
    coords: { lat: -33.7243396617476, lng: 151.21582031250003 },
    imgSrc: "images/Optimized-new-south-wales.jpg",
    popupAnchor: [0, -30],
    iconAnchor: [14, 30],
  },
];
