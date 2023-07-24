import { NextResponse } from 'next/server';
import { comments } from '@/data/comments';
 
export async function GET(request) {

    const { searchParams } = new URL(request.url)
    const postId = searchParams.get('postId')

    const commentsList = postId ? comments.filter(each => {
        return each.postId === Number(postId);
    }) : comments;
        
    return NextResponse.json(commentsList);

    // return NextResponse.json({ error: "Comments not found"}, { status: 404 });
}