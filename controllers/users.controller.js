// userControllers.js
import User from '../models/user.model.js'; // Предполагаем, что у вас есть модель пользователя

// Получить всех пользователей
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Не удалось получить пользователей", error: error.message });
  }
};

// Получить одного пользователя по ID
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    
    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }
    
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Не удалось получить пользователя", error: error.message });
  }
};

// Создать нового пользователя
export const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = new User(userData);
    const savedUser = await newUser.save();
    
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: "Не удалось создать пользователя", error: error.message });
  }
};

// Обновить пользователя
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    const updatedUser = await User.findByIdAndUpdate(
      id, 
      updateData, 
      { new: true, runValidators: true }
    );
    
    if (!updatedUser) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }
    
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: "Не удалось обновить пользователя", error: error.message });
  }
};

// Удалить пользователя
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    
    if (!deletedUser) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }
    
    res.status(200).json({ message: "Пользователь успешно удален", user: deletedUser });
  } catch (error) {
    res.status(500).json({ message: "Не удалось удалить пользователя", error: error.message });
  }
};