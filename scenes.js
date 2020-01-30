import Itinerary from './components/itinerary/Itinerary';
import FlightIndex from './components/flight/FlightIndex';
import Flight from './components/flight/Flight';
import Hotel from './components/hotel/Hotel';

export const scenes = {
  itinerary: {
    component: Itinerary,
    label: 'Itinerario',
  },
  flightIndex: {
    component: FlightIndex,
    label: 'Indice de Vuelos',
  },
  flight: {
    component: Flight,
    label: 'Vuelo',
  },
  hotel: {
    component: Hotel,
    label: 'Hotel',
  },
};
