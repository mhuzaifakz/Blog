export async function getAllNews () {
    const fetching = await fetch('https://jsonplaceholder.typicode.com/posts')
    return fetching.json()
}

export async function getSingleNews (id) {
    const fetching = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}` )
    return fetching.json()
}