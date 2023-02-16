import { Router } from 'express';
import apiv1 from './APIV1';
import nonExistingRoute from '../middleware/nonExistingRoute';

const router = Router();

// Handle routes to the first version of the API
router.use('/api/v1', apiv1);

// Handle non-existing routes
router.use('*', nonExistingRoute);

export default router;
