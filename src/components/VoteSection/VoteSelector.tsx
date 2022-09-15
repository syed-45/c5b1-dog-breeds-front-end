import { useEffect, useState } from "react";
import axios from "axios";
import DogCard from "./DogCard/DogCard";
import { getDogBreedName } from "../../utils/getDogBreedName";

interface BreedObjType {
  breedName: string;
  imageURL: string;
}
export default function VoteSelector(): JSX.Element {
  const [twoBreedsObj, setTwoBreedsObj] = useState<BreedObjType[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/image/random/2").then((res) => {
      setTwoBreedsObj([
        {
          breedName: getDogBreedName(res.data.message[0]),
          imageURL: res.data.message[0],
        },
        {
          breedName: getDogBreedName(res.data.message[1]),
          imageURL: res.data.message[1],
        },
      ]);
    });
  }, [refresh]);

  return (
    <>
      <p>VoteSelector</p>
      <section id="vote_selector">
        {twoBreedsObj.map((oneBreedObj) => {
          return (
            <DogCard
              key={oneBreedObj.breedName}
              dogBreedName={oneBreedObj.breedName}
              imageURL={oneBreedObj.imageURL}
              setRefresh={setRefresh}
            />
          );
        })}
      </section>
    </>
  );
}
