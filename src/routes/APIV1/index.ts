import { Router } from 'express';

const router = Router();

router.use('/test', (req, res, next) => {
  res.status(200).json({ message: 'You made it ' });
});

export default router;
