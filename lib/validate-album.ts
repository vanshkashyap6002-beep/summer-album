import type { Album, Chapter, Photo } from './album';
const text=(value:unknown,fallback='')=>typeof value==='string'?value:fallback;
export function safePhotoSource(value:unknown):string { const source=text(value).trim();if(!source)return '';if(/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(source))return source;try{const url=new URL(source,'https://album.invalid/');return ['https:','http:'].includes(url.protocol)?source:'';}catch{return '';}}
const photo=(value:any):Photo=>({src:safePhotoSource(value?.src),alt:text(value?.alt,'A memory'),caption:text(value?.caption)});
const types=new Set(['photo','story','collage','polaroid','letter','timeline','quote','scrapbook','final']);
export function normalizeAlbum(value:unknown):Album {
const a=(value&&typeof value==='object'?value:{}) as Partial<Album>;
const chapters=(Array.isArray(a.chapters)?a.chapters:[]).filter(c=>c&&typeof c==='object').map((c,i)=>({id:text(c.id,'chapter')+'-'+i,type:types.has(c.type)?c.type:'story',title:text(c.title,'A memory'),eyebrow:text(c.eyebrow),text:text(c.text),quote:text(c.quote),photos:(Array.isArray(c.photos)?c.photos:[]).map(photo),entries:(Array.isArray(c.entries)?c.entries:[]).filter(e=>e&&typeof e==='object').map(e=>({date:text(e.date),title:text(e.title),text:text(e.text)}))} as Chapter));
return {id:text(a.id),title:text(a.title,'Our story'),subtitle:text(a.subtitle),authors:text(a.authors),date:text(a.date),cover:photo(a.cover),chapters};
}