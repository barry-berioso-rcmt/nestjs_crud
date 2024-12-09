import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note } from './note.interface';
import { createNoteDto, noteID_DTO } from './note.dto';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get('get-notes')
  async getAllNotes(): Promise<Note[]> {
    return await this.notesService.getAllNotes();
  }

  @Get('get-note-details')
  async getNoteDetails(@Query() query: noteID_DTO): Promise<object> {
    const noteID = query.noteID;
    return this.notesService.getNoteDetails(noteID);
  }

  @Post('add-notes')
  getAddNotes(@Body() body: createNoteDto) {
    return this.notesService.addNotes(body);
  }

  @Delete('delete-note')
  deleteNote(@Query() query: noteID_DTO) {
    const noteID = query.noteID;
    return this.notesService.deleteNotes(noteID);
  }
}
