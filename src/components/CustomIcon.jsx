import L from "leaflet";

const CustomIcon = ({ color }) => {
  return L.divIcon({
    html: `<i class="fas fa-map-marker-alt" style="color: ${color};"></i>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    className: "custom-icon",
  });
};

export default CustomIcon;
