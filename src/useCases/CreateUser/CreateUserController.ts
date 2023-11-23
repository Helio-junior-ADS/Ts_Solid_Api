import { Response, Request } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ){}

  handle(request: Request, response: Response): Promise<Response>;


}