const loadContent = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos');
    const data = await res.json();
    console.log(data.videos)
    const videos = data.videos;
    displayContent(videos);
}
const displayContent = async (videos) => {
    const contentContainer = document.getElementById('content-container');
    videos.forEach( video => {
        const contentDiv = document.createElement('div');
        const blueMark = `<img class='blue-mark' src="./assets/blue-mark.png" alt="">`;
        contentDiv.classList = `card bg-base-100 videos-card`;
        contentDiv.innerHTML = `
            <img class="thumbnail-image rounded-xl" src=${video.thumbnail} alt="" />
            <div class="card-content">
                <div>
                   <img class="profile-pic" src=${video.authors[0].profile_picture} />
                </div>
                <div class='space-y-1'>
                    <h3 class="text-lg font-bold">${video.title}</h3>
                    <h4 class='flex gap-2 items-center'>${video.authors[0].profile_name} ${video.authors[0].verified ? blueMark : ""}</h4>
                    <p>${video.others.views}</p>
                </div>
             </div>
        `;
        contentContainer.appendChild(contentDiv);
    });
}
loadContent();


const getCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const category = data.data;
    displayCategory(category);
}
const displayCategory = async (category) =>{
    // console.log(category);
    const categoryContainer = document.getElementById('category-container');

    
    category.forEach(categorys => {
        // console.log(categoryOutput);
        const categoryContent = document.createElement('div');
        categoryContent.classList = `btn category-button`;
       categoryContent.innerHTML = `
        <button>${categorys.category}</button>
       `;
       categoryContainer.appendChild(categoryContent);
    });
};
getCategory();