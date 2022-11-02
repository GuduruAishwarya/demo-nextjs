import { comments } from ".";
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse)
{
    
    const cid=String(req.query.commentId);
    if(req.method==='GET')
    {
        // console.log(req.query,req.query.commentId,cid)
        const comment =comments.find((c)=>c.id === parseInt(cid))
        // console.log(comment)
        res.status(200).json(comment)
    }
    else if(req.method==='DELETE')//post
    {
        console.log("delete"+cid)
        const comment =comments.find((c)=>c.id === parseInt(cid))
        const index=comments.findIndex((c)=>c.id===parseInt(cid))
        console.log(comment,index)
        comments.splice(index,1)
        console.log(comments)
        res.status(200).json(comments);
    }
    
}