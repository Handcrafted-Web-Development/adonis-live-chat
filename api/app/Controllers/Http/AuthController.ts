import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
export default class AuthController {
  public async login({ request, auth }: HttpContextContract) {

    const email = request.input("email");
    const password = request.input("password");

    const token = await auth.use("api").attempt(email, password, {
      expiresIn: "10 days",
    });
    return token.toJSON();
  }

  public async register({ request, auth }: HttpContextContract) {

    const firstname = request.input("firstname");
    const lastname = request.input("lastname");
    const username = request.input("username");
    const email = request.input("email");
    const password = request.input("password");

    /**
     * Create a new user
     */
    const user = new User();
    user.firstname = firstname;
    user.lastname = lastname;
    user.username = username;
    user.email = email;
    user.password = password;
    await user.save();

    const token = await auth.use("api").login(user, {
      expiresIn: "10 days",
    });

    return token.toJSON();
  }
}
