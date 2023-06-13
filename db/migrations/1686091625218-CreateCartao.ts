import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCartao1686091625218 implements MigrationInterface {
    name = 'CreateCartao1686091625218'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`CREATE TABLE "cartoes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "limite" double precision NOT NULL, "valor_proxima_fatura" double precision NOT NULL, "vencimento_fatura" date NOT NULL, "dia_fechamento" integer NOT NULL, "clienteId" uuid, CONSTRAINT "PK_3e003b4e4bc003e65b11ec76e5a" PRIMARY KEY ("id"))`);
      await queryRunner.query(`ALTER TABLE "cartoes" ADD CONSTRAINT "FK_2fb144c7e011985035353fa0a28" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE "cartoes" DROP CONSTRAINT "FK_2fb144c7e011985035353fa0a28"`);
      await queryRunner.query(`DROP TABLE "cartoes"`);
    }

}
