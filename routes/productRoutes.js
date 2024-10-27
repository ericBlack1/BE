const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management for SMEs
 */

/**
 * @swagger
 * /api/smes/{smeId}/products:
 *   post:
 *     summary: Create a new product for an SME
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: smeId
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the SME to which the product will be added
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status_code:
 *                   type: integer
 *                   example: 201
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Product created successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad Request - Invalid request parameters or body
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status_code:
 *                   type: integer
 *                   example: 400
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Invalid SME ID or request data"
 *       404:
 *         description: SME not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status_code:
 *                   type: integer
 *                   example: 404
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "SME not found"
 */
router.post("/:smeId/products", productController.createProduct);

/**
 * @swagger
 * /api/smes/{smeId}/products:
 *   get:
 *     summary: Get all products for an SME
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: smeId
 *         required: true
 *         schema:
 *           type: string
 *         description: SME ID
 *     responses:
 *       200:
 *         description: Products fetched successfully
 */
router.get("/:smeId/products", productController.getProducts);

/**
 * @swagger
 * /api/smes/{smeId}/products/{productId}:
 *   get:
 *     summary: Get a single product by ID for an SME
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: smeId
 *         required: true
 *         schema:
 *           type: string
 *         description: SME ID
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Product details
 */
router.get("/:smeId/products/:productId", productController.getProductById);

/**
 * @swagger
 * /api/smes/{smeId}/products/{productId}:
 *   put:
 *     summary: Update a product by ID for an SME
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: smeId
 *         required: true
 *         schema:
 *           type: string
 *         description: SME ID
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Product updated successfully
 */
router.put("/:smeId/products/:productId", productController.updateProduct);

/**
 * @swagger
 * /api/smes/{smeId}/products/{productId}:
 *   delete:
 *     summary: Delete a product by ID for an SME
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: smeId
 *         required: true
 *         schema:
 *           type: string
 *         description: SME ID
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Product deleted successfully
 */
router.delete("/:smeId/products/:productId", productController.deleteProduct);

module.exports = router;
