import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { ClienteDto } from 'src/cliente/cliente-dto';

export class ContaDto {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @Type(() => ClienteDto)
  @ValidateNested()
  cliente: ClienteDto;

  @IsString()
  @IsNotEmpty()
  conta: string;

  @IsString()
  @IsNotEmpty()
  agencia: string;

  @IsString()
  @IsNotEmpty()
  instituicao: string;

  @IsNumber()
  @IsNotEmpty()
  saldo: number;
}
