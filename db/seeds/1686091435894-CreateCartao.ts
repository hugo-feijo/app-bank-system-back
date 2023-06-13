import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateCartao1686091435894 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
        INSERT INTO cartoes (nome, limite, valor_proxima_fatura, vencimento_fatura, dia_fechamento, "clienteId")
        VALUES ('Nubank', 24567, 9700, '2023-06-20', 15, (SELECT c.id
                                                          FROM clientes c
                                                          WHERE cpf='789.654.123-87'
                                                          LIMIT 1));           
      `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
          DELETE FROM cartoes WHERE limite = 24567
      `);
    }

}
