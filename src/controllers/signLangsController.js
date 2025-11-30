import { SignLanguages } from "../models/index.js";

export async function getAllSignLanguages(req, res, next) {
  try {
    const content = await SignLanguages.findAll({
      order: [["created_at", "DESC"]],
    });

    res.json({
      success: true,
      data: content,
    });
  } catch (err) {
    next(err);
  }
}

export async function getSignLanguagesById(req, res, next) {
  try {
    const { id } = req.params;
    const content = await SignLanguages.findByPk(id);
    if (!content) {
      return res.status(404).json({
        success: false,
        message: "Content not found",
      });
    }
    res.json({
      success: true,
      data: content,
    });
  } catch (err) {
    next(err);
  }
}

export async function createSignLanguage(req, res, next) {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required",
      });
    }

    const content = await SignLanguages.create({ title, description });

    res.status(201).json({
      success: true,
      message: "Content created successfully",
      data: content,
    });
  } catch (err) {
    next(err);
  }
}

export async function updateSignLanguage(req, res, next) {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const content = await SignLanguages.findByPk(id);
    if (!content) {
      return res.status(404).json({
        success: false,
        message: "Content not found",
      });
    }
    if (title !== undefined) content.title = title;
    if (description !== undefined) content.description = description;

    await content.save();

    res.json({
      success: true,
      message: "Content updated successfully",
      data: content,
    });
  } catch (err) {
    next(err);
  }
}

export async function deleteSignLanguage(req, res, next) {
  try {
    const { id } = req.params;
    const content = await SignLanguages.findByPk(id);

    if (!content) {
      return res.status(404).json({
        success: false,
        message: "Content not found",
      });
    }

    await content.destroy();

    res.json({
      success: true,
      message: "Content deleted successfully",
    });
  } catch (err) {
    next(err);
  }
}
