import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataSourceOptions } from 'db/data-source';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './cliente/cliente.module';
import { ContaModule } from './conta/conta.module';
import { CartaoModule } from './cartao/cartao.module';
import { HomeModule } from './home/home.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    ClienteModule,
    ContaModule,
    CartaoModule,
    HomeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
