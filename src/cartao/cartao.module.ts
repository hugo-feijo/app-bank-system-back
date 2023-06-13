import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartaoEntity } from './cartao.entity';
import { CartaoController } from './cartao.controller';
import { CartaoService } from './cartao.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CartaoEntity])
  ],
  controllers: [CartaoController],
  providers: [CartaoService]
})
export class CartaoModule {}
