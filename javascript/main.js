import { getAllNews, getSingleNews } from './api.js'



function renderPost(post) {
    const container = document.createElement('div');
    const title = document.createElement('h3');
    const body = document.createElement('div');
    const link = document.createElement('a');

    title.innerHTML = post.title
    body.innerHTML = post.body

    container.className = "border bg-white rounded-md ml-[350px] mr-[350px] mb-[20px]"
    title.className = "ml-[10px] mr-[10px] block text-black text-[21px] mt-[20px]";
    body.className = "text-black text-[14px] rounded-md w-[700px] ml-[10px] mr-[10px] mb-[20px] pb-[50px] pt-[20px] h-[70px]";
    link.className = "ml-[600px] text-black hover:underline"
    link.href = `post.html?id=${post.id}`
    link.innerText = 'more information'

    container.appendChild(title);
    container.appendChild(body);
    container.appendChild(link);
    document.getElementById('news-container').appendChild(container);
}

export async function renderPosts() {
    const posts = await getAllNews();
    posts.forEach((post) => {
        renderPost(post)
    });
}


