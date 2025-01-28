import User from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    try {
        const { user , password } = req.body;
        const userfind = await User.findOne({ user });
        if (!userfind) {
            return res.status(400).json({
                message: "User not found",
            });
        }
        const match = await bcrypt.compare(password, userfind.password);
        if (!match) {
            return res.status(400).json({
                message: "Invalid password",
                });
        }
        const token = jwt.sign({ id: user.id, nombre: user.nombre }, process.env.TOKEN_SECRET, { expiresIn: '1h' });

        return res.json({
            message: "Login successful",
            token: token
        });
    } catch (error) {
        res.status(500).json({
            message: "Error login",
            data: {},
        });
    }
}
