import { Schema, model } from "mongoose";

export type UserType = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    salary?: number;
    baseCurrency?: string;
}

const userSchema = new Schema<UserType>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    salary: { type: Number, default: 640 },
    baseCurrency: { type: String, default: 'EUR' }
}, { timestamps: true });

// Exporting User allows you to use `new User()` in controller.
export const User = model<UserType>("User", userSchema);