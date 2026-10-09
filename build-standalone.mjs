import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root=path.dirname(fileURLToPath(import.meta.url));
let html=await readFile(path.join(root,'dist/index.html'),'utf8');
const script=html.match(/<script\b[^>]*src="([^"]+)"[^>]*><\/script>/);
const style=html.match(/<link\b[^>]*href="([^"]+\.css)"[^>]*>/);
if(!script||!style)throw new Error('Build the Vite client before generating the standalone edition.');
let js=await readFile(path.join(root,'dist',script[1]),'utf8');
const css=await readFile(path.join(root,'dist',style[1]),'utf8');
for(const name of ['coast','town','sea','detail','sunset']){
 const data=await readFile(path.join(root,'public/images',name+'.jpg'));
 js=js.replaceAll('images/'+name+'.jpg','data:image/jpeg;base64,'+data.toString('base64'));
}
html=html.replace(script[0],()=>'<script type="module">'+js.replaceAll('</script','<\\/script')+'</script>').replace(style[0],()=>'<style>'+css+'</style>');
await writeFile(path.join(root,'../The days we keep.html'),html);
console.log('Standalone edition regenerated from the repaired source.');

