import { introduction, volumes} from "../lib/data";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
         <li key={volume.slug}>
            <Link href={`volumes/${volume.slug}`}>{volume.title}</Link>
         </li> 
        ))}
        </ul>
        <button onClick={()=>{
          const randomVolume = volumes[Math.floor(Math.random() * volumes.length)];
          router.push(`/volumes/${randomVolume.slug}`);
        }}>Random volume</button>
    </div>
  );
}
