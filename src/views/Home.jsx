// import { supabase } from "../repository/db";

// export default function Home() {
//   const handleLogout = async () => {
//     const { error } = await supabase.auth.signOut();
//   };

//   return (
//     <div>
//       <p>Home</p>
//       <button onClick={handleLogout}>logout</button>
//     </div>
//   );
// }

import React from "react";

import { useState, useEffect } from "react";
import { useSearchParams, useNavigate, useParams } from "react-router-dom";
import Discount from "../components/CardDiscount";
import Recomendation from "../components/CardRecomendation";
import MerchantList from "./MerchantList";
import SearchBar from "../components/SearchBar";
import "./Home.scss";
import Hero from "../assets/hero.jpg";
import { supabase } from "../repository/db";
import { getMerchant } from "../data/data";
import { merchants } from "../data/data";
// import { merchants } from "../data/data";

function HomeWrapper(){
  const [searchParams, setSearchParams] = useSearchParams();
  // const [merchants, setMerchants] = useState([]);

  // const getData = async () => {
  //   const { data, error } = await supabase
  //   .from('merchants')
  //   .select()

  //   if (!error){
  //     setMerchants(data)
  //   }
  // }

  const { id } = useParams();

  function changeSearchParams(keyword) {
    setSearchParams({ title: keyword })
  }

  return <Home onSearch={changeSearchParams} id={Number(id)} />
}

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      foundMerchant: [],
      getMerchant: [],
      merchants: getMerchant(props.id)
    }

    this.onSearch = this.onSearch.bind(this)
  }

  async componentDidMount(){
    const { data, error } = await supabase.from("merchants").select();

    if (!error) {
      this.setState(() => {
        return {
          getMerchant: data
        }
      })

      console.log('data',data)
    }

  }

  onSearch(keyword) {
    this.setState(() => {
      return {
        getMerchant: this.state(
          console.log(this.state)
        )
      }
      
    })

    this.props.onSearch(keyword)
  }

  render() {
    return (
        <>
          <section className="hero">
            <div className="hero-image">
              <img src={Hero} alt="Jumbotron" />
            </div>
            <div className="hero-text">
              <h1>Luru.</h1>
              <p>Yang kamu mau ada di dekatmu!</p>
              <SearchBar onSearch={this.onSearch} />
            </div>
          </section>
          <section>
            <h2 className="discount-title">Spesial Offer</h2>
            <div className="discount">
              <Discount />
            </div>
          </section>
          <section>
            <div className="card-item">
              <h2 className="recomendation-title">Rekomendasi</h2>
              {/* with Dummy Data */}
              <MerchantList merchants={merchants} />

              {/* with Supabase Data */}
              {/* <MerchantList merchants={this.state.getMerchant} /> */}
            </div>
          </section>
        </>
      );
  }

  

  // const [searchTerm, setSearchTerm] = useState("");
  // const [merchants, setMerchants] = useState([]);

  // const getMerchants = async () => {
  //   const { data, error } = await supabase.from("merchants").select();

  //   if (!error) {
  //     setMerchants(data);
  //   }
  // };

  // useEffect(() => {
  //   getMerchants();
  // }, []);

  // const handleSearch = (term) => {
  //   setSearchTerm(term);
  // };

  // return (
  //   <>
  //     <section className="hero">
  //       <div className="hero-image">
  //         <img src={Hero} alt="Jumbotron" />
  //       </div>
  //       <div className="hero-text">
  //         <h1>Luru.</h1>
  //         <p>Yang kamu mau ada di sekitarmu!!!</p>
  //         <SearchBar onSearch={handleSearch} />
  //       </div>
  //     </section>
  //     <section>
  //       <h2 className="discount-title">Spesial Offer</h2>
  //       <div className="discount">
  //         <Discount />
  //       </div>
  //     </section>
  //     <section>
  //       <div className="card-item">
  //         <h2 className="recomendation-title">Rekomendasi</h2>
  //         <MerchantList merchants={merchants} />
  //         {/* <Recomendation searchTerm={searchTerm} /> */}
  //       </div>
  //     </section>
  //   </>
  // );
}


// function searchMerchant(keyword) {
//   data.filter((merchant) => merchant.title.toLowerCase().includes(keyword.toLowerCase()));
// }

export default HomeWrapper;




