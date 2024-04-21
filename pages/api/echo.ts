import {NextApiRequest, NextApiResponse} from "next";

interface ResponseData {
    message: string
}

export default function echo(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    res.send({message: "this is api"})

}