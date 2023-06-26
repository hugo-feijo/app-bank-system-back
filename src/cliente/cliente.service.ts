import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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
    this.validate(dto);
    const newAutor = this.autorRepository.create(dto);
    return this.autorRepository.save(newAutor);
  }

  async update(dto: ClienteDto) {
    await this.findById(dto.id);
    this.validate(dto);
    return this.autorRepository.save(dto);
  }

  validate(clienteDto: ClienteDto) {
    if(clienteDto.nome != "" && clienteDto.nome.split(' ').filter(x => x).length < 2) {
      throw new BadRequestException(
        'Informe o nome completo',
      );
    }
    
    if(clienteDto.cpf != "" && !/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(clienteDto.cpf)){  
      throw new BadRequestException(
        'Formato inválido de cpf, usar 000.000.000-00 ',
      );
    }

    
    if (new Date().getTime() < new Date(clienteDto.dataNascimento).getTime()) {
      throw new BadRequestException(
        'A data de nascimento não pode ser maior que a data atual',
      );
    }
  }
}
