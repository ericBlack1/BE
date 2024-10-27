const express = require('express');
const { registerSME } = require('../controllers/smeController');

const router = express.Router();

/**
 * @swagger
 * /api/sme/register:
 *   post:
 *     summary: Register a new SME
 *     tags: [SME]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               businessName:
 *                 type: string
 *               owner:
 *                 type: string
 *               type:
 *                 type: string
 *               description:
 *                 type: string
 *               location:
 *                 type: string
 *               contactInfo:
 *                 type: object
 *                 properties:
 *                   phone:
 *                     type: string
 *                   email:
 *                     type: string
 *     responses:
 *       201:
 *         description: SME account created successfully
 *       500:
 *         description: Server error
 */
router.post('/register', registerSME);

module.exports = router;
