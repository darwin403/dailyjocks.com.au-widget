import { MapContainer, GeoJSON, Popup, Marker } from "react-leaflet";
import {
  geoJSON,
  divIcon,
  icon,
  PathOptions,
  GeoJSON as IGeoJSON,
} from "leaflet";
import australiaGeoJson from "../data/australia.json";
import { GeoJsonObject, Feature } from "geojson";
import {
  stateColors,
  stateLabelMarkers,
  IStateLabelMarker,
  topSellerMarkers,
  stateAcronym,
} from "../data/map";
import ReactDOMServer from "react-dom/server";

// eslint-disable-next-line
import "leaflet/dist/leaflet.css";
import "./Map.scss";

export function Map() {
  const geoJson = geoJSON(australiaGeoJson as GeoJsonObject);
  return (
    <section id="map">
      <MapContainer
        bounds={geoJson.getBounds()}
        attributionControl={false}
        touchZoom={false}
        dragging={false}
        doubleClickZoom={false}
        zoomControl={false}
        scrollWheelZoom={false}
        keyboard={false}
        tap={false}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
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
              layer.setStyle(stateStyleFunction("hover")(feature))
            );
            layer.on("mouseout", (e) =>
              layer.setStyle(stateStyleFunction("base")(feature))
            );
          }}
        />

        {/* State Labels */}
        {stateLabelMarkers.map((marker, i) => (
          <Marker
            position={marker.coords}
            key={i}
            icon={divIcon({
              html: ReactDOMServer.renderToString(stateLabelsHTML(marker)),
              className: "",
            })}
          />
        ))}

        {/* Popup Images */}
        {topSellerMarkers.map((marker, i) => (
          <Marker
            position={marker.coords}
            key={i}
            icon={icon({
              iconUrl: markerSVG(stateColors[marker["state"]]["hover"]),
              iconAnchor: marker["iconAnchor"],
              popupAnchor: marker["popupAnchor"],
            })}
          >
            <Popup
              className="topSellerPopup"
              minWidth={200}
              closeButton={false}
            >
              <div className="imgOverlay">
                <img src={marker.imgSrc} alt="Top Seller" />
              </div>
              <div className="title">
                {stateAcronym[marker.state]} - Top Seller
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
}

const markerSVG = (fillColor: string) => {
  return (
    "data:image/svg+xml," +
    escape(
      ReactDOMServer.renderToStaticMarkup(
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="30" height="30" rx="15" fill={fillColor} />
          <path
            d="M14.1667 14.1667V9.16666H15.8333V14.1667H20.8333V15.8333H15.8333V20.8333H14.1667V15.8333H9.16666V14.1667H14.1667Z"
            fill="white"
          />
        </svg>
      )
    )
  );
};

const stateStyleFunction =
  (styleState: "base" | "hover") =>
  (feature?: Feature): PathOptions => ({
    color: "white",
    fillColor: stateColors[feature?.properties?.["name"] as string][styleState],
    fillOpacity: 1,
  });

const stateLabelsHTML = (marker: IStateLabelMarker) => (
  <div className="stateMarker">
    <div>{marker.state}</div>
  </div>
);

const stateTooltipHTML = (feature: Feature) => (
  <div className="stateTooltip">
    <b className="title">{feature["properties"]?.name}</b>
    <ul>
      <li>
        <span className="description">Preferred Style:</span> Trunk
      </li>
      <li>
        <span className="description">Buys New Undies:</span> Every 106 days
      </li>
      <li>
        <span className="description">Favorite Color:</span> Red
      </li>
    </ul>
  </div>
);

export default Map;
