import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useNavigate } from 'react-router-dom'
import L from 'leaflet'
import { ArrowLeft } from 'lucide-react'

function Get_Direction() {
  const position: [number, number] = [-3.3966, 38.5561]
  const navigate = useNavigate()

  // Custom pulsing icon
  const pulseIcon = L.divIcon({
    className: 'custom-pulse-icon',
    html: `<div class="pulse-marker"></div>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
  })

  return (
    <div className="w-full min-h-screen relative bg-gray-50">

      {/* Floating Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-4 left-4 z-[1000] flex items-center gap-2 
                   bg-white/90 backdrop-blur-md shadow-lg 
                   px-4 py-2 rounded-full 
                   hover:bg-white transition"
      >
        <ArrowLeft size={18} />
        <span className="text-sm font-medium">Back</span>
      </button>

      {/* Header */}
      <div className="w-full px-4 py-6 text-center bg-white shadow">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Get Directions
        </h1>
        <p className="text-sm md:text-base text-gray-500 mt-1">
          Find our office location in Voi, Kenya
        </p>
      </div>

      {/* Map */}
      <div className="p-3 md:p-6">
        <div className="w-full h-[75vh] md:h-[82vh] rounded-xl overflow-hidden shadow-lg border">
          <MapContainer center={position} zoom={13} className="w-full h-full">
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position} icon={pulseIcon}>
              <Popup>Our Office Location</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  )
}

export default Get_Direction