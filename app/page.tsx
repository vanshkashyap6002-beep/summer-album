import { Book } from '../components/Book';
import { sampleAlbum } from '../lib/album';
export default function Home() { return <Book album={sampleAlbum} />; }
