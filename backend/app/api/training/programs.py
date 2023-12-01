from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.training.program import Program, ProgramCreate
from app.services.training.program import s_delete_program, s_get_program, s_get_programs, s_create_program, s_update_program


router = APIRouter(
    prefix="/programs"
)


@router.get("/", response_model=list[Program])
def get_programs(db: Session = Depends(get_db)):
    """
    Returns the list of all available programs.
    """
    
    return s_get_programs(db)


@router.get("/{program_id}", response_model=Program)
def get_program(program_id: str, db: Session = Depends(get_db)):
    """
    Returns a program with specified Id.
    If the program is not found, exception will be raised.
    """
    
    db_program = s_get_program(db, program_id)
    if (db_program is None):
        raise HTTPException(status_code=404, detail=f"Program with id {program_id} was not found")
    return db_program

@router.post("/", response_model=Program)
def create_program(program: ProgramCreate, db: Session = Depends(get_db)):
    """
    Creates a new program instance in db and returns created instance.
    """
    
    return s_create_program(db, program)


@router.put("/{program_id}", response_model=Program)
def update_program(program_id: str, program: ProgramCreate, db: Session = Depends(get_db)):
    """
    Updates existing program in the db with new information and returns the updated instance.
    If the program is not found, exception will be raised.
    """

    db_program = s_update_program(db, program_id, program)
    if (db_program is None):
        raise HTTPException(status_code=404, detail=f"Program with id {program_id} was not found")
    return db_program


@router.delete("/{program_id}", status_code=204)
def delete_program(program_id: str, db: Session = Depends(get_db)):
    """
    Deletes program from the db.
    If the program is not found, exception will be raised.
    """

    success = s_delete_program(db, program_id)
    if (not success):
        raise HTTPException(status_code=404, detail=f"Program with id {program_id} was not found")
    return {"ok": True}

