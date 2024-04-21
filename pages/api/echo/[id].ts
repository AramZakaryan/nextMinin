import {NextApiRequest, NextApiResponse} from "next";

interface ResponseData {
    message: string
}
export default function echoById(req:NextApiRequest, res:NextApiResponse<ResponseData>) {
    res.send({message: "api response for id " + req.query.id})
}