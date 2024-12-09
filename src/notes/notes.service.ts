import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Note } from './note.interface';
import { createNoteDto, noteID_DTO } from './note.dto';

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService) {}

  async getAllNotes(): Promise<Note[]> {
    return await this.prisma.notes.findMany();
  }

  async getNoteDetails(noteID: number): Promise<object> {
    // return await this.prisma.notes.findUnique({ where: { id: noteID } });
    return await this.prisma
      .$queryRaw`SELECT * FROM notes WHERE id = ${noteID}`;
  }

  async addNotes(body: Note): Promise<object> {
    const { title, note, dateCreated } = body;
    await this.prisma.notes.create({
      data: {
        title,
        note,
        dateCreated,
      },
    });
    return {
      isSuccess: true,
      message: 'Added Notes Succesfully',
    };
  }

  async deleteNotes(noteID: number): Promise<Object> {
    await this.prisma.notes.deleteMany({ where: { id: noteID } });
    return {
      isSuccess: true,
      message: 'Delete Succesfully',
    };
  }
}
