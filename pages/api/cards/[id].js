import { cards } from "@/app/data"

export default function handler(req, res) {
    res.status(200).json(cards.find(c=> c._id === req.query.id))
  }