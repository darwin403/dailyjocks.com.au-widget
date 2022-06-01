import { MapContainer, GeoJSON, Popup, Marker, useMap } from "react-leaflet";
import { useWindowSize } from "@react-hook/window-size";
import {
  geoJSON,
  divIcon,
  icon,
  PathOptions,
  GeoJSON as IGeoJSON,
  Marker as IMarker,
} from "leaflet";
import australiaGeoJson from "../data/australia.json";
import { GeoJsonObject, Feature } from "geojson";
import {
  stateLabelMarkers,
  IStateLabelMarker,
  topSellerMarkers,
  ITopSellerMarker,
  stateAcronym,
  toolTipData,
} from "../data";
import ReactDOMServer from "react-dom/server";

// eslint-disable-next-line
import "leaflet/dist/leaflet.css";
import "./Map.scss";
import styles from "./Map.module.scss";
import { useEffect, useRef } from "react";

const isDesktop = window.innerWidth >= 1440;

export function Map() {
  const geoJson = geoJSON(australiaGeoJson as GeoJsonObject);

  return (
    <section>
      <div className={styles.container} style={{ margin: 0 }}>
        <div className={styles.row}>
          <div className={styles.column}>
            <header className={styles.header}>
              <h1 className={styles.title}>Underwear Down Under</h1>
              <h2 className={styles.subTitle}>
                Data reveals The Jockstrap Capital of Australia & each states
                underwear buying habits
              </h2>
            </header>
          </div>
        </div>
      </div>
      <MapContainer
        bounds={geoJson.getBounds()}
        attributionControl={false}
        touchZoom={false}
        dragging={!isDesktop}
        doubleClickZoom={false}
        zoomControl={false}
        scrollWheelZoom={false}
        keyboard={false}
        tap={false}
        zoomSnap={isDesktop ? 1 : 0.1}
        zoomDelta={0.2}
        style={{
          width: "100%",
          height: "80vw",
          maxHeight: "1000px",
        }}
      >
        <ResizeMapWindow />

        {/* Australia Map */}
        <GeoJSON
          data={geoJson.toGeoJSON()}
          style={stateStyleFunction("base")}
          onEachFeature={(feature, layer: IGeoJSON) => {
            // State Tooltip
            layer.bindTooltip(
              ReactDOMServer.renderToString(stateTooltipHTML(feature)),
              {
                offset: [16, 0],
                opacity: 1,
                sticky: true,
              }
            );

            // hover effects
            layer.on("mouseover", (e) =>
              layer.setStyle(stateStyleFunction("hover"))
            );
            layer.on("mouseout", (e) =>
              layer.setStyle(stateStyleFunction("base"))
            );
          }}
        />

        {/* State Labels */}
        {stateLabelMarkers.map((stateLabelMarker, i) => (
          <Marker
            position={stateLabelMarker.coords}
            key={i}
            icon={divIcon({
              html: ReactDOMServer.renderToString(
                stateLabelsHTML(stateLabelMarker)
              ),
              className: "",
            })}
          />
        ))}

        {/* Popup Images */}
        {topSellerMarkers.map((topSellerMarker, i) => (
          <TopSellerMarker topSellerMarker={topSellerMarker} key={i} />
        ))}
      </MapContainer>
    </section>
  );
}

// ! Not working when iframe width changes
const ResizeMapWindow = () => {
  const map = useMap();
  const [windowWidth, windowHeight] = useWindowSize();

  useEffect(() => {
    setTimeout(() => {
      map?.invalidateSize();
    }, 400);
  }, [windowWidth, windowHeight, map]);

  return null;
};

interface ITopSellerMarkerProps {
  topSellerMarker: ITopSellerMarker;
}

const TopSellerMarker: React.FC<ITopSellerMarkerProps> = ({
  topSellerMarker,
}) => {
  const markerRef = useRef<IMarker>(null);

  useEffect(() => {
    if (isDesktop && topSellerMarker.popupOpen) {
      markerRef.current?.openPopup();
    }
  }, [topSellerMarker.popupOpen]);

  return (
    <Marker
      ref={markerRef}
      position={topSellerMarker.coords}
      icon={icon({
        iconUrl: isDesktop
          ? topSellerMarker["markerSrc"]
          : "images/markers/marker.svg",
        iconAnchor: isDesktop
          ? topSellerMarker["iconAnchor"]
          : topSellerMarker["smIconAnchor"],
        popupAnchor: isDesktop
          ? topSellerMarker["popupAnchor"]
          : topSellerMarker["smPopupAnchor"],
      })}
    >
      <GuessPopup topSellerMarker={topSellerMarker} />
    </Marker>
  );
};

interface IGuessPopup {
  topSellerMarker: ITopSellerMarker;
}

const GuessPopup: React.FC<IGuessPopup> = ({ topSellerMarker }) => {
  const blurRef = useRef<HTMLDivElement>(null);
  const crownRef = useRef<HTMLImageElement>(null);
  return (
    <Popup
      className="topSellerPopup"
      minWidth={170}
      closeButton={false}
      closeOnClick={!isDesktop}
      autoClose={!isDesktop}
    >
      <div className="imgOverlay">
        <img src={topSellerMarker.imgSrc} alt="Top Seller" />
        <div
          ref={blurRef}
          className="blurOverlay"
          style={topSellerMarker.blurStyle}
          onClick={() => {
            const divElement = blurRef.current;
            if (!divElement) return;

            // @ts-ignore
            divElement.style.backdropFilter = "blur(0px)";
            divElement.innerHTML = "";

            // show crown
            const crownElement = crownRef.current;
            if (!crownElement) return;

            crownElement.style.display = "block";
            crownElement.style.animation = "pop 0.3s linear 1";
          }}
        >
          <img src="/images/question-mark.svg" alt="Guess" />
        </div>
      </div>
      {topSellerMarker.state === "Victoria" && (
        <img
          ref={crownRef}
          className="crown"
          src="/images/crown.svg"
          alt="Crown"
          style={{ display: "none" }}
        />
      )}

      <div className="title">
        {stateAcronym[topSellerMarker.state]} - Top Seller
      </div>
    </Popup>
  );
};

const stateStyleFunction = (styleState: "base" | "hover"): PathOptions => ({
  color: "white",
  fillColor: styleState === "base" ? "#EEE6FD" : "#6521EA",
  fillOpacity: 1,
});

const stateLabelsHTML = (marker: IStateLabelMarker) => (
  <div className="stateMarker">
    <div>{marker.state}</div>
  </div>
);

const stateTooltipHTML = (feature: Feature) =>
  feature["properties"]?.name && (
    <div className="stateTooltip">
      <b className="title">{feature["properties"].name}</b>
      <ul>
        <li>
          <span className="description">Preferred Style:</span>{" "}
          {toolTipData[feature["properties"].name]["preferredStyle"]}
        </li>
        <li>
          <span className="description">Buys New Undies:</span> Every{" "}
          {toolTipData[feature["properties"].name]["newUndies"]} days
        </li>
        <li>
          <span className="description">Favorite Color:</span>{" "}
          {toolTipData[feature["properties"].name]["favColor"]}
        </li>
      </ul>
    </div>
  );

export default Map;
