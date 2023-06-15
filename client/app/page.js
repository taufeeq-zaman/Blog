"use client";
import { useState } from "react";
import Card from "@/components/Card";
import axios from "axios";
import Image from "next/image";
export default function Home() {

    const [value, updateValue] = useState([]);
    const baseUrl = "http://localhost:8000";
    const getDataUrl = `${baseUrl}/api/blogs/all`;

    const getData = async (res) => {
        try {
            let res = await axios.get(getDataUrl);
            updateValue(res.data);
            console.log(res.data);
            return res;
        } catch (error) {
            console.error({ message: "failed fetching data.", error });
        }
    };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <button onClick={getData} style={{ margin: "1rem 0" }}>
            get data
        </button>
      <div className='grid grid-cols-4'>
          {value.map((val) => (
              <div key={val.title}>
                  <h1>{val.title}</h1>
                  <p>{val.description}</p>
              </div>
          ))}


      </div>
    </main>
  )
}
