import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [NotesService, PrismaService],
  controllers: [NotesController],
})
export class NotesModule {}
