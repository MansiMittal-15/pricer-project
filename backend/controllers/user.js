import { User } from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullname, email, password, phoneNumber } = req.body;
    if (!fullname || !email || !password || !phoneNumber) {
      return res.status(400).json({
        success: false,
        message: "Some data fields are missing!",
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Account already exits!",
      });
    }

    const hashedPassword = bcrypt.hash(password, 10);
    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
    });

    return res.status(200).json({
      success: true,
      message: "Account created successfully!",
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Some data field is missing!",
      });
    }
    const user = User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Wrong email or password!",
      });
    }
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.status(400).json({
        success: false,
        message: "Wrong email or password!",
      });
    }
    const tokenData = {
      userId: user._id,
    };

    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "strict",
      })
      .json({
        success: true,
        message: `Welcome back, ${user.fullname}`,
        user,
      });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      success: true,
      message: "User logged out successfully!",
    });
  } catch (error) {
    console.log(error);
  }
};
