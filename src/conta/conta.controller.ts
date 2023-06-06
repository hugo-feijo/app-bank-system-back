import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ContaService } from './conta.service';
import { ContaEntity } from './conta.entity';
import { ContaDto } from './conta-dto';

@Controller('contas')
export class ContaController {
  constructor(private contaService: ContaService) {}

  @Get()
  findAll(): Promise<ContaEntity[]> {
    return this.contaService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.contaService.findById(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.contaService.remove(id);
  }

  @Post()
  create(@Body() dto: ContaDto) {
    return this.contaService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: ContaDto) {
    return this.contaService.update({ ...dto, id });
  }
}
