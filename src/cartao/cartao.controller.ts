import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CartaoService } from './cartao.service';
import { CartaoEntity } from './cartao.entity';
import { CartaoDto } from './cartao-dto';

@Controller('cartoes')
export class CartaoController {
  constructor(private cartaoService: CartaoService) {}

  @Get()
  findAll(): Promise<CartaoEntity[]> {
    return this.cartaoService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.cartaoService.findById(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.cartaoService.remove(id);
  }

  @Post()
  create(@Body() dto: CartaoDto) {
    return this.cartaoService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: CartaoDto) {
    return this.cartaoService.update({ ...dto, id });
  }
}
