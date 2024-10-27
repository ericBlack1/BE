const SME = require('../models/SME');

exports.registerSME = async (req, res) => {
  try {
    const { userId, businessName, owner, type, description, location, contactInfo } = req.body;

    // Create new SME
    const newSME = await SME.create({
      userId,
      businessName,
      owner,
      type,
      description,
      location,
      contactInfo
    });

    res.status(201).json({
      status_code: 201,
      success: true,
      message: "SME account created successfully",
      data: {
        smeId: newSME._id,
        businessName: newSME.businessName
      }
    });
  } catch (error) {
    res.status(500).json({
      status_code: 500,
      success: false,
      message: "Failed to create SME account",
      error: error.message
    });
  }
};
