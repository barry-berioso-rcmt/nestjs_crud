import { Type } from 'class-transformer';
import { IsInt, isNumber, IsString } from 'class-validator';

export class createNoteDto {
  @IsString()
  title: string;

  @IsString()
  note: string;

  @IsString()
  dateCreated: string;
}

export class noteID_DTO {
  @Type(() => Number)
  @IsInt()
  noteID: number;
}
