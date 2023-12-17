import MerchantList from "./MerchantList";
import { getMerchant, merchants as merchantsData } from "../data/data";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import "./Explore.scss";
import { useSearchParams } from "react-router-dom";
import { supabase } from "../repository/db";

export default function Explore() {
  const [merchants, setMerchants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getMerchants = async () => {
    const { data, error } = await supabase.from("merchants").select();

    if (!error) {
      setMerchants(data);
    }
  };

  useEffect(() => {
    getMerchants();
  }, []);

  console.log("merchantsupabase", merchants);

  return (
    <section>
      <div className="explore-wrapper-bg">
        <div className="explore-wrapper">
          <div className="explore-wrapper-main">
          <h2>Explore</h2>
          <div className="searchBar">
            <SearchBar />

            <div className="button-container">
              <button>Terdekat</button>
              <button>Terlaris</button>
              <button>Rating</button>
            </div>
          </div>
          
          </div>
        </div>
      </div>

      <div className="wrapper">
        
        <MerchantList merchants={merchants} />
      </div>
    </section>
  );
}


// export default class Explore extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             merchants: merchants,
//         };

//         }

//     render() {
//         return (
//             <section>
//                 <div className="container">
//                     {/* <h2>Explore</h2> */}
//                     <MerchantList merchants={this.state.merchants} />
//                 </div>
//             </section>
//         )
//     }
// }
