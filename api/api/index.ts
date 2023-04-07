import express from 'express';
import bonkwin from './routes/bonkwin';
const router = express.Router();
router.use('/bonkwin', bonkwin);
export default router;
