import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function VolumeDetail() {
    const route = useRouter();
    const { slug } = route.query;
    const volume = volumes.find((ele)=>ele.slug === slug);
    let id = volumes.indexOf(volume);
    let next = volumes[id+1];
    let prev = volumes[id-1];
    return (
        <div>
            <Link href="/">All Volumes</Link>
            <h1>{volume.title}</h1>
            <p>{volume.description}</p>
            <ul>
                {volume.books.map((book)=>(
                    <li key={book.ordinal}>{book.ordinal} - {book.title}</li>
                ))}
            </ul>
            <Image src={volume.cover} alt={volume.title}
             width={140} height={230}/>
             {next && <button onClick={()=>{
                    route.push(`/volumes/${next.slug}`)
             }}>next volume</button>}
             {prev && <button onClick={()=>{
                    route.push(`/volumes/${prev.slug}`)
             }}>previous volume</button>}
        </div>
    )
}