const Service = require("../models/serviceModel");

exports.getServices = async (req, res) => {
  try {
    const services = await Service.find({});
    res.status(200).json({
      status_code: 200,
      success: true,
      message: "Services fetched successfully",
      data: services,
    });
  } catch (error) {
    res.status(500).json({ status_code: 500, success: false, message: "Failed to fetch services" });
  }
};

exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ status_code: 404, success: false, message: "Service not found" });
    res.status(200).json({ status_code: 200, success: true, message: "Service fetched successfully", data: service });
  } catch (error) {
    res.status(500).json({ status_code: 500, success: false, message: "Failed to fetch service" });
  }
};

exports.createService = async (req, res) => {
  try {
    const { title, status } = req.body;
    const image = req.file ? req.file.path : null; // Get image path from uploaded file

    const newService = new Service({
      title,
      image,
      status
    });

    await newService.save();
    res.status(201).json({
      status_code: 201,
      success: true,
      message: "Service created successfully",
      data: newService,
    });
  } catch (error) {
    console.error("Error creating service:", error); // Log error to console
    res.status(500).json({ status_code: 500, success: false, message: "Failed to create service" });
  }
};

exports.updateService = async (req, res) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedService) return res.status(404).json({ status_code: 404, success: false, message: "Service not found" });
    res.status(200).json({ status_code: 200, success: true, message: "Service updated successfully", data: updatedService });
  } catch (error) {
    res.status(500).json({ status_code: 500, success: false, message: "Failed to update service" });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (!deletedService) return res.status(404).json({ status_code: 404, success: false, message: "Service not found" });
    res.status(200).json({ status_code: 200, success: true, message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ status_code: 500, success: false, message: "Failed to delete service" });
  }
};
