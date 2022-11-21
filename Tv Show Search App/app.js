const form=document.querySelector('#searchForm');
const input=document.querySelector('#moviesName');
const resultImageDiv=document.querySelector('#resultImages');


form.addEventListener('submit', async function(evt){
    if(evt){
        evt.preventDefault();
    }
    
    const searchTerm = input.value;
    // const config={params:{q:searchTerm}};
    const response = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q${searchTerm}`);
    // console.log(response);
    makeImages(response.data);
    input.value='';
})
 
const makeImages=(shows)=>{
    resultImageDiv.innerHTML='' ;//clear all previous movies images
    for(let index of shows){
        if(index.show.image){
            const img=document.createElement('IMG');
            img.src=index.show.image.medium;
            // document.body.append( img ); (this do not clear previously search movies)
            resultImageDiv.appendChild( img );
        }
        }
       
}