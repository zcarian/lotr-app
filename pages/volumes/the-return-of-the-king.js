import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";

export default function VolumePage3() {
    const volume =volumes.find(({slug})=>slug === "the-return-of-the-king");
    return (
        <div>
            <Link href="/">All Volumes</Link>
            <h1>{volume.title}</h1>
            <p>{volume.description}</p>
            <ul>
                {volume.books.map((book)=>(
                    <li>{book.ordinal} - {book.title}</li>
                ))}
            </ul>
            <Image src={volume.cover}
             width={140} height={230}/>
            <Link href="/volumes/the-two-towers">Previous Volume</Link>
        </div>
    )
}