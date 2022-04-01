import Image from "next/image";
import Link from "next/link";

const Card = (props) => {
  return (
    <div className="w-[200px] rounded-xl shadow-2xl bg-white px-3 py-3">
      <Image src={props.imgUrl} width={200} height={200} alt="cofffeImage" />
      <h1>{props.name}</h1>
      <h2>{props.address}</h2>
      <h2>Site:</h2>
      <a className="text-blue-800" href={props.websiteUrl}>
        {props.name}
      </a>
    </div>
  );
};

export default Card;
