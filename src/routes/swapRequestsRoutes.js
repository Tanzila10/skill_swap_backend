import express from 'express';
import { 
    acceptSwapRequest, 
    cancelSwapRequest, 
    completeSwap, 
    getActiveSwaps, 
    getReceivedRequests, 
    getSentRequests, 
    getSwapStats, 
    rejectSwapRequest, 
    sendSwapRequest 
} from '../controllers/swapControllers/index.js';
import protectedRoutes from '../middleware/auth.js';

const router = express.Router();

// ======================================
// API ENDPOINTS DOCUMENTATION
// ======================================

/*

API Endpoints:

POST /api/swaps/request
- Send a swap request
- Body: { receiver_id, offered_skill_id, requested_skill_id, message? }

GET /api/swaps/requests/received?status=pending&page=1&limit=10
- Get received swap requests
- Query params: status (all|pending|accepted|rejected), page, limit

GET /api/swaps/requests/sent?status=pending&page=1&limit=10
- Get sent swap requests
- Query params: status (all|pending|accepted|rejected|cancelled), page, limit

PATCH /api/swaps/requests/:id/accept
- Accept a swap request
- Body: {} (empty)

PATCH /api/swaps/requests/:id/reject
- Reject a swap request
- Body: { reason? }

PATCH /api/swaps/requests/:id/cancel
- Cancel a sent swap request
- Body: {} (empty)

GET /api/swaps/active
- Get active swaps for the user

PATCH /api/swaps/active/:id/complete
- Mark a swap as complete
- Body: { rating?, feedback? }

GET /api/swaps/stats
- Get swap statistics for the user

*/

router.use(protectedRoutes());

// router.route('/').get(protectedRoutes(), sendSwapRequest);
// Swap request routes
router.post('/', sendSwapRequest)
router.get('/received', getReceivedRequests)
router.get('/sent', getSentRequests)
router.patch('/:id/accept', acceptSwapRequest)
router.patch('/:id/reject', rejectSwapRequest)
router.patch('/:id/cancel', cancelSwapRequest)

// Active swap routes
router.get('/active', getActiveSwaps)
router.patch('/active/:id/complete', completeSwap)

// Statistics
router.get('/stats', getSwapStats)

export default router;