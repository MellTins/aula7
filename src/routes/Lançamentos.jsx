import imovelfetch from "../axios/config";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./Home.css";



//Lançamentos//
const Lançamentos = () => {
    const [lançamentos, setLançamentos] = useState([]);
    
      const getLançamentos = async () => {
        try {
          const response = await imovelfetch.get("/Lancamentos");
    
          const data = response.data;
    
          setLançamentos(data);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getLançamentos();
      }, []);
    
      return (
        <div className="home">
          <h1>Lançamentos</h1>
          {lançamentos.length === 0 ? (
            <p>Carregando...</p>
          ) : (
            lançamentos.map((lançamentos) => (
              <div className="post" key={lançamentos.id}>
                <h2>{lançamentos.id}</h2>
                <h2>{lançamentos.regiao}</h2>
                <p>{lançamentos.bairro}</p> 
                <p>{lançamentos.tamanho}</p>
                <p>{lançamentos.entrega}</p>
                <Link className="btn" to={`/Lancamentos/${lançamentos.id}`}>
                  Ler mais
                </Link>
              </div>
            ))
          )}
        </div>
      );
            }
            export default Lançamentos