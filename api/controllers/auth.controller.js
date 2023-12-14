import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandeler } from "../utils/error.js";
export const signup = async (req, res, next) => {
	const { username, email, password } = req.body;
	const hashedPassword = bcryptjs.hashSync(password, 10);
	const newUser = new User({ username, email, password: hashedPassword });
	try {
		await newUser.save(newUser);
		res.status(201).json("Save sucessfully!");
	} catch (error) {
		next(error);
	}
	// catch (error) {
	// 	next(errorHandeler(550, "Error from function"));
	// }
};
