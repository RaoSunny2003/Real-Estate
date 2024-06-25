import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {

    const { username, email, password } = req.body;

    try {
        console.log(email)
        const hassedPassword = await bcrypt.hash(password, 10);


        const userData = {
            username: username,
            password: hassedPassword,
            email: email
        };

        const user = await prisma.user.create({ data: userData });
        console.log(`Created new user with ID: ${user.id}`);
        res.status(201).json({ "msg": "User Created Succusfully" })
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Failed to Create User" })
    } finally {
        await prisma.$disconnect(); // Disconnect from Prisma after use
    }

}

export const login = async (req, res) => {

    const { username, password } = req.body;

    try {

        const user = await prisma.user.findUnique({ where: { username }, })


        if (!user) return res.status(401).json({ message: "INVAILD CREDENTIALS" });

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) return res.status(401).json({ message: "INVAILD CREDENTIALS" });

        const age = 1000 * 60 * 60 * 24 * 7;
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: age })

        console.log(token)

        res.cookie("token", token, {
            httpOnly: true,
            // secure: true,
            maxAge: age
        }).status(201).json({ message: "You are Loged In Now!" })
    } catch (err) {
        console.log("ERROR", err);
        res.status(401).json({ message: "Failed to LogIn!" })
    }

}

export const logout = (req, res) => {

    res.clearCookie("token").status(200).json({ message: "Logout Successfully" })

}