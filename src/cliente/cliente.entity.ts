import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GeneroEnum } from './genero.enum';
import { ContaEntity } from 'src/conta/conta.entity';
import { CartaoEntity } from 'src/cartao/cartao.entity';

@Entity({ name: 'clientes' })
export class ClienteEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column({ type: 'date', name: 'data_nascimento', nullable: true })
  dataNascimento: Date;

  @Column()
  cpf: string;

  @Column()
  rg: string;

  @Column({
    type: 'enum',
    enum: GeneroEnum,
    default: GeneroEnum.INDEFINIDO,
    nullable: true,
  })
  genero: GeneroEnum;

  @OneToMany(() => ContaEntity, (conta) => conta.cliente)
  contas: ContaEntity[];

  @OneToMany(() => CartaoEntity, (cartao) => cartao.cliente)
  cartoes: CartaoEntity[]
}
