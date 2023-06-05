import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateConta1686006536599 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
        INSERT INTO contas (instituicao, agencia, conta, saldo, "clienteId")
        VALUES ('Nubank', '0001', '15325678', 175.8, (SELECT c.id
                                                      FROM clientes c
                                                      WHERE cpf='789.654.123-87'
                                                      LIMIT 1));           
      `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
          DELETE FROM contas WHERE conta = '15325678'
      `);
    }

}
