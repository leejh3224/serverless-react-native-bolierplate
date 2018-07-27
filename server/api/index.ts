import { Router, Request, Response } from 'express'

const router: Router = Router()

router.get('/app', (req: Request, res: Response) => {
  res.send('hi!')
})

export default router
