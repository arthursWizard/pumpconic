from typing import List

from sqlalchemy.orm import Session
from app.models.training import Activity, Exercise, Program, Training
from app.schemas.training_dtos import ActivityCreateDto, ActivityDto, ExerciseCreateDto, ExerciseDto, ProgramCreateDto, ProgramDto, TrainingCreateDto, TrainingDto


def fetch_programs(db: Session) -> List[ProgramDto]:
    return db.query(Program).all()

def fetch_program(db: Session, program_id: str) -> ProgramDto | None:
    return db.query(Program).get(program_id)

def update_program(db: Session, program_id: str, program: ProgramCreateDto) -> None:
    db.query(Program).filter_by(id=program_id).update(vars(program))
    db.commit()

def create_program(db: Session, program: ProgramCreateDto) -> None:
    db.add(program)
    db.commit()

def remove_program(db: Session, program_id: str) -> None:
    db.query(Program).filter_by(id=program_id).delete()
    db.commit()

def fetch_trainings(db: Session) -> List[TrainingDto]:
    return db.query(Training).all()

def fetch_training(db: Session, training_id: str) -> TrainingDto | None:
    return db.query(Training).get(training_id)

def update_training(db: Session, training_id: str, training: TrainingCreateDto) -> None:
    db.query(Training).filter_by(id=training_id).update(vars(training))
    db.commit()

def create_training(db: Session, training: TrainingCreateDto) -> None:
    db.add(training)
    db.commit()

def remove_training(db: Session, training_id: str) -> None:
    db.query(Training).filter_by(id=training_id).delete()
    db.commit()

def fetch_exercises(db: Session) -> List[ExerciseDto]:
    return db.query(ExerciseDto).all()

def fetch_exercise(db: Session, exercise_id: str) -> ExerciseDto | None:
    return db.query(ExerciseDto).get(exercise_id)

def update_exercise(db: Session, exercise_id: str, exercise: ExerciseCreateDto) -> None:
    db.query(Exercise).filter_by(id=exercise_id).update(vars(exercise))
    db.commit()

def create_exercise(db: Session, exercise: ExerciseCreateDto) -> None:
    db.add(exercise)
    db.commit()

def remove_exercise(db: Session, exercise_id: str) -> None:
    db.query(Exercise).filter_by(id=exercise_id).delete()
    db.commit()

def fetch_activities(db: Session) -> List[ActivityDto]:
    return db.query(Activity).all()

def fetch_activity(db: Session, activity_id: str) -> ActivityDto | None:
    return db.query(Activity).get(activity_id)

def update_activity(db: Session, activity_id: str, activity: ActivityCreateDto) -> None:
    db.query(Activity).filter_by(id=activity_id).update(vars(activity))
    db.commit()

def create_activity(db: Session, activity: ActivityCreateDto) -> None:
    db.add(activity)
    db.commit()

def remove_activity(db: Session, activity_id: str) -> None:
    db.query(Activity).filter_by(id=activity_id).delete()
    db.commit()
