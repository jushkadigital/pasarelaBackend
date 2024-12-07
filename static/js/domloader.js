const {PriceMultiplier  ,Price, WrapperComponentRange,Passenger,SubFieldPrice,SubFieldSubPrice} = componentsLibrary;

  console.log(WrapperComponentRange)
  const objGeneral = {
  Price: Price,
  PriceMultiplier: PriceMultiplier,
  WrapperComponentRange: WrapperComponentRange,
  Passenger: Passenger,
  SubFieldPrice: SubFieldPrice,
  SubFieldSubPrice: SubFieldSubPrice,

  }

  const objFunctionStore =
 {
  Price:(value)=> {window.useGlobalStoreSus.setState({ sharedState: Number(value) })},
  PriceMultiplier: (value)=>{},
  WrapperComponentRange: (value)=>{window.useGlobalStoreSus.setState({ percentageShared: Number(value) })},
  Passenger: (value)=>{window.useGlobalStoreSus.setState({ passengerShared: Number(value) })},
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

