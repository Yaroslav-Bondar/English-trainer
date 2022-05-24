
// export function getData(path) {
//     const data = fetch(path)
//         .then(response => {console.log('then1', response); return response})
//         .then(data => {console.log('then2', data.json()); return data.json})
//         .catch(error => {console.log('catch', error); return error})
//         console.log('data', data);    
// }
// getData('/data/irregular_verbs/irregular_verbs.json');

//** download data, convert to Blob object and return blob-url

*/
export async function getBlobImage (url, setState) {
    let response = await fetch(url);
    let blob = await response.blob(); // download as Blob-object
    const blobi = URL.createObjectURL(blob);
    setState(blobi);
}
