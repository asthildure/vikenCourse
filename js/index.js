import { SAMPLE_POSTS } from '../data/posts.js'

const elPosts = document.getElementById('posts')
const elTopPost = document.getElementById('top-post')
const elTopPostImage = document.getElementById('top-post-image')

const [topPost, ...posts] = SAMPLE_POSTS

function createPost(post) {
    return `
        <section class="card shadow">
            <img class="card-img-top" src="${post.photo}" alt="" />
            <div class="card-body">
                <b class="text-muted d-block mb-4">${post.date}</b>
                <h2 class="mb-1">${post.title}</h2>
                <h4 class="text-muted mb-4">${post.subTitle}</h4>
                <p>${post.intro}</p>

                <p class="text-muted d-flex align-items-center">
                    <span class="material-icons">person</span>
                    Written by ${post.author}
                </p>

                <footer>
                    ${ createTags(post.tags) }
                </footer>
            </div>
        </section>
        `
}

function createTags(tags) {
    return tags
        .map(tag => `<span class="badge bg-primary">#${tag}</span>`)
        .join(' ')
}

function createTopPost(post) {
    elTopPostImage.src = post.photo
    elTopPost.innerHTML = `
        <b class="text-muted d-block mb-4">${post.date}</b>
        <h2 class="mb-1">${post.title}</h2>
        <h4 class="text-muted mb-4">${post.subTitle}</h4>
        <p>${post.intro}</p>

        <p class="text-muted d-flex align-items-center">
            <span class="material-icons">person</span>
            Written by ${post.author}
        </p>

        <footer>${ createTags(post.tags) }</footer>
    `
}


createTopPost(topPost)

for (const post of posts) {
    const postHTML = createPost(post)
    elPosts.innerHTML += postHTML
}
