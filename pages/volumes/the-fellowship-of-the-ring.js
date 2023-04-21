import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";

export default function VolumePage1() {
    const volume =volumes.find(({slug})=>slug === "the-fellowship-of-the-ring");
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
            <Link href="/volumes/the-two-towers">Next Volume</Link>
        </div>
    )
}