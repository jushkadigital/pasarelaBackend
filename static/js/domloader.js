const {PriceMultiplier} = componentsLibrary;
    document.addEventListener('DOMContentLoaded', function() {
      window.ReactDOM.render(
        window.React.createElement(
          PriceMultiplier, // note - using .default here as this is how the global is set up
        ), document.getElementById('react-price-widget'));
    });

