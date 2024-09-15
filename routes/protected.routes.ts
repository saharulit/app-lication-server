import { Router } from 'express';
import { authenticate } from '../auth.middleware';
import appliedJobRoutes from './appliedJobRoutes';

const router = Router();

// router.use('/applied-jobs', authenticate, appliedJobRoutes);

export default router;
