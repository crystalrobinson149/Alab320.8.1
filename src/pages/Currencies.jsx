import { Link } from "react-router-dom";

export default function Currencies (props) {

    const currencies = [
        { name: "Bitcoin", symbol: "BTC" },
        { name: "Litecoin", symbol: "LTC" },
        { name: "Ethereum", symbol: "ETH" },
        { name: "Ethereum Classic", symbol: "ETC" },
        { name: "Stellar Lumens", symbol: "XLM" },
        { name: "Dash", symbol: "DASH" },
        { name: "Ripple", symbol: "XRP" },
        { name: "Zcash", symbol: "ZEC" },

    ];

    return ( 
    // <h1>This is the Currencies Component</h1>;
    <div className="currencies">
        {currencies.map((coin) => {
            const { name, symbol } = coin;

            return (
                // lab says this line but it's not working
                // <Link to={`/price/${symbol}`}>
                <Link to={`/price/${coin.symbol}`} key={coin.symbol}>
                     {/* lab says this line but it's not working */}
                    {/* <h2>{name}</h2> */}
                    <h2>{coin.name}</h2>
                </Link>
            );
        })}
    </div>
    );
  }
