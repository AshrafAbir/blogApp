// request from register page

import User from "@/models/User";
import connect from "@/utilis/db";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export const POST = async (request) => {
    //from request body destruturing 
    const { name, email, password } = await request.json();
    // data base connect
    await connect();
    // hashed password
    const hashedPassword = await bcrypt.hash(password, 5);
    //new user using these credentials from request
    const newUser = new User({
        name,
        email,
        password: hashedPassword,
    })

    try {

        // save the user in mongodb
        await newUser.save();
        return new NextResponse('User has been created', {
            status: 201,
        });

    } catch (error) {
        return new NextResponse(error.message, {
            status: 500,
        });
    }

};



