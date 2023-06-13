import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { ContaService } from 'src/conta/conta.service';
import { CartaoService } from 'src/cartao/cartao.service';
import { HomeController } from './home.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContaEntity } from 'src/conta/conta.entity';
import { CartaoEntity } from 'src/cartao/cartao.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([ContaEntity, CartaoEntity])
  ],
  controllers: [HomeController],
  providers: [HomeService, ContaService, CartaoService]
})
export class HomeModule {}
