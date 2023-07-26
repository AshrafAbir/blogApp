import { NextResponse } from "next/server";
import connect from "@/utilis/db";
import Post from "@/models/Post";

export const GET = async(Request , {params})=> {
    
     const {id} = params;

    try {
        await connect();
        
        const post = await Post.findById(id);
        return new NextResponse(JSON.stringify(post), {status : 200})
        // return new NextResponse('connected' , {status: 200});
    } catch (err) {
        return new NextResponse('Database Error', {status : 500} );
    
        
    }

    
}

export const DELETE = async(Request , {params})=> {
    
    const {id} = params;

   try {
       await connect();
       
        await Post.findByIdAndDelete(id);
       return new NextResponse("Post has been deleted", {status : 201})
       // return new NextResponse('connected' , {status: 200});
   } catch (err) {
       return new NextResponse('Database Error', {status : 500} );
   
       
   }

   
}