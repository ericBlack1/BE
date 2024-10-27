const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "cat_001"
 *         name:
 *           type: string
 *           example: "Clothing"
 *         displayName:
 *           type: string
 *           example: "Clothing"
 *         itemCount:
 *           type: integer
 *           example: 109
 *         shops:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               shopId:
 *                 type: string
 *                 example: "shop_001"
 *               shopName:
 *                 type: string
 *                 example: "Fashion Forever"
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "cl_001"
 *                     name:
 *                       type: string
 *                       example: "Winter Jacket"
 *                     price:
 *                       type: number
 *                       format: float
 *                       example: 178.00
 *                     inventoryCount:
 *                       type: integer
 *                       example: 25
 *                     status:
 *                       type: string
 *                       example: "in_stock"
 *                     variants:
 *                       type: array
 *                       items:
 *                         type: string
 *                         example: ["S", "M", "L", "XL"]
 */
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "E-commerce API",
      version: "1.0.0",
      description: "API for managing categories and services",
    },
    servers: [
        { url: `http://localhost:${process.env.PORT || 5000}` }
    ],
    components: {
      schemas: {
        // Define your schemas here
        Product: {
          type: "object",
          properties: {
            name: {
              type: "string",
              example: "Sample Product",
            },
            price: {
              type: "number",
              format: "float",
              example: 9.99,
            },
            description: {
              type: "string",
              example: "This is a sample product description.",
            },
            stock: {
              type: "integer",
              example: 100,
            },
          },
          required: ["name", "price"],
        },
      },
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerUi, swaggerDocs };
