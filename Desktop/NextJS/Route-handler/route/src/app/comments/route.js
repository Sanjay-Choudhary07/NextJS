import { comments } from "./data";
export async function GET(request){
    
    // const searchParams = request.nextUrl.searchParams
    const searchParams = new URL(request.url).searchParams;
    const query = searchParams.get("query");
    const filteredComments = query?
    comments.filter(comment=>comment.text.includes(query)):
    comments;
    // return Response.json(filteredComments);
    return new Response(JSON.stringify(filteredComments), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 200,
    });
}
export async function POST(request){
    const comment = await request.json();
    const newcomment = {
        id:comments.length+1,
        text:comment.text,
    };
    comments.push(newcomment);
    return new Response(JSON.stringify(newcomment),{
        headers:{
            "Content-Type":"application/json",
        },
        status:201,
    });
}