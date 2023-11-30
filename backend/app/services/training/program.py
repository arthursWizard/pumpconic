from sqlalchemy.orm import Session
from app.models.training import Program
from app.schemas.training.program import ProgramCreate
from app.utils.update_db_model import update_db_model


def s_get_programs(db: Session) -> list[Program]:
    return db.query(Program).all()

def s_get_program(db: Session, program_id: str) -> Program | None:
    return db.query(Program).get(program_id)

def s_create_program(db: Session, program: ProgramCreate) -> Program:
    db_program = Program(**vars(program))
    db.add(db_program)
    db.commit()
    db.refresh(db_program)
    return db_program

def s_update_program(db: Session, program_id: str, program: ProgramCreate) -> Program | None:
    db_program = db.query(Program).get(program_id)
    if (db_program is None):
        return None
    update_db_model(db_program, program)
    db.commit()
    db.refresh(db_program)
    return db_program

def s_delete_program(db: Session, program_id: str) -> bool:
    db_program = db.query(Program).get(program_id)
    if (db_program is not None):
        db.delete(db_program)
        db.commit()
        return True
    return False
