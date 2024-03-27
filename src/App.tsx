import { MapsComponent, LayersDirective, LayerDirective,MapsTooltip, Marker, Inject, MarkersDirective, MarkerDirective} from '@syncfusion/ej2-react-maps';
import { world_map } from './world_map'

import './App.css';

let markerData: object[] = [
  { Name:"Tokyo", Latitude:35.6894875, Longitude:139.6917064, Population:33200000, Color:"red", Shape:"Pentagon" },
  { Name:"New York", Latitude:40.7127753, Longitude:-74.0059728, Population:17800000, Color:"green",Shape:"Diamond" },
  { Name:"Sao Paulo", Latitude:-23.5505199, Longitude:-46.6333094, Population:17700000, Color:"orange",Shape:"InvertedTriangle" },
  { Name:"Seoul/Incheon", Latitude:37.566535, Longitude:126.9779692, Population:17500000, Color:"red",Shape:"Pentagon"},
  { Name:"Mexico City", Latitude:19.2464696, Longitude:-99.1013498, Population:17400000, Color:"green",Shape:"Diamond"},
  { Name:"Osaka/Kobe/Kyoto", Latitude:35.0212466, Longitude:135.7555968, Population:16425000, Color:"red",Shape:"Pentagon" },
  { Name:"Manila", Latitude:14.5995124, Longitude:120.9842195, Population:14750000, Color:"red",Shape:"Pentagon" },
  { Name:"Mumbai", Latitude:19.0759837, Longitude:72.8776559, Population:14350000, Color:"red",Shape:"Pentagon" },
  { Name:"Delhi", Latitude:28.6139391, Longitude:77.2090212, Population:14300000, Color:"red",Shape:"Pentagon" },
  { Name:"Jakarta", Latitude:-6.17511, Longitude:106.8650395, Population:14250000, Color:"red",Shape:"Pentagon" },
  { Name:"Lagos", Latitude:6.5243793, Longitude:3.3792057, Population:13400000, Color:"blue",Shape:"Rectangle" },
  { Name:"Kolkata", Latitude:22.572646, Longitude:88.363895, Population:12700000, Color:"red",Shape:"Pentagon" },
  { Name:"Cairo", Latitude:30.0444196, Longitude:31.2357116, Population:12200000, Color:"blue",Shape:"Rectangle" },
  { Name:"Los Angeles", Latitude:34.0522265, Longitude:-118.2436596, Population:11789000, Color:"green",Shape:"Diamond" },
  { Name:"Buenos Aires", Latitude:-34.6036844, Longitude:-58.3815591, Population:11200000, Color:"orange",Shape:"InvertedTriangle" },
]
  
function App() {
  return (
    <div className="App">
      <MapsComponent titleSettings={{text:'Top 15 populated cities in the world'}}
       useGroupingSeparator={true} format='n' >
        <Inject services={[Marker,MapsTooltip]}/>
        <LayersDirective>
          <LayerDirective shapeData={world_map}
          shapeSettings={ {
          fill: '#E5E5E5'
          }}
          >
          <MarkersDirective>
            <MarkerDirective visible={true} dataSource={markerData}
              shape= 'Image' imageUrl='https://ej2.syncfusion.com/react/demos/src/maps/images/ballon.png'
              height={15} width={15}
              tooltipSettings={{
                visible: true,
                valuePath:'Population',
                format: '<b>${Name}</b><br>Population: <b>${Population}</b>'
              }}
              //shapeValuePath='Shape'
              //fill='White'
              //border={{width:2, color: '#285255'}}
              //colorValuePath='Color'
            >
            </MarkerDirective>
          </MarkersDirective>
          </LayerDirective>
        </LayersDirective>
      </MapsComponent>
    </div>
  );
}

export default App;
