import imovelfetch from "../axios/config";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./Home.css";



//Apartamentos//
const Ape = () => {
    const [apartamentos, setApartamentos] = useState([]);
    
      const getApartamentos = async () => {
        try {
          const response = await imovelfetch.get("/Apartamentos");
    
          const data = response.data;
    
          setApartamentos(data);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getApartamentos();
      }, []);
    
      return (
        <div className="home">
          <h1>Apartamentos</h1>
          {apartamentos.length === 0 ? (
            <p>Carregando...</p>
          ) : (
            apartamentos.map((apartamentos) => (
              <div className="post" key={apartamentos.id}>
                <h2>{apartamentos.id}</h2>
                <h2>{apartamentos.tipo}</h2>
                <p>{apartamentos.quartos}</p> 
                <p>{apartamentos.suite}</p>
                <p>{apartamentos.tamanho}</p>
                <Link className="btn" to={`/Apartamentos/${apartamentos.id}`}>
                  Ler mais
                </Link>
              </div>
            ))
          )}
        </div>
      );
            }
            export default Ape