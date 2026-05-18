import { getAllNews, getPostUser, getPostComment, getSingleNews } from './api.js'



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


export function getPostIdFromURL() {
    const queryString = window.location.search;
    const urlParam = new URLSearchParams(queryString);
    return urlParam.get('id');
}

export async function renderSingleNews(id) {

    getSingleNews(id).then(function (post) {
        console.log(post.userId)

        const container = document.createElement('div');
        const title = document.createElement('h3');
        const body = document.createElement('div');
        const heading = document.createElement('h1')
        const line = document.createElement('hr')


        title.innerHTML = post.title
        body.innerHTML = post.body
        title.className = "ml-[10px] mr-[10px] block text-black text-[21px] mt-[20px]"
        body.className = "text-black text-[14px] w-[700px] ml-[10px] mr-[10px] mb-[20px] pb-[50px] pt-[20px] h-[70px]"
        container.className = "ml-[10px] mr-[10px] mt-[10px] mb-[10px] border bg-white rounded-xl"
        heading.className = "ml-[10px] mb-[10px] mr-[10px] block text-black text-[25px] mt-[20px]"
        heading.innerText = "News";

        container.appendChild(heading)
        container.appendChild(line)
        container.appendChild(title)
        container.appendChild(body)
        document.getElementById('post').appendChild(container)

        getPostUser(post.userId).then(function (user) {

            const container = document.createElement('div');
            const name = document.createElement('p');
            const email = document.createElement('p');
            const phone = document.createElement('p');
            const website = document.createElement('a');
            const heading = document.createElement('h1')
            const line = document.createElement('hr')

            name.innerHTML = user.name;
            email.innerHTML = user.email;
            phone.innerHTML = user.phone;
            website.innerHTML = user.website;

            container.className = "ml-[10px] mr-[10px] mt-[10px] mb-[10px] border bg-white rounded-xl"
            name.className = "text-black text-[20px] w-[700px] ml-[10px] mr-[10px] h-[30px]"
            email.className = "text-black text-[20px] w-[700px] ml-[10px] mr-[10px h-[30px]"
            phone.className = "text-black text-[20px] w-[700px] ml-[10px] mr-[10px] h-[30px]"
            website.className = "text-black text-[20px] w-[700px] ml-[10px] mr-[10px] h-[30px]"
            heading.className = "ml-[10px] mb-[10px] mr-[10px] block text-black text-[25px] mt-[20px]"
            heading.innerText = "Author Information";

            container.appendChild(heading)
            container.appendChild(line)
            container.appendChild(name)
            container.appendChild(email)
            container.appendChild(phone)
            container.appendChild(website)
            document.getElementById('auther').appendChild(container)

        })
    })
}
export async function renderComments(id) {
    const comments = await getPostComment(id);
    comments.forEach((comment) => {
        rendercomment(comment)
    })
}

export async function rendercomment(comment) {
    console.log(comment)

    const name = document.createElement('div')
    const body = document.createElement('p')
    const email = document.createElement('div')
    const container = document.createElement('div')


    name.innerHTML = comment.name;
    body.innerHTML = comment.body;
    email.innerHTML = comment.email;

    container.className = "ml-[10px] mr-[10px] mt-[10px] mb-[10px] border bg-white rounded-xl"
    email.className = "text-black text-[16px] w-[700px] ml-[10px] mr-[10px h-[20px] mb-[5px]"
    body.className = "text-black text-[14px] w-[700px] ml-[10px] mr-[10px] mb-[20px] pb-[50px] pt-[20px] h-[70px]"
    name.className = "text-black text-[20px] w-[700px] ml-[10px] mr-[10px] h-[30px]"

    container.appendChild(name)
    container.appendChild(body)
    container.appendChild(email)
    document.getElementById('comments').appendChild(container)
}




