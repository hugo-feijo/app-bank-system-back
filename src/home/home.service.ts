import { Injectable } from '@nestjs/common';
import { CartaoService } from 'src/cartao/cartao.service';
import { ContaService } from 'src/conta/conta.service';

@Injectable()
export class HomeService {
  constructor(
    private contaService: ContaService,
    private cartaoService: CartaoService
  ) {}

  
  async findTotalConta(): Promise<number> {
    let totalConta = 0;
    const contas = await this.contaService.findAll();
    contas.forEach(conta => totalConta = totalConta + conta.saldo)
    return totalConta;
  }

  async findTotalFatura(): Promise<number>  {
    let totalCartao = 0;
    const cartoes = await this.cartaoService.findAll();
    cartoes.forEach(conta => totalCartao = totalCartao + conta.valorProximaFatura)
    return totalCartao;
  }

}
