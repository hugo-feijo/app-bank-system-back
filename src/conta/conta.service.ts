import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContaEntity } from './conta.entity';
import { ContaDto } from './conta-dto';

@Injectable()
export class ContaService {
  constructor(
    @InjectRepository(ContaEntity)
    private contaRepository: Repository<ContaEntity>,
  ) {}

  findAll(): Promise<ContaEntity[]> {
    return this.contaRepository.find();
  }

  async findById(id: string): Promise<ContaEntity> {
    const findOne = await this.contaRepository.findOne({ where: { id } });
    if (findOne == null) {
      throw new NotFoundException(`Conta não encontrado com o identificador ${id}`);
    }
    return findOne;
  }

  async remove(id: string) {
    const findById = await this.findById(id);
    await this.contaRepository.remove(findById);
    return { ...findById, id };
  }

  async create(dto: ContaDto) {
    const newAutor = this.contaRepository.create(dto);
    return this.contaRepository.save(newAutor);
  }

  async update({ id, ...dto }: ContaDto) {
    await this.findById(id);
    return this.contaRepository.save({ id, ...dto });
  }
}
