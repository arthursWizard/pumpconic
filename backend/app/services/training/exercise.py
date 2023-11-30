from sqlalchemy.orm import Session
from app.models.training import Exercise
from app.schemas.training.exercise import ExerciseCreate
from app.utils.update_db_model import update_db_model


def s_get_exercises(db: Session) -> list[Exercise]:
    return db.query(Exercise).all()

def s_get_exercise(db: Session, exercise_id: str) -> Exercise | None:
    return db.query(Exercise).get(exercise_id)

def s_create_exercise(db: Session, exercise: ExerciseCreate) -> Exercise:
    db_exercise = Exercise(**vars(exercise))
    db.add(db_exercise)
    db.commit()
    db.refresh(db_exercise)
    return db_exercise

def s_update_exercise(db: Session, exercise_id: str, exercise: ExerciseCreate) -> Exercise | None:
    db_exercise = db.query(Exercise).get(exercise_id)
    if (db_exercise is None):
        return None
    update_db_model(db_exercise, exercise)
    db.commit()
    db.refresh(db_exercise)
    return db_exercise

def s_delete_exercise(db: Session, exercise_id: str) -> bool:
    db_exercise = db.query(Exercise).get(exercise_id)
    if (db_exercise is not None):
        db.delete(db_exercise)
        db.commit()
        return True
    return False
