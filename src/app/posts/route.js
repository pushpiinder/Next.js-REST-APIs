import { NextResponse } from 'next/server';
import { posts } from '@/data/posts';
 
export async function GET() {
  return NextResponse.json(posts);
}

//POST -->
export async function POST(request) {
  const requestBody = await request.json();

  const newPost = {
    ...requestBody,
    id: posts.length
  };

  posts.push(newPost);

  return NextResponse.json({ newPost });
}