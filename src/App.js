import React, { useState } from 'react';
import Carousel from './components/Carousel.js';
import ImagesGallery from './components/ImagesGallery.js';
import PesoDollarConversor from './components/PesoDollarConversor.js';
import ImageAndText from './components/ImageAndText.js';
import Crud from './components/Crud.js';
import CSVDataObtainer from './components/CSVDataObtainer.js';
import TopCaption from "./components/TopCaption.js";
import SimpleUserFormulary from './components/SimpleUserFormulary.js';
import "./App.css"

function Main() {
  // Set the state to save the sum status.
  // const [result, setResult] = useState(null);

  const page_title = <h1 className='hello-world'>Hello World</h1>;
  // const sum_result_container = <div className='sum-result-container'><h2>The result of the sum is:<h3>{sumNumbers(20, 50)}</h3></h2></div>

  // const pressButton = () => {
    // When the user press the button, then the setResult method will set the result in the useState (The initial statement, provided by react as method).
    // const result = sumNumbers(6, 17);
    // setResult(result);
  // };

  return (
	<div>
		<SimpleUserFormulary username="Joaquin" email="joaquin1029@gmail.com" password="securepassword123"/>
		<CSVDataObtainer/>
		{/*page_title}
		<Crud/>
		{<ImageAndText/>
		<hr></hr>
		<PesoDollarConversor/>
		<hr></hr>
		{sum_result_container}
		{<TopCaption/>}
		<button onClick={pressButton}>Sum Numbers</button>
		<p className='sum-result-container'>{result != null && <div>The result is <h3>{result}</h3></div>}</p>
		<ImagesGallery/>
		<Carousel/> */}
    </div>
  );
}

function sumNumbers(a, b) {
  return a + b;
}

export default Main;

