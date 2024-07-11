import { getAllCategories, getAllPostsByCategory } from 'lib/api'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import Posts from 'components/posts'
import Meta from 'components/meta'
import { eyecatchLocal } from 'lib/constants'

export default function Category({ name, posts }) {
    return (
        <Container>
            <Meta pageTitle={name} pageDesc={`${name}に関する記事`} />
            <PostHeader title={name} subtitile={"Blog Category"} />
            <Posts posts={posts} />
        </Container>
    )
}

export async function getStaticPaths() {
    const allCats = await getAllCategories()
    return {
        paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const catSlug = context.params.slug

    const allCats = await getAllCategories()
    // console.log(allCats)
    const cat = allCats.find(({ slug }) => slug === catSlug)
    console.log(cat)

    const posts = await getAllPostsByCategory(cat.id)
    console.log(posts)

    for (const post of posts) {
        if (!post.hasOwnProperty('eyecatch')) {
            post.eyecatch = eyecatchLocal
        }
    }

    return {
        props: {
            name: cat.name,
            posts: posts,
        },
    }
}