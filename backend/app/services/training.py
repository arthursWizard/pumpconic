from typing import List

from sqlalchemy.orm import Session
from app.models.training import Activity, Exercise, Program, Training
from app.schemas.training_dtos import ActivityDto, ExerciseDto, ProgramDto, TrainingDto


def get_programs(db: Session) -> List[ProgramDto]:
    return db.query(Program).all()


def get_program(db: Session, program_id: str) -> ProgramDto | None:
    return db.query(Program).get(program_id)


def get_trainings(db: Session) -> List[TrainingDto]:
    return db.query(Training).all()

def get_exercises(db: Session) -> List[ExerciseDto]:
    return db.query(Exercise).all()


def get_activities(db: Session) -> List[ActivityDto]:
    return db.query(Activity).all()
