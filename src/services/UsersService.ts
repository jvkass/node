import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";


class UsersService {
  private usersRepository: Repository<User>;

  constructor(){
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create(email:string){
   // verificar se o usuario existe

    const userExists = await this.usersRepository.findOne({
      email
    })

    if(userExists){
      return userExists;
    }

    const user = this.usersRepository.create({
      email
    });

    await this.usersRepository.save(user);
    // se não existir, salvar no DB
    return user;
    //Se existir, retorna o User
  }
}

export {UsersService};