import { ClienteEntity } from 'src/cliente/cliente.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cartoes' })
export class CartaoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => ClienteEntity, (cliente) => cliente.contas, { cascade: true, onDelete: "CASCADE" , eager: true})
  cliente: ClienteEntity;

  @Column()
  nome: string;

  @Column({type: 'float'})
  limite: number;

  @Column({type: 'float', name: 'valor_proxima_fatura'})
  valorProximaFatura: number;

  @Column({type: 'date', name: 'vencimento_fatura'})
  vencimentoFatura: Date;

  @Column({type: 'int', name: 'dia_fechamento'})
  diaFechamento: number;
}
