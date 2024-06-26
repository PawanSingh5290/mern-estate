import express from 'express';

const router = express.Router();
import { createListing , deleteListing,updateListing, getListing} from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

router.post('/create',verifyToken, createListing)
router.delete('/delete/:id',verifyToken,deleteListing);
router.post('/update/:id',verifyToken,updateListing);
router.get('/get/:id',getListing);

export default router;