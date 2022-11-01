import {connectToDatabase} from '../../../util/mongodb.js'

export default async function handler(req,res) {
    const {db} = await connectToDatabase(); 

    let data = JSON.parse(req.body);
    let doc = await db.collection('likes')
    .updateOne(
        {"slug": data.slug},
        {$set:{"likeCount": data.likeCount}}
        )
  
    res.json({message: 'ok'});
}

