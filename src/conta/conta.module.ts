import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContaController } from './conta.controller';
import { ContaService } from './conta.service';
import { ContaEntity } from './conta.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ContaEntity])
  ],
  controllers: [ContaController],
  providers: [ContaService]
})
export class ContaModule {}
