import { NextResponse } from 'next/server';
import { comments } from '@/data/comments';
 
export async function GET(request, { params }) {

    const comment = comments.filter(each => {
        return each.postId === Number(params.id);
    });
        
    
    if(comment) return NextResponse.json(comment);

    return NextResponse.json({ error: "Comments not found"}, { status: 404 });
}