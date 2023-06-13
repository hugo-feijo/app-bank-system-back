import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartaoEntity } from './cartao.entity';
import { CartaoDto } from './cartao-dto';

@Injectable()
export class CartaoService {
  constructor(
    @InjectRepository(CartaoEntity)
    private cartaoRepository: Repository<CartaoEntity>,
  ) {}

  findAll(): Promise<CartaoEntity[]> {
    return this.cartaoRepository.find();
  }

  async findById(id: string): Promise<CartaoEntity> {
    const findOne = await this.cartaoRepository.findOne({ where: { id } });
    if (findOne == null) {
      throw new NotFoundException(`Cartão de credito não encontrado com o identificador ${id}`);
    }
    return findOne;
  }

  async remove(id: string) {
    const findById = await this.findById(id);
    console.log('Find By Id');
    console.log(findById);
    await this.cartaoRepository.remove(findById);
    return { ...findById, id };
  }

  async create(dto: CartaoDto) {
    this.validate(dto);
    const newAutor = this.cartaoRepository.create(dto);
    return this.cartaoRepository.save(newAutor);
  }

  async update(dto: CartaoDto) {
    await this.findById(dto.id);
    this.validate(dto)
    return this.cartaoRepository.save(dto);
  }

  validate(dto: CartaoDto) {
    if(dto.limite < 0) {
      throw new BadRequestException(
        'Limite precisa ser maior que 0',
      );
    }
    
    if(dto.valorProximaFatura > dto.limite){  
      throw new BadRequestException(
        'Valor da fatura maior que o limite',
      );
    }

    
    if (new Date().getTime() > new Date(dto.vencimentoFatura).getTime()) {
      throw new BadRequestException(
        'Vencimento da fatura inferior a data atual',
      );
    }
  }
}
