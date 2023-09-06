import React from 'react';
import Netflix from './Netflix';
import Amazon from './Amazon';

const favSeries = "netflix";


// const FavS = () => {
//   if(favSeries==="netflix"){
//     return <Netflix />;
//   }
//   else{
//     return <Amazon />;  
//   }
// };


const App = () => (
  <>
    <h1 className='headingStyle'> List of top 6 Netflix Series in 2023 </h1>
    {/* <FavS /> */}

    { (favSeries==="netflix") ? <Netflix /> : <Amazon /> }
  </>
);

export default App;
