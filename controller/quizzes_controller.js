const controller = require('../model/quizzes_schema');

exports.CreateData = async (req, res) => {
    try {
        const create = await controller.create(req.body);
        res.status(201).json({
            message: "Quiz data created successfully",
            data: create
        });
    } catch (err) {
        console.log("Creation of data failed:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.FetchData = async (req, res) => {
    try {
        const fetch = await controller.findById(req.params.id);
        if (!fetch) {
            return res.status(404).json({ message: "Details not found" });
        }
        res.status(200).json({
            message: "Data fetched successfully",
            data: fetch
        });
    } catch (err) {
        console.log("Fetch Data failed:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.UpdateData = async (req, res) => {
    try {
        const updatedata = await controller.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedata) {
            return res.status(404).json({ message: "Data not found for update" });
        }
        res.status(200).json({
            message: "Data updated successfully",
            data: updatedata
        });
    } catch (err) {
        console.log("Update failed:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.DeleteData = async (req, res) => {
    try {
        const deldata = await controller.findByIdAndDelete(req.params.id);
        if (!deldata) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.status(200).json({
            message: "Data deleted successfully",
            data: deldata
        });
    } catch (err) {
        console.log("Delete failed:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
