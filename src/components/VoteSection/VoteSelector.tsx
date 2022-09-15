import { useEffect, useState } from "react";
import axios from 'axios'
import DogCard from "./DogCard/DogCard";
import {getDogBreedName} from '../../utils/getDogBreedName';

interface breedNamesObjType {
  breedName: string
  imageURL: string
}
export default function VoteSelector(): JSX.Element {
  const [twoBreedNamesObj, setTwoBreedNamesObj] = useState<breedNamesObjType[]>([])

  useEffect(()=>{
    axios.get("https://dog.ceo/api/breeds/image/random/2")
    .then((res) => {
      const twoDogs: breedNamesObjType[] = [
        {
          breedName: getDogBreedName(res.data.message[0]),
          imageURL: res.data.message[0]
        },        
        {
          breedName: getDogBreedName(res.data.message[1]),
          imageURL: res.data.message[1]
        }
      ]      
      setTwoBreedNamesObj(twoDogs)
    })
  },[])

  return (
    <>
      <p>VoteSelector</p>
      <section id="vote_selector">
       {twoBreedNamesObj.map((oneBreedNameObj)=>{
        return <DogCard key={oneBreedNameObj.breedName} dogBreedName={oneBreedNameObj.breedName} imageURL={oneBreedNameObj.imageURL} />        
       })}
      </section>
    </>
  );
}
