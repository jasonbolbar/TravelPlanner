import Itinerary from './components/itinerary/Itinerary';
import FlightIndex from './components/flight/FlightIndex';
import Flight from './components/flight/Flight';

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
};
