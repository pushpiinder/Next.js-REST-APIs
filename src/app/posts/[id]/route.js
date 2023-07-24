import { NextResponse } from 'next/server';
import { posts } from '@/data/posts';
 
export async function GET(request, { params }) {

    const post = posts.find(each => Number(params.id) === each.id);
    
    if(post) return NextResponse.json(post);

    return NextResponse.json({ error: "Page not found"}, { status: 404 });
}


//PUT -->
export async function PUT(request, { params }) {
    const requestBody = await request.json();

    const post = posts.find(each => Number(params.id) === each.id);

    const postIndex = posts.findIndex(each => Number(params.id) === each.id);

    if(post) {
        const updatedPost = {
            ...post,
            ...requestBody
        };

        posts[postIndex] = updatedPost;

        return NextResponse.json(updatedPost);
    }
  
    return NextResponse.json({ error: "Page not found"}, { status: 404 });
}