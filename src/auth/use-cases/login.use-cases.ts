import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";

import { LoginDto } from "../dto/login.dto";
import { FindUserByEmailRepository } from "../repository";
import { use } from "passport";

@Injectable()
export class LoginUseCases {
    constructor(
        private readonly findUserByEmailRepository: FindUserByEmailRepository,
        private readonly jwtService: JwtService,
        private readonly logger: Logger,
    ) {}

    async execute(data: LoginDto) {
        this.logger.log("Logging user...");

        const user = await this.findUserByEmailRepository.findByEmail(data.email);
        if (!user){
            throw new UnauthorizedException("Invalid credentials.")
        }

        if (!user) {
            throw new UnauthorizedException("Invalid credentials.");
        }

        const passwordMatch = await bcrypt.compare( data.password, user.passwordHash,);

        if (!passwordMatch) {
            throw new UnauthorizedException("Invalid credentials.");
        }

        const payload = {
            sub: user.id,
            email: user.email,
        };

        const accessToken = this.jwtService.sign(payload);

        this.logger.log("User logged successfully!");

        return {
            accessToken,
            user:{
                id: user.id,
                name: user.name,
                email: user.email
            }
        };
    }
}