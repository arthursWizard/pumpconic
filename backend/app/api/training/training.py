from operator import ge
from typing import List
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.schemas.training_dtos import ActivityDto, ExerciseDto, ProgramCreateDto, ProgramDto, TrainingDto
from app.services.training import create_program, fetch_program, fetch_programs, remove_program, update_program

router = APIRouter(
    prefix="/training"
)


@router.get("/programs")
def get_programs(db: Session = Depends(get_db)) -> List[ProgramDto]:
    return fetch_programs(db)


@router.get("/programs/{program_id}")
def get_program(program_id: str, db: Session = Depends(get_db)) -> ProgramDto | None:
    return fetch_program(db, program_id)

@router.patch("/programs/{program_id}")
def patch_program(program_id: str, program: ProgramCreateDto, db: Session = Depends(get_db)):
    update_program(db, program_id, program)


@router.post("/programs")
def post_program(program: ProgramCreateDto, db: Session = Depends(get_db)):
    create_program(db, program)


@router.delete("/programs/{program_id}")
def delete_program(program_id: str, db: Session = Depends(get_db)):
    remove_program(db, program_id)


# @router.get("/trainings")
# def fetch_trainings(db: Session = Depends(get_db)) -> List[TrainingDto]:
#     return get_trainings(db)
#
#
# @router.get("/exercises")
# def fetch_exercises(db: Session = Depends(get_db)) -> List[ExerciseDto]:
#     return get_exercises(db)
#
#
# @router.get("/activities")
# def fetch_activities(db: Session = Depends(get_db)) -> List[ActivityDto]:
#     return get_activities(db)
