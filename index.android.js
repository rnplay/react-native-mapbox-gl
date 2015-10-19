var React = require('react-native');
var { NativeModules, requireNativeComponent } = React;


var MapView = React.createClass({
  propTypes: {
    accessToken: React.PropTypes.string.isRequired,
    annotations: React.PropTypes.arrayOf(React.PropTypes.shape({
      title: React.PropTypes.string,
      subtitle: React.PropTypes.string,
      coordinates: React.PropTypes.arrayOf(),
      alpha: React.PropTypes.number,
      fillColor: React.PropTypes.string,
      strokeColor: React.PropTypes.string,
      strokeWidth: React.PropTypes.number
    })),
    centerCoordinate: React.PropTypes.shape({
      latitude: React.PropTypes.number.isRequired,
      longitude: React.PropTypes.number.isRequired
    }),
    debugActive: React.PropTypes.bool,
    direction: React.PropTypes.number,
    rotationEnabled: React.PropTypes.bool,
    scrollEnabled: React.PropTypes.bool,
    showsUserLocation: React.PropTypes.bool,
    styleUrl: React.PropTypes.string,
    UserLocationTrackingMode: React.PropTypes.string,
    zoomEnabled: React.PropTypes.bool,
    zoomLevel: React.PropTypes.number,
    scaleX: React.PropTypes.number,
    scaleY: React.PropTypes.number,
    translateX: React.PropTypes.number,
    translateY: React.PropTypes.number,
    rotation: React.PropTypes.number,
  },
  getDefaultProps() {
    return {
      centerCoordinate: {
        latitude: 0,
        longitude: 0
      },
      debugActive: false,
      direction: 0,
      rotationEnabled: true,
      scrollEnabled: true,
      showsUserLocation: false,
      styleUrl: 'asset://styles/streets-v8.json',
      UserLocationTrackingMode: 'NONE',
      zoomEnabled: true,
      zoomLevel: 0
    };
  },
  render: function() {
    return (<Mapbox {...this.props} />);
  }
});


module.exports = requireNativeComponent('RCTMapbox', MapView);
