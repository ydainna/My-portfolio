import Lottie from "lottie-react";
import elephant from "@assets/lotties/elephant.json";

const HomeElephant = () => {
  return (
    <>
      {/*
        Nellie the elephant packed her trunk and
        said goodbye to the circus
        Off she went with a trumpety-trump
        Trump, trump, trump
      */}
      <Lottie animationData={elephant} />
    </>
  );
};

export default HomeElephant;
