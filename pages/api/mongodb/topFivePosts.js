import {connectToDatabase} from '../../../util/mongodb.js'

export default async function handler(req,res) {
    const {db} = await connectToDatabase(); 

    const data = await db.collection("likes")
    .find({})
    .sort({ likeCount: -1 })
    .limit(5)
    .toArray();

    res.json(data);
}