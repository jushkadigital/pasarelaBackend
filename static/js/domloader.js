const {PriceMultiplier  ,Price,PriceMenor,PriceInfante, WrapperComponentRange,Passenger,PassengerMenor,PassengerInfante,SubFieldPrice,SubFieldSubPrice} = componentsLibrary;

  console.log(WrapperComponentRange)
  const objGeneral = {
  Price: Price,
  PriceMenor: PriceMenor,
  PriceInfante: PriceInfante,
  PriceMultiplier: PriceMultiplier,
  WrapperComponentRange: WrapperComponentRange,
  Passenger: Passenger,
  PassengerMenor: PassengerMenor,
  PassengerInfante: PassengerInfante,
  SubFieldPrice: SubFieldPrice,
  SubFieldSubPrice: SubFieldSubPrice,

  }

  const objFunctionStore =
 {
  Price:(value)=> {window.useGlobalStoreSus.setState({ sharedState: Number(value) })},
  PriceMenor:(value)=> {window.useGlobalStoreSus.setState({ sharedState2: Number(value) })},
  PriceInfante:(value)=> {window.useGlobalStoreSus.setState({ sharedState3: Number(value) })},
  PriceMultiplier: (value)=>{},
  WrapperComponentRange: (value)=>{window.useGlobalStoreSus.setState({ percentageShared: Number(value) })},
  Passenger: (value)=>{window.useGlobalStoreSus.setState({ passengerShared: Number(value) })},
  PassengerMenor: (value)=>{window.useGlobalStoreSus.setState({ passengerShared2: Number(value) })},
  PassengerInfante: (value)=>{window.useGlobalStoreSus.setState({ passengerShared3: Number(value) })},
  SubFieldPrice: (value)=>{},
  SubFieldSubPrice: (value)=>{}
  }
    document.addEventListener('DOMContentLoaded', function() {
    const widgets = document.querySelectorAll("[id^=react-custom-widget]");
      
    widgets.forEach((container) => {
        const fieldName = container.dataset.field;
        const initialValue = container.dataset.initial;
        
        const type = container.dataset.type;

        objFunctionStore[type](initialValue)
       window.ReactDOM.render(
        window.React.createElement(
          objGeneral[type],
        {name:fieldName,initialValue:initialValue}
        ), container);
    });
         });

