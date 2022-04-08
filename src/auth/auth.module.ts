import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './users.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JWT_Strategy } from './jwt-strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'iskanderTopSecret',
      signOptions: { 
        expiresIn: 3600
      }
    })
  ],
  providers: [AuthService,JWT_Strategy],
  controllers: [AuthController],
  exports: [JWT_Strategy,PassportModule]
})
export class AuthModule {}