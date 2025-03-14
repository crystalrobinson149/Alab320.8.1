import { useState, useEffect} from "react"; 
import {useParams} from "react-router-dom"



export default function Price (props) {
//our API key is from coinapi.io


//grabbing the currency symbol from the URL Params.
const params = useParams()
const symbol = params.symbol

//using the other 2 variables to create our code
// (old url -- doesn't work)
// const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${import.meta.env.VITE_COINAPI_IO_API_KEY}`;

// State to hold the coin data
const [coin, setCoin] = useState(null);

// function to fetch coin data
const getCoin = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        setCoin(data);
    } catch(e) {
        console.error(e)
    }
};

//useEffect to run getCoin when component mounts.
useEffect(() => {
    getCoin();
}, [symbol]); // added symbol as a dependency

// loaded function for when data is fetched
const loaded = () => {
    return (
        <div>
            <h1>
                {coin.asset_id_base}/{coin.asset_id_quote}
            </h1>
            <h2>{coin.rate}</h2>
        </div>
    );
};

//function for when data doesn't exist
const loading = () => {
    return <h1>Loading...</h1>;
};

//if coin has data, run the loaded function, otherwise load run loading. 

    return coin && coin.rate ? loaded() : loading();
  }

  
//   <h1>This is the Price Component</h1>;
