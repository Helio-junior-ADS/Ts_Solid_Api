import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUserRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor (
        private usersRepository: IUserRepository,
        private mailProvider: IMailProvider
    ){}


    async execute (data: ICreateUserRequestDTO){
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);       
        
        
        if(userAlreadyExists){
            throw new Error("User already exists.");
        }

        const user = new User(data);
        
        await this.usersRepository.save(user);

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email
            },
            from: {
                name: "Hermione",
                email: "meuAmorhelioJunior@mcfly.com"
            },
            subject: "Declaração de Amor",
            body: "<p>Meu amor sempre fui louca por vôce me der uma chance de fazer vc a pessoa mais feliz do mundo</p>"
        });
    }

}