import { ClienteEntity } from 'src/cliente/cliente.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'contas' })
export class ContaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => ClienteEntity, (cliente) => cliente.contas)
  cliente: ClienteEntity;

  @Column()
  instituicao: string;

  @Column()
  agencia: string;

  @Column()
  conta: string;

  @Column({type: 'float'})
  saldo: Number;
}
