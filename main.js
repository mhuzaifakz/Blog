async function getAllNews () {
    const fetching = await fetch('https://jsonplaceholder.typicode.com/posts')
    return fetching.json()
}

async function getSingleNews (id) {
    const fetching = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}` )
    return fetching.json()
}

getAllNews().then(function(posts) {
    console.log(posts)
    posts.forEach((post) => {
        renderPost(post)
    });

})

function renderPost (post) {
    const container = document.createElement('div');
    const title = document.createElement('h3');
    const body = document.createElement('div');

    title.innerHTML = post.title
    body.innerHTML = post.body

    container.className = "border bg-white rounded-md ml-[350px] mr-[350px] mb-[20px]"
    title.className = "ml-[10px] mr-[10px] block text-black text-[21px] mt-[20px]";
    body.className = "text-black text-[14px] rounded-md w-[700px] ml-[10px] mr-[10px] mb-[20px] pb-[50px] pt-[20px] h-[70px] text-center";

    container.appendChild(title);
    container.appendChild(body);
    document.getElementById('news-container').appendChild(container);
}

getSingleNews(1).then(function(post) {
    console.log(post)
})
getSingleNews(2).then(function(post) {
    console.log(post)
})


    