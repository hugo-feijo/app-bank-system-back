import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteEntity } from './cliente.entity';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ClienteEntity])
  ],
  controllers: [ClienteController],
  providers: [ClienteService]
})
export class ClienteModule {}
