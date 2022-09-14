import { useEffect, useState } from "react";
import DogCard from "./DogCard/DogCard";
import axios from 'axios'
// import 'extractBreedFromUrl' from './extractBreedFromURL';

export default function VoteSelector(): JSX.Element {
  const [twoBreedNames, setTwoBreedNames] = useState<string[]>([])
  const [twoImages, setTwoImages] = useState<string[]>([])
  
  useEffect(()=>{
    axios.get("https://dog.ceo/api/breeds/image/random/2")
    .then((res) => {
      console.log(res.data);
      setTwoImages(res.data.message)
      // setTwoBreedNames(extractBreedFromUrl(res.data.message[0]),extractBreedFromUrl(res.data.message[1]) )
    })
  },[])

  return (
    <>
      <p>VoteSelector</p>
      <section id="vote_selector">
        <DogCard />
        <DogCard />
      </section>
    </>
  );
}
