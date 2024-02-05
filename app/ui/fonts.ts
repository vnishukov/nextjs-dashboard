import {Inter, Lusitana} from 'next/font/google';
import {NextFont} from "next/dist/compiled/@next/font";

export const inter: NextFont = Inter({ subsets: ['latin', 'cyrillic'] });
export const lusitana: NextFont = Lusitana({ subsets: ['latin'], weight:['400', '700'] });