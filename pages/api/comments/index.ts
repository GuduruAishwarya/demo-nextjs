export const comments=
    [
        {
            id:1,
            text:'comment 1'
        },
        {
            id:2,
            text:'comment 2'
        },
        {
            id:3,
            text:'comment 3'
        },

    ]
export default function handler(req, res) {
    
    //get request
    if(req.method==='GET')
    {
        // console.log(comments)
        res.status(200).json(comments);
    }
    else if(req.method==='POST')//post
    {
        const newcomment={
            id:Date.now(),
            text:req.body.comm
        }
        comments.push(newcomment)
        // console.log(comments)
        res.status(201).json(newcomment);
    }
    

  }

