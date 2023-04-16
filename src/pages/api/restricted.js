import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"


export default async (req, res) => {
  const session = await getServerSession(req, res, authOptions)
  if (session) {
    res.send({
      content:
        "Este é o conteúdo protegido. Você só pode vê-lo se estiver logado no site.",
    })
  } else {
    res.send({
      error: "Você não tem permissão para acessar este conteúdo.",
    })
  }
}