import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClienteEntity } from './cliente.entity';
import { ClienteDto } from './cliente-dto';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(ClienteEntity)
    private autorRepository: Repository<ClienteEntity>,
  ) {}

  findAll(): Promise<ClienteEntity[]> {
    return this.autorRepository.find();
  }

  async findById(id: string): Promise<ClienteEntity> {
    const findOne = await this.autorRepository.findOne({ where: { id } });
    if (findOne == null) {
      throw new NotFoundException(`Cliente não encontrado com o identificador ${id}`);
    }
    return findOne;
  }

  async remove(id: string) {
    const findById = await this.findById(id);
    await this.autorRepository.remove(findById);
    return { ...findById, id };
  }

  async create(dto: ClienteDto) {
    const newAutor = this.autorRepository.create(dto);
    return this.autorRepository.save(newAutor);
  }

  async update({ id, ...dto }: ClienteDto) {
    await this.findById(id);
    return this.autorRepository.save({ id, ...dto });
  }
}
