import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'


const AsyncAwait = () => {

    const [poke, setPoke] = useState()
  
    const url = 'https://pokeapi.co/api/v2/pokemon/wartortle'

    useEffect(() => {
        //Async/await con fetch
        const fetchData = async () => {
            try {
                let res = await fetch(url)
                let data = await res.json()
                console.log(data)
            }
            catch (err) {
               Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Ha ocurrido el siguiente error en el componente AsyncAwait: ${err}`,
                footer: '<a href="">Why do I have this issue?</a>'
              })
            }
        }
        fetchData()

        //Async/await con axios
        const axiosData = async () => {
            try {
                let res = await axios(url)
                setPoke(res.data)
            }
            catch(err) {
                console.log(err)
            }
        }
        axiosData()

    }, [])
   
    return (
        <div>
            <h1>Aprendiendo Async / Await</h1>
            <h1>{poke?.name}</h1>
            <img src={poke?.sprites.front_default} alt="" />
        </div>
  )
}

export default AsyncAwait