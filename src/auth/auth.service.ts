import { Injectable } from "@nestjs/common";
import { RegisterUseCases } from "./use-cases/register.use-cases";
import { LoginUseCases } from "./use-cases/login.use-cases";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
    constructor(
        private readonly registerUseCases: RegisterUseCases,
        private readonly loginUseCases: LoginUseCases,
    ) {}
    async register(data: RegisterDto){
        return await this.registerUseCases.execute(data);
    }

    async login(data: LoginDto) {
        return await this.loginUseCases.execute(data);
    }
}